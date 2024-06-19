"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import Image from "next/image";
import TextInput from "./text-input";

interface SignupDialogProps {
  showSignup: boolean;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupDialog: React.FC<SignupDialogProps> = ({
  showSignup,
  setShowSignup,
  setShowSignin,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <Dialog open={showSignup} onOpenChange={setShowSignup}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-500 text-white rounded-full px-2 py-1 h-max text-sm">
          Sign up
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="my-5">Join Blog.</DialogTitle>
        </DialogHeader>

        <div className="my-5 flex flex-col gap-3">
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button
            className="rounded-full flex gap-2 items-center"
            type="submit"
          >
            <Mail size={20} />
            <span className="w-32">Sign Up With Email</span>
          </Button>
          <Button
            className="rounded-full border flex gap-2 items-center"
            variant={"ghost"}
            onClick={() => signIn("google")}
          >
            <Image src="/google.svg" width={20} height={20} alt="google" />

            <span className="w-32"> Sign Up With Google</span>
          </Button>

          <Button
            className="rounded-full border flex gap-2 items-center"
            variant={"ghost"}
            onClick={() => signIn("github")}
          >
            <Image src="/github.svg" width={20} height={20} alt="github" />
            <span className="w-32"> Sign Up With Github</span>
          </Button>

          <p className="text-center mt-5">
            Already have an account?{" "}
            <span
              className="text-green-600 font-bold cursor-pointer"
              onClick={() => {
                setShowSignup(false);
                setShowSignin(true);
              }}
            >
              Sign in
            </span>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
