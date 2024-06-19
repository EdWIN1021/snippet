"use client";

import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface MarkdownFormProps {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const MarkdownForm: React.FC<MarkdownFormProps> = ({
  markdown,
  setMarkdown,
  title,
  setTitle,
}) => {
  return (
    <div className="flex flex-col basis-1/2 border-r min-h-[calc(100vh-65px)] p-7 gap-6">
      <h2 className="font-semibold text-lg">Markdown</h2>
      <Input
        className="h-14 text-xl"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        className="flex-1"
        placeholder="Typing..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
    </div>
  );
};

export default MarkdownForm;
