import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css"
import { weeksRecipe } from '../data/data'
import {BsHeartFill} from 'react-icons/bs'

const Weeks = () => {
    // const [result, setResult] = useState([]);
    // const todays = ['일','월','화','수','목','금','토'];
    // const getCurrentWeek = () => {
       
    //     const getDay = new Date(); //오늘날짜
    //     const toDay = getDay.getTime(); //시간으로 환산
    //     const result = []; //오늘부터 일주일 저장
    //     // result.push(getDay.setTime(getDay.getTime()+(86400000)));
    //     for(let i=0; i<7; i++){
    //         result.push(getDay.setDate(getDay.getDate() + i)) ;
    //     }
    //     return result;
    // }
    // const wDate = getCurrentWeek();
    // console.log(new Date(wDate[0]));

  return (
    <>
        <div className="max-w-[1540px] mx-auto">
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>한 주 레시피</h1>
            <div className='overflow-hidden lg:flex-max-w-[1520px] m-auto py-2 px-2'>
                <Splide
                    options={{
                        perPage:4,
                        gap:"1.5rem",
                        grag:"free",
                        arrow:false
                    }}>
                    {weeksRecipe.map((item,index)=>{
                        const price = item.price.toLocaleString();
                        // const wdt = new Date(wDate[index]);
                        // const wdate = wdt.getFullYear()+"."+(wdt.getMonth()+1) + "." + wdt.getDate() + "("+todays[wdt.getDay()]+")"
                        return (
                            <SplideSlide key={item.id}>
                                <div className="relative bg-gray-100 mb-10 max-w-sm rounded overflow-hidden drop-shadow-md transition duration-500 ease-in-out hover:drop-shadow-xl ">
                                    <img src={item.img} alt={item.title} className='w-full'/>
                                    <div className="px-6 py-5">
                                        <p className="px-2 pt-2 font-bold text-xl truncate">
                                           {item.title}
                                        </p> 
                                        <p className='pb-5 px-2'>{price}원</p>   
                                        <div className='flex justify-between align-middle'>
                                            <button className='bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 border mr-5 border-gray-900 rounded'>
                                                More
                                            </button>
                                            <button className='bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 border border-gray-900 rounded'>
                                                Cart
                                            </button>
                                            <a href="#"><BsHeartFill className='text-2xl text-red-600' style={{"marginTop":"10px"}}/></a>
                                        </div>
                                    </div> 
                                </div>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </div>
    </>
  )
}

export default Weeks