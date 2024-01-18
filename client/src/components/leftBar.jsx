"use client";
import Image from "next/image";
import { MdHistoryToggleOff } from "react-icons/md";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link"

const leftBar = () => {
  return (
    <div className="bg-secdondry1 w-24 flex flex-col justify-between">
      <div>
        <Image
          src="/2nd.jpg"
          alt="user profile photo"
          height={80}
          width={70}
          className="relative top-6 rounded-full h-[80px] mx-auto"
        />
        <p className="relative top-8 text-white text-center">Shahzil</p>
      </div>
      <div className="relative bottom-20">
        <Link href={'/'}>
        <PiChatTeardropTextFill 
         size={40}
         className="text-white ml-6 gap-12 hover:text-red-600 cursor-pointer"
        />
        </Link>
        <Link href={'/status'}> 
        <MdHistoryToggleOff 
         size={40}
         className="text-white ml-6 mt-7 hover:text-red-600 cursor-pointer"
        />
        </Link>
      </div>
      <div>
        <IoIosLogOut 
         size={40}
         className="text-white ml-6 hover:text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default leftBar;
