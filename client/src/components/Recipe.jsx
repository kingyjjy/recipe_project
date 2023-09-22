import React, {useState} from 'react'
import RecipeCard from '../card/RecipeCard';
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
                
                <RecipeCard key={item.id} title={item.title} img={item.img} pirce={item.price.toLocaleString()}/>
                
            ))}
        </div>
    </div>
  )
}

export default Recipe