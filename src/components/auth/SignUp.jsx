import { useState } from "react";

import classes from "./SignUp.module.scss";
import InputWithButton from "/src/components/form/InputWithButton";
function SignUp() {
  const [email, setEmail] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    //TODO: Add Sign Up Logic
    console.log(email);
  }

  return (
    <form onSubmit={handleSignUp}>
      <InputWithButton
        placeholder="Enter Email Address"
        btnContent={
          <p className={`body-text-md ${classes["btn-text"]}`}>Sign Up</p>
        }
        type="email"
        setInputValue={setEmail}
      />
    </form>
  );
}

export default SignUp;
