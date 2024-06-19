"use client";

import React from "react";

import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./language-select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";

const PostFormDialog = () => {
  const [title, setTitle] = React.useState("");
  const [language, setLanguage] = React.useState("javascript");

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
          <DialogTitle className="my-5">Create a snippet</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <Input
            className="h-14 text-xl"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea placeholder="description" />

          <LanguageSelect language={language} setLanguage={setLanguage} />

          <Editor
            className="border"
            height="40vh"
            // theme="vs-dark"
            defaultLanguage="javascript"
            language={language}
            defaultValue="// some comment"
          />
          <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostFormDialog;
