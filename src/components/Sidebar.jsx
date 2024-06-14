import React from 'react'
import img from '../assets/react.svg'
const Sidebar = () => {
    return (
        <div className='border-r border-[#EFEFEF] py-4 px-2 h-[100vh] '>
            <h1 className='text-[#222222] text-2xl font-normal pb-3'>Chats</h1>
            <div className='flex flex-col gap-2'>

                <div className='h-16 p-2 bg-[#F5F7FB] rounded-md'>
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
                </div>


                <div>
                    <div className='grid grid-cols-12 gap-2'>
                        <div class="col-span-2">
                            <img src={img} alt="" />
                        </div>

                        <div class="col-span-8">
                            <h4>saurabh</h4>
                            <p>hello saurabh</p>
                        </div>
                        <div class="col-span-2">
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3C10.8284 3 11.5 3.67157 11.5 4.5Z" fill="#007AFF" />
                                    <path d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z" fill="#007AFF" />
                                    <path d="M11.5 15.5C11.5 16.3284 10.8284 17 10 17C9.17157 17 8.5 16.3284 8.5 15.5C8.5 14.6716 9.17157 14 10 14C10.8284 14 11.5 14.6716 11.5 15.5Z" fill="#007AFF" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-12 gap-2'>
                        <div class="col-span-2">
                            <img src={img} alt="" />
                        </div>

                        <div class="col-span-8">
                            <h4>saurabh</h4>
                            <p>hello saurabh</p>
                        </div>
                        <div class="col-span-2">
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3C10.8284 3 11.5 3.67157 11.5 4.5Z" fill="#007AFF" />
                                    <path d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z" fill="#007AFF" />
                                    <path d="M11.5 15.5C11.5 16.3284 10.8284 17 10 17C9.17157 17 8.5 16.3284 8.5 15.5C8.5 14.6716 9.17157 14 10 14C10.8284 14 11.5 14.6716 11.5 15.5Z" fill="#007AFF" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
