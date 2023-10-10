import Link from "next/link"

const Latestnews = ({latestPost}) => {
  return (
    <section className="flex w-10/12 mx-auto flex-col sm:flex-row justify-center items-center px-4 md:px-0">
        {latestPost?<>
       
        <Link href={`/blog?id=${latestPost._id}`} className="sm:w-[500px] sm:mr-20">
          <img src={latestPost.coverpic} className="" />
        </Link>
        <Link href={`/blog?id=${latestPost._id}`} className="mt-10 md:mt-0 space-y-2 md:space-y-5 flex flex-col justify-center">
            <div className="text-sm sm:text-base text-color-1 hover:underline cursor-pointer">{latestPost.category}</div>
            <div className="text-xl sm:text-3xl uppercase sm:font-[1000] cursor-pointer" >{latestPost.title}</div>
            <div className="text-[9px] md:text-base flex space-x-2 text-gray-500 cursor-default">
                <div>{latestPost.author}</div>
                <div>|</div>
                <div>{latestPost.time}</div>
            </div>
        </Link>
        
        </>
        :"loading..."}
    </section>
  )
}

export default Latestnews