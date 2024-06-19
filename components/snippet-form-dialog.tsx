import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import SnippetForm from "./snippet-form";

const SnippetFormDialog = () => {
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

        <SnippetForm />
      </DialogContent>
    </Dialog>
  );
};

export default SnippetFormDialog;
