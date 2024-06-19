import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
  return (
    <div className="flex">
      <div className="flex flex-col basis-1/2 border-r min-h-[calc(100vh-65px)] p-10 gap-8">
        <h2 className="font-semibold text-lg">Markdown</h2>
        <Input className="h-14 text-lg" placeholder="Title" />
        <Textarea className="flex-1" placeholder="Typing..." />
      </div>

      <div className="basis-1/2 border-r min-h-[calc(100vh-65px)] p-10">
        <h2 className="font-semibold text-lg">Preview</h2>
      </div>
    </div>
  );
}
