"use client";

import React from "react";
import SignupDialog from "@/components/signup-dialog";
import SigninDialog from "@/components/signin-dialog";

const AuthDialogs = () => {
  const [showSignup, setShowSignup] = React.useState(false);
  const [showSignin, setShowSignin] = React.useState(false);

  return (
    <div className="flex gap-4">
      <SignupDialog
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        setShowSignin={setShowSignin}
      />
      <SigninDialog
        showSignin={showSignin}
        setShowSignin={setShowSignin}
        setShowSignup={setShowSignup}
      />
    </div>
  );
};

export default AuthDialogs;
