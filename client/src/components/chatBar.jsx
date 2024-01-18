"use client"
import UserList from "./pages/userList"
import UserChat from "./pages/userChat"
const chatBar = () => {
  return (
    <div className="flex justify-between box-shadow1">
        <UserList />
        <UserChat />
    </div>
  )
}

export default chatBar