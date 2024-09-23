import { useState } from 'react'
import './App.css'
import Counter from './Counter'
// import store from './Redux/store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='d-flex justify-content-center align-items-center bg-dark' style={{height:'100vh'}}>
    <Counter/>
   </div>
   
    </>
  )
}

export default App
