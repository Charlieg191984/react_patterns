import React, {useState} from 'react'

const UpdateComponent = (OriginalComponent, increaseCount) => {

  function NewComponent(props) {
    const [counter, setCounter] =useState(10)

    return <OriginalComponent
      name="LogRocket"
      counter={counter}
      incrementCounter={() => setCounter((size) => size + increaseCount)}
      {...props}
    />
  }

  return NewComponent
}

export default UpdateComponent