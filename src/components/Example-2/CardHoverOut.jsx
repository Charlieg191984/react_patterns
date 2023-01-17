import React, { useState } from 'react'

import {
  FaShare,
  FaRegCommentAlt,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaBookmark,
} from 'react-icons/fa'
import handleCardUpdate from './handleCardUpdate'

const CardHoverOut = (props) => {
  const [isLikes, setIsLikes] = useState(false)
  const [isBookmark, setIsBookmark] = useState(false)
  const [showHover, setShowHover] = useState(false)
  const { viewsCount, increaseViews } = props

  return (
    <article className="overflow-hidden rounded-lg border-[0.05rem] border-slate-200 shadow-md max-w-md ">
      <div className="grid" onMouseLeave={() => increaseViews()}>
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setShowHover(true)}
          onMouseLeave={() => setShowHover(false)}
        >
          <img
            src="https://images.unsplash.com/photo-1635396259299-2eb9a880075a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80
            "
            alt="3D mango"
            className="w-full h-96 object-cover z-0"
          />
          <div
            className={`${
              showHover ? 'top-0' : '-top-[150%]'
            } absolute h-full bg-transparent w-full z-50 transition duration-350 ease-in-out `}
          >
            <div className="absolute bottom-0 w-full my-2">
              <div className="flex justify-between items-center w-full p-2">
                <div className="flex gap-2">
                  <div className="bg-slate-100 p-2 rounded-md">
                    <h4 className='text-md text-slate-500 font-light'>Views</h4>
                    <span className='text-slate-700 transition duration-200 ease-in'>{viewsCount}</span>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-md">
                    <h4 className='text-md text-slate-500 font-light'>Downloads</h4>
                    <span className='text-slate-700'>7,629</span>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-md">
                    <h4 className='text-md text-slate-500 font-light'>Featured In</h4>
                    <span className='text-slate-700'>3D Renders</span>
                  </div>
                </div>
                <div className="bg-slate-100 p-2 rounded-md">
                  <button className='text-slate-500'>
                    <FaShare className='text-slate-700'/>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center px-2 py-4">
          <div>
            <button
              className="p-2  shadow-sm mr-2 rounded-full bg-slate-100  border-[0.05rem] border-slate-200 "
              onClick={() => setIsLikes(!isLikes)}
            >
              {isLikes ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button className="p-2  shadow-sm mr-2 rounded-full bg-slate-100  border-[0.05rem] border-slate-200 ">
              <FaRegCommentAlt />
            </button>
            <button className="p-2  shadow-sm rounded-full bg-slate-100  border-[0.05rem] border-slate-200 ">
              <FaShare />
            </button>
          </div>
          <div>
            <button
              className="p-2 shadow-sm rounded-full bg-slate-100  border-[0.05rem] border-slate-200 "
              onClick={() => setIsBookmark(!isBookmark)}
            >
              {isBookmark ? <FaRegBookmark /> : <FaBookmark />}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default handleCardUpdate(CardHoverOut, 25)
