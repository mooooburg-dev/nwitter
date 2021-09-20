import React from "react";
import { authService } from "fbase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthForm from "components/AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// export default () => <span>Auth</span>;

// 위의 방식으로 작성해도 되지만
// Auth 컴포넌트를 사용하는 부모 컴포넌트에서 자동으로 import 되게 하려면
const Auth = () => {
  const onSicialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else {
      provider = new GithubAuthProvider();
    }
    await signInWithPopup(authService, provider);
  };

  return (
    <>
      <div className="authContainer">
        <FontAwesomeIcon
          icon={faTwitter}
          color={"#04AAFF"}
          size="3x"
          style={{ marginBottom: 30 }}
        />
        <AuthForm />
        <div className="authBtns">
          <button onClick={onSicialClick} name="google" className="authBtn">
            Continue with Google
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button onClick={onSicialClick} name="github" className="authBtn">
            Continue with Github
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Auth;
