import React, { useReducer, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
const FoodCard = () => {
  const initialState = {
    itemCount:1,
    itemMessage:""
  }
  const reducer=(state,action)=>{
    const {type} = action
    switch (type) {
      case "INCREMENT":
        if(state.itemCount<15) {
          return {itemCount:state.itemCount+1}
         
        }
        return {
          itemCount:state.itemCount,
          itemMessage:"maximum limit reached"
        }
      case "DECREMENT":
        if(state.itemCount<=1) {
          return {itemCount:state.itemCount,
            itemMessage:"minimum limit reached"
          }
        }
        return {itemCount:state.itemCount-1}
      default:
        return state
    }
  }
  const [state,dispatch] =useReducer(reducer,initialState) 
  return (

    <div className='w-[15rem] rounded-3xl  border  h-[18rem] bg-[#EBEBEB]'> 
      <div className='relative w-full h-[40%] '>
            <div className='w-[10rem] h-[10rem] absolute -right-16 -top-10 p-2 bg-[#EC5856] rounded-full'>
                <img src="burger.png" className='object-contain w-full h-full rounded-full' alt="Food Image" /></div>
      </div>
      <div className='w-full font-bold py-5 px-2 h-[60%] '>
        <div className='w-full px-2 space-y-2'>
            <h1 className='text-2xl'>Food</h1>
            <div className='flex items-center space-x-3'>

              <div className='flex items-center space-x-2'>
              <button onClick={e=>dispatch({type:"DECREMENT"})} className='rounded-full '><GrSubtractCircle  size={25}/></button>
              <h2 className='text-2xl'>{state.itemCount}</h2>
              <button onClick={e=>dispatch({type:"INCREMENT"})} className='rounded-full '><IoMdAddCircleOutline  size={30}/></button>
              </div>

              <div>
                <span className='text-sm'>/per plate</span>
              </div>
            </div>
            <div className='flex items-center gap-x-4'>
              <div className='text-xl '>Rs 190</div> <button className='bg-[#EC5856] text-white rounded-2xl px-3 py-1 text-base'>Add to cart</button>
            </div>
            <div className='text-red-800'>{state.itemMessage}</div>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
