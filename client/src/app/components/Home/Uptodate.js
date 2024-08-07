import Link from 'next/link'
import Card from '../Accessory/Card'

const Uptodate = ({updated}) => {
  return (
    <section className='sm:bg-color-3 flex justify-center sm:py-14'>
        {updated?<>
        <Link href={"/blog?id="+updated._id} className="hidden sm:block w-2/6 sm:mr-10"> <img src={updated.coverpic} /></Link>
        <Link href={"/blog?id="+updated._id} className="hidden w-2/6 space-y-6 sm:flex flex-col justify-center">
            <Link href={"/Bloglist/Blogs?cat="+updated.category} className="text-base text-color-1 hover:underline cursor-pointer">{updated.category}</Link>
            <div className="text-gray-800 text-base sm:text-4xl uppercase sm:font-[1000] cursor-pointer" >{updated.title}</div>
            <div className="text-[9px] md:text-base flex space-x-2 text-gray-500 cursor-default">
                <div>{updated.author}</div>
                <div>|</div>
                <div>{updated.time}</div>
            </div>
        </Link>
        <Card className="sm:hidden" imageSrc='nurse.jpg' category='Nursing School' title='2023 NCLEX Changes You Should Know' author='Pocket Prep' time='July 21, 2023'/>
        </>

        :"loading..."}
    </section>
  )
}

export default Uptodate