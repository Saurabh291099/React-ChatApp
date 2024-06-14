
import { React, useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import './index.css'
import data from './Data'
const App = () => {
  const [chatData, setChatData] = useState(data);
  const [currentUserId, setCurrentUserId] = useState(null);

  const selectChat = (userId) => {
    setCurrentUserId(userId);
  };

  const markAsUnread = (userId) => {
    setChatData(prevData =>
      prevData.map(user =>
        user.userId === userId
          ? { ...user, unreadCount: user.unreadCount + 1 }
          : user
      )
    );
  };

  const deleteChat = (userId) => {
    setChatData(prevData => prevData.filter(user => user.userId !== userId));
  };

  const currentUser = data.find(user => user.userId === currentUserId);

  return (


    <>

      <div class="grid grid-cols-12 gap-4 ">
        <div class="col-span-12 md:col-span-3">
          <Sidebar users={data} selectChat={selectChat} markAsUnread={markAsUnread} deleteChat={deleteChat} />
        </div>
        <div class="col-span-12 md:col-span-9">
          {/* <Chat /> */}

          {currentUser ? (
            <Chat user={currentUser} />
          ) : (
            <div className="no-chat-selected">Select a chat to view messages</div>
          )}
        </div>

      </div>
    </>
  )
}

export default App
