import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className="text-orange-500 text-2xl text-center">
            Download delivery app <span className="font-bold ms-3">Delivery is FREE!!</span>
        </h3>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img src="images/deli.png" alt="del" className='w-[550px] mx-auto my-4' />
            <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">GET A APP</p>
            <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2">
            매일 다른 레시피 요리 제공
            </h1>
            <p className='mt-2 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> 
            <p className='py-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p className='py-2'>when an unknown printer took a galley of type and scrambled it toLorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> 
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                Get Download
            </button>
        </div>
        </div>
        
        
            
    </div>
  )
}

export default Delivery