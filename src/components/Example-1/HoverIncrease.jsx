import React, {useState} from 'react'
import withCounter from './withCounter'

const HoverIncrease = (props) => {
  const [fontSize, setFontSize] = useState(10)
  const { name, counter, incrementCounter } = props
console.log(props.secretWord)
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-2">
      <button
        onMouseOver={() => setFontSize((size) => size + 1)}
        className=" bg-orange-500 text-white text-xl p-3 rounded shadow-md"
      >
        Increase on hover
      </button>
      <p style={{ fontSize: fontSize }} className="text-slate-900">
        Size of font in onMouseOver function:{fontSize}{' '}
      </p>
      <p>Value of 'name' in HoverIncrease: {name}</p>


        <button
          className=" bg-green-400 text-slate-800 text-xl p-3 rounded shadow-md"
          onMouseOver={() => incrementCounter()}
        >
          Increment counter
        </button>
        <p>Value of 'counter' in HoverIncrease: {counter}</p>
    
    </div>
  )
}

export default withCounter(HoverIncrease,5)