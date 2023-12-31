import React, { useState } from 'react'
import { Splide} from '@splidejs/react-splide'
import "@splidejs/react-splide/css"
import { weeksRecipe } from '../data/data'
import WeeksCard from '../card/WeeksCard'

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
                            <WeeksCard key={item.id} img={item.img} id={item.id} title={item.title} price={price}/>
                        )
                    })}
                </Splide>
            </div>
        </div>
    </>
  )
}

export default Weeks