import React from 'react'
import userIcon from '../../assets/107-logo.svg'

const Conversations = () => {
    return (
        <>
            <div className='flex p-1 my-1 justify-between cursor-pointer rounded-md hover:bg-blue-100 active:bg-blue-50'>
                <div className='my-auto'>
                    <img className='' src={userIcon} alt="pp" />
                </div>
                <div className="my-auto flex-row w-full mx-2">
                    <div className='font-bold text-l'>Conversation Name</div>
                    <div className='text-sm text-gray-400'>unread message</div>
                </div>
                <div className='my-auto flex-row min-w-fit'>
                    <div className='text text-sm'>9.00 AM</div>
                    <div className='bg-blue-500 text-white w-fit font-bold text-sm float-end rounded-full px-2'>9</div>
                </div>
            </div>
        </>
    )
}

export default Conversations
