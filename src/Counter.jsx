import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset ,addvalue} from './Redux/counterSlice'

function Counter() {
  const [val,setval]=useState(0)
  const {count}=useSelector((state)=>state.counterReducer)//it ois a selectr func ..and make sure tht use the same counter name mentiond in store
  console.log(count)//destructurng count
const dispatch=useDispatch()
  return (
    <>
<div className='w-75 p-3 border shadow border-light'>
    <h3 className='text-center text-danger mb-3'>Counter</h3>
    <h4 className='text-center text-light mb-3'>{count}</h4>
    <div className=' p-3 my-2 d-flex justify-content-around'>
        <button className='btn btn-success'onClick={()=>{dispatch(increment())}} >+ increase</button>
        <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
        <button className='btn btn-danger' onClick={()=>{dispatch(decrement())}}>- decrease</button>
    </div>
    <div className='mt-3 d-flex'>
      <input type='number' className='form-control' onChange={(e)=>{setval(Number(e.target.value))}}></input>
      <button className='btn btn-warning w-25' onClick={()=>dispatch(addvalue(val))}>Submit</button>
    </div>
</div>
    </>
  )
}

export default Counter