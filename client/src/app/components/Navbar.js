'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = ({disable=false}) => {
  const  pathname = usePathname() 
  
  return (
    <section className={`${disable?"hidden":""} text-[13px] sticky top-0 z-10 bg-color-1 h-16 flex justify-between px-3 md:px-10 items-center`}>
        <div className="flex items-center">
          <Link href="/" className='font-sans uppercase mr-2 md:text-lg font-bold text-white'>
              NREMT and NCLEX Mastery Hub
          </Link>
          <div className="flex   text-white font-bold text-sm">
            <Link href="/" className="py-2 px-1 sm:px-4 cursor-pointer rounded-[4px] hover:text-color-1 hover:bg-color-2">Home</Link>
            <Link href="/Bloglist" className="py-2 px-4 cursor-pointer rounded-[4px] hover:text-color-1 hover:bg-color-2">Blog</Link>
          </div>


        </div>
        <div className="  flex space-x-3 items-center text-xs md:text-base">
          <Link href="/Bloglist" className={` ${ pathname =="/"?"":"hidden" } py-2 px-2 md:px-6 rounded-[4px] bg-white font-bold text-color-1`}>Let&apos;s Prep</Link>
        </div>
      </section>
  )
}

export default Navbar