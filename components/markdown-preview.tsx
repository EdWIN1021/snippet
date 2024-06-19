import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface MarkdownPreviewProps {
  title: string;
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = React.memo(
  ({ title, markdown }) => {
    return (
      <div className="flex flex-col basis-1/2 border-r min-h-[calc(100vh-65px)] p-7 gap-6">
        <h2 className="font-semibold text-lg">Preview</h2>

        <div className="h-14 text-xl flex items-center">
          <span>{title}</span>
        </div>

        <Markdown
          components={{
            code({ inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    );
  }
);

MarkdownPreview.displayName = "MarkdownPreview";

export default MarkdownPreview;
