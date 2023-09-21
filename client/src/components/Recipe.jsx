import React, {useState} from 'react'
import { HiArrowSmDown } from 'react-icons/hi' 
import {BsHeartFill,BsCart4,BsCardList} from 'react-icons/bs'
import { recipeData } from '../data/data'


const Recipe = () => {
    const [foods, setFoods] = useState(recipeData);

    const category = (cat) => {
        setFoods(
            recipeData.filter((item)=>{
                return item.category === cat;
            })
        );
    };
  return (
    <div className="max-w-[1540px] mx-auto my-12">
        <h1 className='text-orange-500 font-bold text-2xl text-center py-3'>
            레시피 목록
        </h1>
        {/* 카테고리 */}
        <div className="flex flex-col mt-5 mb-3 lg:flex-row justify-center">
            <button onClick={()=>setFoods(recipeData)} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'>전체보기</button>
            <button onClick={()=>category("한식")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'>한식</button>
            <button onClick={()=>category("일식")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'>일식</button>
            <button onClick={()=>category("양식")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'>양식</button>
            <button onClick={()=>category("분식")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'>분식</button>

        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
            {foods.map((item)=>(    
                <div key={item.id} className='group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden '>
                    <img src={item.img} alt={item.title} className='w-full h-[200px] object-cover rounded-lg transition-all duration-300 hover:brightness-50'/>
                    <a href='#' className="bg-white bg-opacity-75 rounded-full border-orange-700 w-[40px] h-[40px] flex justify-center items-center text-red-600 text-xl absolute top-4 right-4">
                        <BsHeartFill/>
                    </a>
                    <div className="absolute bg-black text-white py-5 px-5 w-full left-0 -right-0 -top-20 bg-opacity-0 group-hover:bg-opacity-70 group-hover:left-10 group-hover:right-10 group-hover:top-10 h-2/5 rounded-lg transition-all duration-500">
                        <button type='button' className='bg-white text-black w-[70px] h-[40px] text-center'><BsCart4/></button>
                        <button type='button'><BsCardList/></button>
                    </div>
                    <div className="flex pt-2 pb-6 px-2">
                        <p className="font-bold">{item.title}</p>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Recipe