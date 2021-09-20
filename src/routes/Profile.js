import { updateProfile } from "@firebase/auth";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { authService, dbService } from "fbase";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj?.displayName);

  const onLogoutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const getMyNweets = useCallback(async () => {
    // V8
    // const nweets = await dbService
    //   .collection("nweets")
    //   .where("creatorId", "==", userObj.uid)
    //   .get();

    // V9
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid),
      orderBy("createAt")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=> ", doc.data());
    });
  }, [userObj.uid]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (userObj.displayName !== newDisplayName) {
      // update v8
      // userObj.updateProfile()

      // v9
      await updateProfile(userObj, {
        displayName: newDisplayName,
      });

      refreshUser();
    }
  };

  useEffect(() => {
    getMyNweets();
  }, [getMyNweets]);

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogoutClick}>
        Log Out
      </span>
    </div>
  );
};
export default Profile;
