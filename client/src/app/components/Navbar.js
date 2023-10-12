import { Magnifier } from '../Icons/SVG'
import Link from 'next/link'

const Navbar = ({disable=false}) => {
  
  return (
    <section className={`${disable?"hidden":""} text-[13px] sticky top-0 z-10 bg-white h-16 flex justify-between px-3 md:px-10 items-center`}>
        <div className="flex items-center">
          <Link href="/">
              <img src="/MediiBlog.jpg"  className="w-36"/>
          </Link>
          <div className="hidden md:flex  text-color-1 font-bold text-sm">
            <Link href="/" className="py-2 px-4 cursor-pointer rounded-[4px] hover:bg-color-2">Home</Link>
            {/* <Link href="/category" className="py-2 px-4 cursor-pointer rounded-[4px] hover:bg-color-2">For Educators</Link> */}
            <Link href="/Bloglist" className="py-2 px-4 cursor-pointer rounded-[4px] hover:bg-color-2">Blog</Link>
          </div>

          {/* <div className="hidden md:block relative">
          <input placeholder="Search Exam" className="rounded-full ring-color-1 peer placeholder:text-gray-400 placeholder:hover:text-color-1 placeholder:font-bold placeholder:text-xs bg-color-2  pl-10 w-40 pr-4 py-1  focus:outline-color-1 focus:border-gray-300" />
          <Magnifier className="absolute fill-gray-400 peer-hover:fill-color-1 top-[5px] left-2 w-4 h-4"/>

          </div> */}

        </div>
        <div className="flex space-x-3 items-center text-xs md:text-base">
          {/* <Link href='/signin' className="text-color-1 font-bold py-2 px-6 rounded-[4px] hover:bg-color-2">Sign in </Link> */}
          <button className="py-2 px-2 md:px-6 rounded-[4px] bg-color-1 font-bold text-white">Let&apos;s Prep</button>
        </div>
      </section>
  )
}

export default Navbar