"use client";

import React from "react";
import MarkdownForm from "@/components/markdown-form";
import MarkdownPreview from "@/components/markdown-preview";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = React.useState("");
  const [title, setTitle] = React.useState("");

  return (
    <div className="flex">
      <MarkdownForm
        markdown={markdown}
        setMarkdown={setMarkdown}
        title={title}
        setTitle={setTitle}
      />
      <MarkdownPreview title={title} markdown={markdown} />
    </div>
  );
};

export default MarkdownEditor;
