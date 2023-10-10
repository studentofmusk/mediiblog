import Link from "next/link"
import Card from "../Accessory/Card"

const ListElement = ({key="", className="", title="", category="", id=""})=>{
    return (
    <Link href={"/blog?id="+id} key={key} className={`${className}`}>
        <Link href={"/Bloglist/Blogs?cat="+category} className="my-4 text-sm text-color-1 hover:underline cursor-pointer">{category}</Link>
        <div className='mb-4 w-5/6 cursor-pointer hover:-translate-y-0.5 duration-100 hover:text-gray-700 text-gray-600 text-xl sm:text-2xl font-extrabold  '>{title}</div>
    </Link>
    )
}

const Collage = ({collage, topRead}) => {
  return (
    <section className="my-10 flex flex-col-reverse sm:flex-row items-center sm:items-start sm:justify-center md:justify-between w-[90%] mx-auto">
        <div className="mt-5 sm:mt-0 w-10/12 sm:w-4/12 cursor-default shrink-0 ">
            <h1 className="mb-2 font-bold text-xl">Top Reads</h1>
            {topRead?topRead.map((element, index)=>{
                return  <>
                        <ListElement id={element._id} key={index} title={element.title} category={element.category} /> 
                        <hr className="border-color-1 opacity-40" />
                        </>
            })
            :"Loading"}
            
        </div>
        <div className="w-full sm:w-7/12 flex flex-col sm:flex-row items-center md:justify-between flex-wrap space-y-3 md:space-y-0">
            {collage?collage.map((element, index)=>{
                    return <Card key={index} className="mb-4 sm:mb-0" href={element._id} imageSrc={element.coverpic} title={element.title} category={element.category} author={element.author} time={element.time} />        
            }):"Loading..."}
                   
        </div>
    </section>
  )
}

export default Collage