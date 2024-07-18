import React from 'react'

const FoodCard = () => {
  return (
    <div className='w-[15rem] rounded-xl border  h-[20rem] bg-[#EBEBEB]'> 
      <div className='relative w-full h-[40%] bg-red-300'>
            <div className='w-[8rem] h-[8rem] absolute -right-10 -top-8 p-2 bg-[#EC5856] rounded-full'>
                <img src="burger.png" className='object-contain w-full h-full' alt="Food Image" /></div>
      </div>
      <div className='w-full pt-10 h-[60%] bg-green-200'>
        <div>
            <h1>Food</h1>
            <h2>1</h2>
            <div>Rs 190</div> <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
