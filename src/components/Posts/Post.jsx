import React, {useCallback} from 'react'

const Post = ({post, onPostClick}) => {
  const onClick = () => {
    onPostClick(post)
  }


  return (
    <button className='border-2 p-2 hover:scale-105 duration-150 border-indigo-700 ease-in-out transition-transform m-2 rounded-md shadow-sm' onClick={onClick}>
      {post.title}
    </button>
  )
}

export default Post