import { EmailAuthCredential } from "@firebase/auth";
import React, { useState } from "react";

// export default () => <span>Auth</span>;

// 위의 방식으로 작성해도 되지만
// Auth 컴포넌트를 사용하는 부모 컴포넌트에서 자동으로 import 되게 하려면
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Login" />
      </form>

      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
};
export default Auth;
