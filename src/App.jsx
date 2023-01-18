import TypeWriter from './components/TypeWriter/TypeWriter'
import SharedLayout from "./container/SharedLayout"



function App() {

  return (
    <div className="bg-slate-100  min-h-screen w-full ">
      <SharedLayout>
        <TypeWriter />
      </SharedLayout>
    </div>
  )
}

export default App
