'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = ({disable=false}) => {
  const  pathname = usePathname() 
  
  return (
    <section className={`${disable?"hidden":""} text-[13px] sticky top-0 z-10 bg-white h-16 flex justify-between px-3 md:px-10 items-center`}>
        <div className="flex items-center">
          <Link href="/">
              <img src="/MediiBlog.jpg"  className="w-36"/>
          </Link>
          <div className="flex  text-color-1 font-bold text-sm">
            <Link href="/" className="py-2 px-1 sm:px-4 cursor-pointer rounded-[4px] hover:bg-color-2">Home</Link>
            {/* <Link href="/category" className="py-2 px-4 cursor-pointer rounded-[4px] hover:bg-color-2">For Educators</Link> */}
            <Link href="/Bloglist" className="py-2 px-4 cursor-pointer rounded-[4px] hover:bg-color-2">Blog</Link>
          </div>


        </div>
        <div className="flex space-x-3 items-center text-xs md:text-base">
          <Link href="/Bloglist" className={` ${ pathname =="/"?"":"hidden" } py-2 px-2 md:px-6 rounded-[4px] bg-color-1 font-bold text-white`}>Let&apos;s Prep</Link>
        </div>
      </section>
  )
}

export default Navbar