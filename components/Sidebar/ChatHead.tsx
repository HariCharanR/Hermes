import Image from "next/image";
import React from "react";

function ChatHead() {
  return (
    <>
      <div className="flex h-fit min-h-[8%] rounded-md py-2 my-2 hover:bg-gray-200 transition-all">
        <div className="w-[30%]  flex items-center justify-center mr-3">
          <Image
            alt="Chat Profile"
            width={60}
            height={30}
            className="aspect-square rounded-full"
            src={"/assets/profile_photo.jpg"}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h5 className="font-medium text-lg">Chat Name</h5>
          <p className="text-gray-400">last Message</p>
        </div>
      </div>
      {/* <div className="w-full h-[2px] bg-gray-300"></div> */}
    </>
  );
}

export default ChatHead;
