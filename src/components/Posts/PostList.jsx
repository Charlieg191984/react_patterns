import React, {useState, useEffect, memo} from 'react'
import Post from './Post'
const PostList = memo(({posts, onPostClick}) => {

  /* 
    // Render a list like a pro 
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState(undefined)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const initialize = async () => {
      try {
         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {signal})
        const json = await res.json()
        setPosts(json)
      }
      catch (error) {
        console.log(error)
      }
    }

    initialize()

    return () => {
      controller.abort()
    }
  }, [])

  const onPostClick = useCallback((post) => {
    setCurrentPost(post)
  }, []) 
  

  
  */
  return (
    <div className=''>
      {
        posts.map((post, i) => (
          <Post key={post.id} post={post} onPostClick={onPostClick} />
        ))
      }
    </div>
  )
})

export default PostList