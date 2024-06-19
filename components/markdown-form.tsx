import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const MarkdownForm = () => {
  return (
    <div className="flex flex-col basis-1/2 border-r min-h-[calc(100vh-65px)] p-7 gap-6">
      <h2 className="font-semibold text-lg">Markdown</h2>
      <Input className="h-14 text-lg" placeholder="Title" />
      <Textarea className="flex-1" placeholder="Typing..." />
      <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
    </div>
  );
};

export default MarkdownForm;
