import React from 'react'
import img from '../assets/react.svg'
import data from '../Data'
const Chat = ({ user }) => {
    return (
        <>

            <div className="grid grid-rows-12 py-0 md:py-4 px-0 md:px-2 lg:px-8 h-[100vh]">

                <div className="w-full row-span-1 md:row-span-1 fixed top-0 md:relative z-10 ">
                    {/* <div className='flex flex-col gap-2'> */}
                    <div className=' py-2 px-1 md:p-2 bg-[#F5F7FB] rounded-md'>
                        <div className='grid grid-cols-12'>
                            <div class="col-span-2 md:col-span-2 lg:col-span-1 flex justify-center items-center md:justify-center ">
                                <div className='flex justify-end items-center md:justify-start w-12 h-12 rounded-full overflow-hidden'>

                                    <img className='w-full h-full object-cover' src={user.profilePictureURL} alt="profie image" />
                                </div>
                            </div>
                            <div class="col-span-7 md:col-span-8 lg:col-span-9 ">
                                <h4 className='flex items-center gap-2 text-[#000000] leading-5 text-[16px] capitalize font-semibold'>{user.name}
                                    <span className='w-3 h-3 rounded-full bg-[#3BA55D] text-[#fff]'></span>
                                </h4>
                                <p className='text-[#8E8E93] leading-4 text-sm font-normal mt-2'>Click here for contact info</p>
                            </div>
                            <div className="col-span-3 md:col-span-2 lg:col-span-2 flex justify-center items-center md:justify-end gap-2 md:gap-4 ">
                                <button>
                                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0007 4.22382C17.0007 2.01468 15.2099 0.223816 13.0007 0.223816H4.00073C1.79159 0.223816 0.000732422 2.01468 0.000732422 4.22382V11.7238C0.000732422 13.933 1.79159 15.7238 4.00073 15.7238H13.0007C15.2099 15.7238 17.0007 13.933 17.0007 11.7238V4.22382ZM4.00073 1.42382H13.0007C14.5471 1.42382 15.8007 2.67742 15.8007 4.22382V11.7238C15.8007 13.2702 14.5471 14.5238 13.0007 14.5238H4.00073C2.45434 14.5238 1.20073 13.2702 1.20073 11.7238V4.22382C1.20073 2.67742 2.45434 1.42382 4.00073 1.42382ZM24.2934 2.14497C24.4278 2.31978 24.5007 2.53413 24.5007 2.75468V12.9343C24.5007 13.4865 24.053 13.9343 23.5007 13.9343C23.3157 13.9343 23.1342 13.8829 22.9766 13.7859L18.9525 11.3095C18.361 10.9455 18.0007 10.3007 18.0007 9.60623V6.70862C18.0007 6.08768 18.2891 5.50196 18.7813 5.12337L22.891 1.96205C23.3288 1.62532 23.9566 1.70721 24.2934 2.14497ZM19.513 6.07452L23.3007 3.16085V12.5763L19.5815 10.2876C19.3449 10.142 19.2007 9.88403 19.2007 9.60623V6.70862C19.2007 6.46024 19.3161 6.22596 19.513 6.07452Z" fill="#007AFF" />
                                    </svg>

                                </button>
                                <button>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68028 4.93051L6.87416 1.87796C6.06982 0.518501 4.31571 0.0684999 2.95626 0.872851C2.71318 1.01668 2.49274 1.19572 2.30212 1.40414C0.945494 2.88751 0.338215 4.29987 0.537902 5.6391C0.94713 8.38365 2.87669 11.5185 6.30482 15.0775L6.60254 15.3716L6.89707 15.6697L6.90287 15.6654C10.4561 19.0979 13.5909 21.0274 16.3354 21.4366C17.6747 21.6363 19.087 21.0291 20.5704 19.6724C20.7788 19.4818 20.9579 19.2614 21.1017 19.0183C21.906 17.6588 21.456 15.9047 20.0966 15.1004L17.044 13.2943L16.8922 13.2117C16.1736 12.8535 15.3183 12.8774 14.6174 13.2847L13.6662 13.8374L13.5557 13.8947C13.0692 14.1181 12.4887 14.0186 12.104 13.6339L8.34067 9.87057L8.25696 9.77844C7.91634 9.36532 7.86384 8.77875 8.13719 8.30831L8.68987 7.35715C9.12622 6.60618 9.12255 5.67801 8.68028 4.93051ZM19.7606 18.7869C18.5056 19.9347 17.4296 20.3865 16.5124 20.2498C14.1553 19.8983 11.3405 18.2112 8.08688 15.137L7.52665 14.5995L7.14818 14.2238C3.88348 10.834 2.08853 7.90168 1.72478 5.46213C1.58803 4.54499 2.03988 3.46898 3.18764 2.214C3.29828 2.09302 3.42623 1.9891 3.56732 1.90562C4.31255 1.46468 5.26211 1.67317 5.75861 2.36242L5.8414 2.48902L7.64751 5.54157C7.86854 5.91513 7.87037 6.37898 7.6523 6.75427L7.09963 7.70543C6.57511 8.60813 6.66991 9.73992 7.33109 10.5418L7.45251 10.6775L11.2555 14.4824C11.9937 15.2206 13.112 15.4189 14.0565 14.9852L14.2188 14.9026L15.2203 14.3222C15.5694 14.1194 15.9968 14.1062 16.3569 14.2857L16.4705 14.3483L19.4855 16.1332C20.2746 16.6 20.5358 17.6182 20.0689 18.4072C19.9855 18.5483 19.8815 18.6763 19.7606 18.7869Z" fill="#007AFF" />
                                    </svg>

                                </button>
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
                    {/* </div> */}
                </div>

                <div className="row-span-10 md:row-span-10 p-4 overflow-y-auto scroll-smooth">
                    {user.chat.map((chat, index) => {
                        return (
                            <>
                                <div className='w-full py-2 px-1 text-start' key={index} >
                                    <span className='inline-flex flex-col gap-[3px]'>{chat.user1 ? chat.user1.message : chat.you.message}
                                        <span className='text-xs font-normal text-[#000000] opacity-[40%]'>{chat.user1 ? chat.user1.timeStamp : chat.you.timeStamp}</span>
                                    </span>
                                </div>
                                <div className='w-full py-2 px-1 text-end'>
                                    <span className='inline-flex flex-col bg-[#DCF7C5] p-2 rounded-xl gap-[3px]'> {chat.you.message}
                                        <span className='text-xs font-normal text-[#000000] opacity-[40%]'>{chat.you.timeStamp}</span>
                                    </span>
                                </div>
                            </>
                        )
                    })}

                </div>


                <div className="flex justify-center items-center fixed bottom-0 md:relative p-2 gap-1 w-full row-span-1 md:row-span-1">
                    <button>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="16" fill="white" stroke="#D9D9D9" />
                            <path d="M16.4213 23V11H17.5787V23H16.4213ZM11 17.5832V16.4168H23V17.5832H11Z" fill="#888888" />
                        </svg>

                    </button>
                    <button>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="16" fill="white" stroke="#D9D9D9" />
                            <path d="M17.0624 18.3125C17.6592 18.3125 18.2314 18.0755 18.6534 17.6534C19.0754 17.2314 19.3124 16.6593 19.3124 16.0624V13.2499C19.3124 12.4461 18.8835 11.7034 18.1875 11.3014C17.4913 10.8995 16.6336 10.8995 15.9374 11.3014C15.2413 11.7034 14.8124 12.4461 14.8124 13.2499V16.0624C14.8124 16.6592 15.0494 17.2314 15.4715 17.6534C15.8934 18.0754 16.4656 18.3125 17.0624 18.3125ZM15.9373 13.2499C15.9373 12.848 16.1518 12.4766 16.4999 12.2757C16.848 12.0746 17.2768 12.0746 17.6249 12.2757C17.973 12.4766 18.1875 12.848 18.1875 13.2499V16.0624C18.1875 16.4644 17.973 16.8358 17.6249 17.0367C17.2768 17.2377 16.8481 17.2377 16.4999 17.0367C16.1518 16.8358 15.9373 16.4644 15.9373 16.0624V13.2499Z" fill="#888888" />
                            <path d="M16.4999 20.9057V23H17.625V20.9057C18.8624 20.7673 20.0055 20.1777 20.8356 19.2497C21.6659 18.3216 22.1248 17.1202 22.125 15.875V15.5001H21V15.875C21 17.2818 20.2496 18.5818 19.0312 19.2852C17.8129 19.9885 16.312 19.9885 15.0937 19.2852C13.8754 18.5818 13.1249 17.2819 13.1249 15.875V15.5001H12V15.875C12.0001 17.1203 12.4591 18.3217 13.2893 19.2497C14.1195 20.1777 15.2625 20.7673 16.4999 20.9057Z" fill="#888888" />
                        </svg>

                    </button>
                    <div className='flex items-center relative w-full h-full'>
                        <input className='relative w-full border h-12 py-2 px-4 text-sm rounded-3xl border-[#D8D8D8] outline-0' type="text" />
                        <button className='absolute right-4 '><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.48187 8.00046C8.32996 8.00616 8.18888 8.08049 8.09836 8.2027C8.00796 8.32481 7.97794 8.48151 8.017 8.62838L9.68304 14.8729L17.0399 15.999L9.68419 17.124L8.01714 23.3703C7.98354 23.4952 7.99973 23.6284 8.06223 23.7415C8.12485 23.8548 8.22876 23.9395 8.35242 23.9777C8.47597 24.0159 8.60957 24.0047 8.72509 23.9465L23.7258 16.4461C23.8368 16.3903 23.923 16.2953 23.9677 16.1794C24.0125 16.0635 24.0125 15.9352 23.9677 15.8193C23.923 15.7034 23.8368 15.6084 23.7258 15.5525L8.72509 8.05221C8.64975 8.01471 8.56604 7.99696 8.482 8.00042L8.48187 8.00046Z" fill="#888888" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Chat
