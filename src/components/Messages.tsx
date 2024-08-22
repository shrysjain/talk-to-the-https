import { type Message as TMessage } from "ai/react";
import { Message } from "./Message";
import { MessageSquare } from "lucide-react";

interface MessageProps {
  messages: TMessage[];
}

export const Messages = ({ messages }: MessageProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7re)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2 m-10">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl text-white">
            Connected to website
          </h3>
          <p className="text-zinc-400 text-sm">
            Ask a question, discuss the content, or just have a friendly
            conversation with the bot.
          </p>
        </div>
      )}
    </div>
  );
};
