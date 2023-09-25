import React from 'react'
import { AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";

const DetailView = ({id, title, img, material, price, cate, content}) => {
  return (
    <div>
        <div className="flex justify-between text-4xl font-extrabold my-24">
            <span className='text-2xl font-normal'>{id}번</span>
            <h1 className='text-orange-600'>{title}</h1>
            <span className='text-2xl font-normal'>카테고리:{cate}</span>
        </div>
        <div className="flex justify-center mx-16">
            <img src={`../${img}`} alt={title} />
        </div>
        <div className='border-y-2 border-orange-700 m-16 text-center'>
            <p className='m-11 text-xl'><span className='text-2xl font-bold'>만드는 법:<br/></span> {content}</p>
            <p className='text-2xl m-11 font-bold'>재료: <span className='font-medium text-xl'> {material}</span></p>
            <p className='text-2xl m-11 font-bold'>가격: <span className='font-medium text-xl'>{price}원</span></p>
        </div>
        <div className="flex justify-center mb-11">
            <button type="button" className='mr-4 border-orange-400 bg-orange-400 text-red-700'><AiOutlineHeart/>위시리스트</button>
            <button type='button' className='border-orange-400 bg-orange-400'><AiOutlineShoppingCart/>장바구니</button>
        </div>
    
    </div>
  )
}

export default DetailView