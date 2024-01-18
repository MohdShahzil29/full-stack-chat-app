"use client";

import Image from "next/image";
import ChatCard from "./ChatCard";

const userList = () => {
  return (
    <div className="bg-secondary box-shadow1 ">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search in Your Inbox"
          className="w-[27rem] py-2 px-4 border focus:outline-none focus:border-blue-500 transition duration-300 relative left-[5px] top-[20px] h-[54px] rounded-md text-white input_color"
        />
      </div>
      <div className="grid gap-[20px] overflow-y-auto max-h-[48rem]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent', '&::-webkit-scrollbar': { backgroundColor: 'transparent' } }}>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </div>
    </div>
  );
};

export default userList;
