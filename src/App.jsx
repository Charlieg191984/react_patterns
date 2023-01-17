import {useRef, useEffect} from 'react'
import TypeWriter from './components/TypeWriter/TypeWriter'
import SharedLayout from "./container/SharedLayout"
import {wait, getRandomBetween} from './util/data'


function App() {
  const container = useRef(null)
  
  const draw = async () => {
    const textElement = container.current.textContent
    let soFar=''

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
    <div className="bg-slate-100  min-h-screen w-full ">
      <SharedLayout>
        <div className='pb-8 h-screen'>
          <h1
            ref={container}
            className="my-4  px-4 py-4 text-2xl text-indigo-600 "
            data-type-max="100"
            data-type-min="400"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sed dicta ratione vero vitae velit aliquam enim doloremque, voluptas dolorem iste cumque dolores animi perferendis mollitia possimus ullam repellat nihil!
          </h1>
        </div>
      </SharedLayout>
    </div>
  )
}

export default App
