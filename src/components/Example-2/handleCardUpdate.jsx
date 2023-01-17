import React, {useState} from 'react'

const UpdatedComponent = (OriginalComponent, countViews) => {
  
  const NewComponent = () => {
    const [viewsCount, setViewsCount] =useState(1)
    return <OriginalComponent
      viewsCount={viewsCount}
      increaseViews={() => setViewsCount((currCount) => currCount + countViews)}
    />
  }

  return NewComponent
}

export default UpdatedComponent