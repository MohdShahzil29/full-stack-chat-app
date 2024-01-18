"use client";
import Image from "next/image";
import UserProfile from "./pages/UserProfile";

const userChats = () => {
  return (
    <div>
      <div>
        <div className="chat-container chat-bar-radius">
          <UserProfile />
          <ul className="chat overflow-y-auto max-h-[30rem] ">
            <li className="message left">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/2nd.jpg"
                alt="images"
              />
              <p>I'm hungry!</p>
            </li>
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>Hi hungry, nice to meet you. I'm Dad.</p>
            </li>
            <li className="message left">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/2nd.jpg"
                alt="images"
              />
              <p>DAD! I'm serious!</p>
            </li>
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>I thought your name was hungry...?</p>
            </li>
            <li className="message left">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/2nd.jpg"
                alt="images"
              />
              <p>ARE YOU KIDDING ME?</p>
            </li>
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>No, I'm Dad...</p>
            </li>{" "}
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>No, I'm Dad...</p>
            </li>{" "}
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>No, I'm Dad...</p>
            </li>{" "}
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>No, I'm Dad...</p>
            </li>{" "}
            <li className="message right">
              <Image
                width={10}
                height={10}
                className="logo"
                src="/1st.jpeg"
                alt="images"
              />
              <p>No, I'm Dad...</p>
            </li>
          </ul>
          <div>
            <input
              type="text"
              className="text_input "
              placeholder="type your Message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default userChats;
