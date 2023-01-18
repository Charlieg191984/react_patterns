import { useRef, useEffect } from 'react'
import { wait, getRandomBetween } from '../../util/data'

const TypeWriter = () => {
  const container = useRef(null)

   const draw = async () => {
     const textElement = container.current.textContent
     let soFar = ''

     for (const letter of textElement) {
       container.current.textContent = soFar += letter
       const { typeMin, typeMax } = container.current.dataset

       const amountOfTimeToWait = getRandomBetween(typeMin, typeMax)

       await wait(amountOfTimeToWait)
     }
   }

   useEffect(() => {
     draw()
   }, [])

  return (
    <div className="py-4 h-screen">
      <h1
        ref={container}
        className="my-4  px-4 py-4 text-4xl text-indigo-500  capitalize"
        data-type-max="20000"
        data-type-min="10000"
      >
        Hello my name is Charlie a Frontend Developer based out of NEW YORK
        CITY.
      </h1>
    </div>
  )
}

export default TypeWriter
