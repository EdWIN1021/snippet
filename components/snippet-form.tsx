"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./language-select";

const SnippetForm = () => {
  const [title, setTitle] = React.useState("");
  const [language, setLanguage] = React.useState("javascript");

  return (
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
  );
};

export default SnippetForm;
