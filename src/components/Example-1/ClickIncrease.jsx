import React, {useState} from 'react'
import withCounter from './withCounter'

const ClickIncrease = (props) => {
  const [fontSize, setFontSize] = useState(10)
  const { name, counter, incrementCounter } = props
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-2">
      <button
        onClick={() => setFontSize((size) => size + 1)}
        className=" bg-indigo-500 text-white text-xl p-3 rounded shadow-md"
      >
        Increase with click
      </button>
      <p style={{ fontSize: fontSize }} className="text-slate-900">
        Size of font in onClick function:{fontSize}{' '}
      </p>
      <p>Value of 'name' in ClickIncrease: {name}</p>

  
        <button
          className="bg-cyan-200 text-slate-800 text-xl p-3 rounded shadow-md"
          onClick={() => incrementCounter()}
        >
          Increment counter
        </button>
        <p>Value of 'counter' in ClickIncrease: {counter}</p>
   
    </div>
  )
}

export default withCounter(ClickIncrease, 10)