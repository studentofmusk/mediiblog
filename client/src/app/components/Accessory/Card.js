import Link from 'next/link'
import React from 'react'

const Card = ({cc=false, key="",imageSrc="", category="", title="", time="", author="", className="", href="" })=>{
    return (
        
        <Link href={cc?href:"/blog?id="+href} key={key} className={`cursor-pointer h-96 w-72 ${className}`}>
            <img src={imageSrc}/>
            <Link href={"/Bloglist/Blogs?cat="+category} className="my-4 text-sm text-color-1 hover:underline cursor-pointer">{category}</Link>
            <div className='mb-4 text-gray-700 text-xl font-extrabold '>{title}</div>
            <div className="text-xs flex space-x-2 text-gray-500 cursor-default">
                <div>{author}</div>
                <div>|</div>
                <div>{time}</div>
            </div>
        </Link>
        )
}
export default Card

