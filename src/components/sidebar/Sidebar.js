import React, { useState } from 'react'
import userIcon from '../../assets/107-logo.svg'
import convIcon from '../../assets/conversation-icon.svg'
import friendsIcon from '../../assets/social-logo.svg'
import aiIcon from '../../assets/blue-gpt.svg'
import settingIcon from '../../assets/gear.svg'

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="sidebar p-3 border-r-2 flex-row h-screen">
                <div className="topSide">
                    <img src={userIcon} alt="" />
                    <div className="mt-2 py-3 cursor-pointer rounded-md hover:bg-gray-200 active:bg-gray-100">
                        <img className='mx-auto' src={convIcon} alt="" />
                    </div>
                    <div className="py-3 cursor-pointer rounded-md hover:bg-gray-200 active:bg-gray-100">
                        <img className='mx-auto' src={friendsIcon} alt="" />
                    </div>
                    <div className="py-3 cursor-pointer rounded-md hover:bg-gray-200 active:bg-gray-100">
                        <button className='mx-3' onClick={() => setShowModal(true)}>
                            <img className='' src={aiIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="botSide p-3 cursor-pointer rounded-md hover:bg-gray-200 active:bg-gray-100 absolute bottom-0">
                    <div className="cursor-pointer">
                        <img className='mx-auto' src={settingIcon} alt="" />
                    </div>
                </div>
            </div>

            {/* Modal */}

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <div className="">
                                        <div className="flex justify-between">
                                            <div className="font-bold">
                                                Custom Instructions
                                            </div>
                                            <div className="">
                                                <input className="after:bg-white after:mt-[1px] after: checked:mt-[-1px] mr-1 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-green-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-3 after:w-3 after:rounded-full after:border-none after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:ml-[1.0625rem] checked:after:h-3 checked:after:w-3 checked:after:rounded-full checked:after:border-none checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-3 focus:after:w-3 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
                                                 type="checkbox" role='switch' name="" id="" />
                                            </div>
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            <br />
                                            What would you like ChatGPT to know about you to provide better responses?
                                        </div>
                                        <div className="border p-3 text-sm mt-1">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia itaque iste!
                                        </div>
                                    </div>

                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="text-gray-500 font-semibold text-sm">How would you like ChatGPT to respond?</div>
                                    <div className="border ">
                                        <ul className='ms-6 py-3 text-sm list-disc'>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam vel ad?</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam vel ad?</li>
                                        </ul>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="font-bold px-4 outline outline-1 outline-gray-500 hover:shadow-lg text-gray-500 py-2 text-sm mr-4 mb-1 rounded-md ease-linear transition-all duration-150 hover:bg-gray-400 active:bg-gray-300 active:outline-none"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none  mr-1 mb-1 rounded-md ease-linear transition-all duration-150 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-400"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Sidebar