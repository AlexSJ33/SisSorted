import { useState } from 'react'
import Sorted from './Components/Sorted'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sorted />
    </>
  )
}

export default App
