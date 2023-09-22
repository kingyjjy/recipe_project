import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="realative bg-orange-100 pt-8 pb-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                    <h4 className='text-3xl font-semibold text-orange-700'>Let's keep in touch</h4>
                    <h5 className="text-lg mt-0 mb-2 text-orange-800">
                        Upload your recipe, and Get other recipe!!!!!!!! dammmmmmmmm~!!
                    </h5>
                    <div className="flex mt-6 lg:mb-0 mb-6">
                        <a href="#" className='flex bg-white text-blue-400 shadow-lg font-nomal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
                            <BsTwitter/>
                        </a>
                        <a href="#" className='flex bg-white text-blue-600 shadow-lg font-nomal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
                            <BsFacebook/>
                        </a>
                        <a href="#" className='flex bg-white text-red-900 shadow-lg font-nomal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
                            <BsInstagram/>
                        </a>
                        <a href="#" className='flex bg-white text-red-600 shadow-lg font-nomal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'>
                            <BsYoutube/>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="flex flex-wrap items-top mb-6">
                        <div className="w-full lg:w-4/12 px-4 ml-auto">
                            <span className="block uppercase text-orange-800 text-sm font-semibold mb-2">Useful links</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-gray-800 font-semibold block pb-2 text-sm'>About Us</a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-gray-800 font-semibold block pb-2 text-sm'>Blog</a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-gray-800 font-semibold block pb-2 text-sm'>Github</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 ml-auto">
                            <span className="block uppercase text-orange-800 text-sm font-semibold mb-2">other resources</span>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-gray-800 font-semibold block pb-2 text-sm'>License</a>
                                </li>
                                <li>
                                    <a href="#" className='text-gray-400 hover:text-gray-800 font-semibold block pb-2 text-sm'>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-orange-400" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-orange-800 font-bold py-1">
                        Copyright ⓒ 2023.09.22 reactWeb by YJJY.
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer