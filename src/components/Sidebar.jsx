import { React, useState, useEffect, useRef } from 'react'
import data from '../Data.jsx'
const Sidebar = ({ users, selectChat, markAsUnread, deleteChat }) => {

    const [visibleDropdown, setVisibleDropdown] = useState(null);
    const dropdownRef = useRef(null);

    // const [chatData, setchatData] = useState(Data)

    // const getLastMessage = (chat) => {
    //     const lastChat = chat[chat.length - 1];
    //     return lastChat.user1 ? lastChat.user1 : lastChat.user2;
    // };

    // const lastMessages = data.map(user => {
    //     const lastMessage = getLastMessage(user.chat);
    //     return {
    //         userId: user.userId,
    //         name: user.name,
    //         profilePictureURL: user.profilePictureURL,
    //         lastMessage: lastMessage.message,
    //         timeStamp: lastMessage.timeStamp,
    //         unreadCount: user.unreadCount,
    //     };
    // });

    const getLastMessage = (chat) => {
        const lastChat = chat[chat.length - 1];
        return lastChat.user1 ? lastChat.user1 : lastChat.you;
    };

    const toggleDropdown = (userId) => {
        if (visibleDropdown === userId) {
            setVisibleDropdown(null);
        } else {
            setVisibleDropdown(userId);
        }
    };



    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setVisibleDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // const markAsUnread =(userId) =>{
    //     if (unreadCount)
    // }

    return (
        <div className='border-r border-[#EFEFEF] py-4 px-2 h-[100vh] '>
            <h1 className='text-[#222222] text-2xl font-normal pb-3'>Chats</h1>
            <div className='flex flex-col gap-2'>
                {users.map(user => {
                    const lastMessage = getLastMessage(user.chat);
                    return (
                        <>
                            <div className='h-16 p-2 bg-[#F5F7FB] rounded-md hover:cursor-pointer' key={user.userId} onClick={() => selectChat(user.userId)}>
                                <div className='grid grid-cols-12 gap-2'>
                                    <div class="col-span-2 flex justify-center items-center w-12 h-12 rounded-full overflow-hidden">
                                        <img className='w-full h-full object-cover' src={user.profilePictureURL} alt={user.name} />
                                    </div>

                                    <div class="col-span-8 ">
                                        <h4 className='text-[#000000] leading-5 text-[16px] capitalize font-semibold'>{user.name}</h4>
                                        <p className=' text-[#8E8E93] leading-4 text-sm font-normal mt-2 truncate'>{lastMessage.message}</p>

                                    </div>
                                    <div class="col-span-2 relative flex justify-center items-center">
                                        {user.unreadCount > 0 && (
                                            <span className='absolute right-10 bottom-0 w-5 h-5 inline-flex justify-center items-center rounded-full text-xs bg-[#3BA55D] text-[#fff]'>{user.unreadCount}</span>
                                        )}

                                        <button onClick={() => toggleDropdown(user.userId)}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3C10.8284 3 11.5 3.67157 11.5 4.5Z" fill="#007AFF" />
                                                <path d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z" fill="#007AFF" />
                                                <path d="M11.5 15.5C11.5 16.3284 10.8284 17 10 17C9.17157 17 8.5 16.3284 8.5 15.5C8.5 14.6716 9.17157 14 10 14C10.8284 14 11.5 14.6716 11.5 15.5Z" fill="#007AFF" />
                                            </svg>
                                        </button>
                                        {visibleDropdown === user.userId && (
                                            <div className='flex flex-col gap-3 items-start justify-start absolute z-10 w-40 right-5 top-10 bg-[#FFFFFF] shadow-lg p-3 rounded-2xl' ref={dropdownRef}>
                                                <button className='text-xs font-medium text-[#303030] z-20 w-full text-start' onClick={() => markAsUnread(user.userId)}>Mark as unread</button>
                                                <button className='text-xs font-medium text-[#303030] z-20 w-full text-start' onClick={() => deleteChat(user.userId)}>Delete</button>
                                                <button className='text-xs font-medium text-[#303030] z-20 w-full text-start' onClick={() => toggleDropdown(null)}>Cancel</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                {/* <div className='h-16 p-2 bg-[#F5F7FB] rounded-md'>
                    <div className='grid grid-cols-12 gap-2'>
                        <div class="col-span-2 flex justify-center items-center">
                            <img src={img} alt="profie image" />
                        </div>

                        <div class="col-span-8">
                            <h4 className='text-[#000000] leading-5 text-[16px] capitalize font-semibold'>saurabh</h4>
                            <p className='text-[#8E8E93] leading-4 text-sm font-normal mt-2'>hello saurabh</p>
                        </div>
                        <div class="col-span-2 relative flex justify-center items-center">
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3C10.8284 3 11.5 3.67157 11.5 4.5Z" fill="#007AFF" />
                                    <path d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z" fill="#007AFF" />
                                    <path d="M11.5 15.5C11.5 16.3284 10.8284 17 10 17C9.17157 17 8.5 16.3284 8.5 15.5C8.5 14.6716 9.17157 14 10 14C10.8284 14 11.5 14.6716 11.5 15.5Z" fill="#007AFF" />
                                </svg>
                            </button>

                            <div className='flex flex-col gap-3 items-start justify-start absolute z-10 w-40 right-5 top-10 bg-[#FFFFFF] shadow-lg p-3 rounded-2xl'>
                                <button className='text-xs font-medium text-[#303030] w-full text-start'>Mark as unread</button>
                                <button className='text-xs font-medium text-[#303030] w-full text-start'>Delete</button>
                                <button className='text-xs font-medium text-[#303030] w-full text-start'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Sidebar
