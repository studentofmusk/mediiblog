'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const Categories = ({category=[]}) => {
  const [cat, setCat ] = useState([])
  useEffect(()=>setCat(category), [category])
  
  return (
    <section className="flex flex-col items-center my-10 md:my-24 space-y-4">
        <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-bold text-gray-700">Providing insight into your next big exam</h1>
        <ul className="text-center w-11/12 flex justify-center space-x-2 md:space-x-5 text-color-1 text-xs md:text-base ">
            <li className="cursor-pointer"><Link href={"/Bloglist/Blogs?cat="+cat[0]}>{cat!=[]?cat[0]:"Learning Science"}</Link></li>
            <li className="">
                <select name="" className="cursor-pointer bg-white" onChange={(e)=>window.location.href=e.target.value}>
                <option value="" disabled selected >Categories</option>
                {cat!=[]?cat.map((element, index)=>{
                  return <option key={index} value={"/Bloglist/Blogs?cat="+element} >{element}</option>
                }):""}
                </select>
            </li>
            <li className="cursor-pointer"><Link href={"/Bloglist/Blogs?cat="+cat[2]}>{cat!=[]?cat[2]:"Fitness"}</Link></li>
        </ul>
    </section>
  )
}

export default Categories