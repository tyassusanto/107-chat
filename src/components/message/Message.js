import React from 'react'
import userIcon from '../../assets/107-logo.svg'
import aiIconBlk from '../../assets/black-gpr.svg'
import './message.css'

const Message = ({ own }) => {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className={own ? "flex flex-row-reverse mt-2" : "flex mt-2"}>
        <div className="px-2 self-end"><img className='max-w-8' src={userIcon} alt="" /></div>
        <div className="flex-row">
          <div className={own ? "border p-2 max-w-xs bg-blue-300 text-sm rounded-lg" : "border p-2 max-w-xs bg-gray-300 text-sm rounded-lg"}>
            <div className={own ? 'hidden' : "font-semibold text-blue-500"}>ATO - Iwakawa</div>
            <div className={own ? "border-b-2 border-gray-300" : ""}>Lorem ipsum dolor sit amet.</div>
            <div className={own ? "" : "hidden"}>昨日の書類を修正して私に送ってもらえますか？</div>
          </div>
          <div className={own ? "justify-end text-xs flex w-full" : "text-xs flex w-full justify-between"}>
            <div className={own ? "hidden flex" : "flex text-gray-500"}>
              <div className="pe-1 mt-1"><img className='max-w-3' src={aiIconBlk} alt="" /></div>
              <div className="cursor-pointer active:text-gray-400">Show Original</div>
            </div>
            <div className="text-gray-500">9.00 AM</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
