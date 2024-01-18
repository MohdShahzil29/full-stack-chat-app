import Image from 'next/image'
import ChatBar from './../components/chatBar';

export default function Home() {
  return (
    <div>
      <div className='flex justify-center'>
       {/* <LeftBar /> */}
       <ChatBar />
      </div>
    </div>
  )
}
