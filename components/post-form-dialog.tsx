"use client";

import React from "react";

import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./language-select";
import { useSession } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

const PostFormDialog = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [code, setCode] = React.useState<string | undefined>("");
  const { data: session } = useSession();

  const [formState, action] = useFormState(
    actions.createPost.bind(null, {
      userId: session?.user.id || "",
      code: code || "",
    }),
    {
      errors: {},
    }
  );

  console.log(formState);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex items-center gap-2 text-gray-500"
          variant={"ghost"}
        >
          <Pencil className="h-5 w-5 " />
          <span>Write</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="my-5">Create a post</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={action}>
          <Input className="h-14 text-xl" placeholder="Title" name="title" />
          <Textarea placeholder="description" name="description" />

          <LanguageSelect language={language} setLanguage={setLanguage} />

          <Editor
            // theme="vs-dark"
            className="border"
            height="40vh"
            value={code}
            defaultLanguage="javascript"
            language={language}
            defaultValue="// some comment"
            onChange={(newValue) => setCode(newValue)}
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostFormDialog;
