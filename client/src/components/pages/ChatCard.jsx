"use client"

import Image from "next/image"

const ChatCard = () => {
  return (
    <div className="input_color text-black relative top-[30px] w-[26rem] left-[5px] h-[85px] rounded-lg">
       <div className="flex">
       <Image 
           src="/2nd.jpg" 
           width={45}
           height={40}
           alt="images" 
           className="relative left-[10px] top-[16px]  rounded-full h-[50px]"  
           />
       <p className="relative left-[20px] top-[10px]  font-mono">Mohd Shahzil</p>
       </div>
       <div>
        <p className="relative bottom-[14px]  left-[64px] w-[23rem] text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum </p>
       </div>
      </div>
  )
}

export default ChatCard