import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { recipeData } from '../data/data';
import DetailView from '../components/DetailView'
import { AiFillHome } from "react-icons/ai";

const Detail = () => {
    const [food, setFood] = useState([]);
    const {productId} = useParams();
    const details = () => {
       return recipeData.filter((item)=>( item.id === parseInt(productId)));
    }
    useEffect(()=>{
        setFood(details);
    }, []);
    console.log(food);

  return (
    <div className="app relative">
        <div className='absolute -top-16 right-7 text-5xl text-orange-600'><Link to='/'><AiFillHome/></Link></div>
        <div>         
            {
                food.map((item)=>(
                    <DetailView
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        material={item.material}
                        price={item.price}
                        cate={item.category} 
                        content={item.content}
                    />
                ))
            }
        </div>
        
    </div>
  )
}

export default Detail