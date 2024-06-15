
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
    resetUnreadCount(userId);
  };

  const markAsUnread = (userId) => {
    setChatData(prevData =>
      prevData.map(user =>
        user.userId === userId
          ? { ...user, unreadCount: 1 }
          : user
      )
    );
  };


  const resetUnreadCount = (userId) => {
    setChatData(prevData =>
      prevData.map(user =>
        user.userId === userId
          ? { ...user, unreadCount: 0 }
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
      {/* <div class="relative grid grid-cols-12 gap-4 ">
        <div class="absolute md:relative col-span-12 md:col-span-3 ">
          <Sidebar users={chatData} selectChat={selectChat} markAsUnread={markAsUnread} deleteChat={deleteChat} resetUnreadCount={resetUnreadCount} />
        </div>
        <div class="md:block col-span-12 md:col-span-9 md:relative">
          
          {currentUser ? (
            <Chat user={currentUser} />
          ) : (
            <div className="flex justify-center items-center h-[100vh]"><h1 className='text-3xl font-semibold'>Select a chat to view messages</h1></div>
          )}
        </div >

      </div > */}

      <div className="relative grid grid-cols-12 gap-4">
        <div className={`absolute md:relative md:block col-span-12 md:col-span-3 ${currentUser ? 'hidden' : 'block'}`}>
          <Sidebar users={chatData} selectChat={selectChat} markAsUnread={markAsUnread} deleteChat={deleteChat} resetUnreadCount={resetUnreadCount} />
        </div>
        <div className={`md:block col-span-12 md:col-span-9 md:relative ${currentUser ? 'block' : 'hidden'}`}>
          {currentUser ? (
            <Chat user={currentUser} />
          ) : (
            <div className="flex justify-center items-center h-[100vh]">
              <h1 className='text-3xl font-semibold'>Select a chat to view messages</h1>
            </div>
          )}
        </div>
      </div>




    </>
  )
}

export default App
