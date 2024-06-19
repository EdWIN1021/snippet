import MarkdownForm from "@/components/markdown-form";
import MarkdownPreview from "@/components/markdown-preview";

export default function page() {
  return (
    <div className="flex">
      <MarkdownForm />
      <MarkdownPreview />
    </div>
  );
}
