"use client";

import Image from "next/image";

const rightBar = () => {
  return (
    <div>
      <div className="bg-primary w-[208px] rounded-lg text-black">
        <p className="text-black relative top-10 font-semibold text-base text-center">
          Profile Info
        </p>
        <div>
          <Image
            src="/1st.jpeg"
            alt="user profile photo"
            height={90}
            width={150}
            className="relative top-14 rounded-full h-[150px] mx-auto"
          />
          <p className="relative top-20   text-center font-semibold ">Mohd Shahzil</p>
          <div>
            <p className="relative top-28  text-center font-bold text-xl">Bio</p>
            <p className="relative top-32    text-center text-ellipsis text-wrap text-sm font-semibold font-serif">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore alias,</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightBar;
