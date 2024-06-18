"use client";

import React from "react";
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

export function SigninDialog() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);

  console.log(open);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="rounded-full  px-2 py-1 h-max text-sm"
          variant="ghost"
        >
          Sign in
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="my-5">Welcome back.</DialogTitle>
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
        </div>

        <DialogFooter>
          <Button
            className="rounded-full flex gap-2 items-center"
            type="submit"
          >
            <Mail size={20} />
            <span className="w-32">Sign In With Email</span>
          </Button>
          <Button
            className="rounded-full border flex gap-2 items-center"
            variant={"ghost"}
            type="submit"
          >
            <Image src="/google.svg" width={20} height={20} alt="google" />

            <span className="w-32"> Sign In With Google</span>
          </Button>

          <Button
            className="rounded-full border flex gap-2 items-center"
            variant={"ghost"}
            type="submit"
          >
            <Image src="/github.svg" width={20} height={20} alt="github" />
            <span className="w-32"> Sign In With Github</span>
          </Button>

          <p className="text-center mt-5">
            No account?{" "}
            <span
              className="text-green-600 font-bold cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Create one
            </span>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
