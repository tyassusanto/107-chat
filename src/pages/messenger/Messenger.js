import React from 'react'
import './messenger.css'
import userIcon from '../../assets/107-logo.svg'
import gptIcon from '../../assets/gpt-icon.svg'
import attachIcon from '../../assets/attach-icon.svg'
import sendIcon from '../../assets/send-icon.svg'
import Conversations from '../../components/conversations/Conversations'
import Sidebar from '../../components/sidebar/Sidebar'
import Message from '../../components/message/Message'


const Messenger = () => {
    return (
        <div className=''>
            <div className='flex h-screen'>
                <div>
                    <Sidebar />
                </div>
                <div className="chatMenu p-3 border-r-2">
                    <div className="headMenu flex justify-between h-12">
                        <div className="text-4xl flex font-bold justify-between">Messages</div>
                        <div className="bg-blue-500 text-white font-bold text-4xl rounded-full px-3 cursor-pointer">
                            +
                        </div>
                    </div>
                    <div className="searchMenu py-3">
                        <form>
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-3 h-3 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="search" className="block w-full p-2 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    <div className="conv pe-2 h-4/6 overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-200">
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                    </div>
                </div>
                <div className="chatBox flex-row">
                    <div className="headChatBox p-3 flex shadow-lg rounded-b-md">
                        <div className=" p-2">
                            <img className='max-h-10' src={userIcon} alt="" />
                        </div>
                        <div className="flex-row my-auto">
                            <div className="font-bold text-xl">Conversation Name</div>
                            <div className="text-gray-400">Online</div>
                        </div>
                    </div>
                    <div className="messageBox p-3 pe-2 h-3/5 overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-200">
                        pesan <br />
                        <Message />
                    </div>
                    <div className="botChatBox bg-gray-50 p-3">
                        <div className="">
                            <div className="max-w-screen-sm mb-3 text-sm">貴社のシニアエンジニアが変更されたことに伴い、コードベースのメンテナンスについていくつか質問があります。</div>
                            <div className="flex border-b-2">
                                <div className="me-1 my-auto mb-2"><img src={gptIcon} alt="" /></div>
                                <div className="text-gray-500 mb-2 text-xs">Translated by ChatGPT-4</div>
                            </div>
                        </div>
                        <div className="mt-2 flex w-full">
                            <div className="me-3 self-center"><img className='cursor-pointer' src={attachIcon} alt="" /></div>
                            <div className="w-full">
                                <form>
                                    <div className="relative">
                                        <input type="text" className="w-full p-4 pe-8 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none" placeholder="We have a few queries about how the codebase will be maintained now that your lead engineer has changed." />
                                        <div className="absolute inset-y-0 end-2 flex items-center cursor-pointer">
                                            <img className='bg-blue-500 rounded-full p-2' src={sendIcon} alt="" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger
