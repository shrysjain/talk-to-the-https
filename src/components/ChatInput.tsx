"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  input,
  handleInputChange,
  handleSubmit,
  setInput,
}: ChatInputProps) => {
  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md-6 xl:mx-auto xl:max-w-[80%]">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form onSubmit={handleSubmit} className="relative">
              <Textarea
                minRows={4}
                autoFocus
                onChange={handleInputChange}
                value={input}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                  }
                }}
                placeholder="Start chatting...."
                className="resize-none bg-zinc-800 rounded-xl text-base px-4 py-4 border-none ring-0 outline-none"
              />
              <Button
                size="sm"
                type="submit"
                className="absolute z-10 bg-zinc-900 right-2 bottom-2 hover:bg-zinc-600"
              >
                <Send className="size-4" /> Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
