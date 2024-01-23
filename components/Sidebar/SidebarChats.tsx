import { Menu, MessageSquareDiff } from "lucide-react";
import React from "react";
import ChatHead from "./ChatHead";

function SidebarChats() {
  return (
    <div className="flex-1 bg-zinc-100 pt-4 flex flex-col">
      <div className=" h-[6%]  py-4 px-4 flex items-center justify-between">
        <h1 className="text-2xl font-medium flex-1">Chats</h1>
        <div className="w-[50%]  h-full flex items-center justify-end gap-4">
          <div className="hover:bg-white transition-all p-1 rounded-md">
            <MessageSquareDiff />
          </div>
          <div className=" hover:bg-white transition-all p-1 rounded-md">
            <Menu />
          </div>
        </div>
      </div>
      <div className=" w-full h-[2px] bg-green-300 rounded-lg my-1"></div>
      <div className=" flex-1 px-3 py-2">
        <ChatHead />
        <ChatHead />
        <ChatHead />
        <ChatHead />
      </div>
    </div>
  );
}

export default SidebarChats;
