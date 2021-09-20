import React from "react";
import { authService } from "fbase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthForm from "components/AuthForm";

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
      <div>
        <AuthForm />
        <button onClick={onSicialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSicialClick} name="github">
          Continue with Github
        </button>
      </div>
    </>
  );
};
export default Auth;
