import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { authService, dbService } from "fbase";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogoutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyNweets = async () => {
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
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <button onClick={onLogoutClick}>Logout</button>
    </>
  );
};
export default Profile;
