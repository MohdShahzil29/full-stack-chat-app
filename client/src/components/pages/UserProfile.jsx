"use client"
import Image from "next/image"

 

const UserProfile = () => {
  return (
    <div className="input_color text-black w-[50rem] h-[54px] top-[6px] relative rounded-md border focus:outline-none focus:border-blue-500 transition duration-300 ">
         
        <div className="flex">
        <Image
          src="/2nd.jpg"
          alt="user profile photo"
          height={100}
          width={45}
          className="relative rounded-full left-2 h-[50px]"
        />
          <p className="relative left-3 font-semibold">Mohd Shahzil</p>
         
        </div> 
        <p className="relative bottom-[24px] left-[54px] font-light  text-xs">🟢 Active Now</p>
    </div>
  )
}

export default UserProfile