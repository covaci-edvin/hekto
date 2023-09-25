import React, { useState } from "react";
import InputWithButton from "../form/InputWithButton";
import classes from "./SignUp.module.scss";
function SignUp() {
  const [email, setEmail] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    //Sign Up Logic
    console.log(email);
  }

  return (
    <form onSubmit={handleSignUp}>
      <InputWithButton
        placeholder="Enter Email Address"
        btnContent={
          <p className={`body-text-md ${classes["btn-text"]}`}>Sign Up</p>
        }
        type={"email"}
        setInputValue={setEmail}
      />
    </form>
  );
}

export default SignUp;
