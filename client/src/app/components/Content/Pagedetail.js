export default function Pagedetail({admin=false, author="", designation="", authorImgSrc="", time="", description="", images=[], setAuthor=(e)=>{}, setAuthorImgSrc=(e)=>{}, setDescription=(e)=>{}, setDesignation=(e)=>{}, setTime=(e)=>{}}) {
    

    return (<>
        {admin?
        <section className="font-serif leading-7 tracking-wider w-10/12 sm:w-4/6 flex flex-col sm:flex-row justify-center mx-auto my-16 ">
            <div className="flex sm:w-2/6 items-center space-x-3 mb-10 sm:mb-0">
                <div className="w-16 h-16 bg-cover bg-center rounded-full " style={{backgroundImage:`url(${authorImgSrc})`}}></div>
                <div className="">
                        <select name="" onChange={(e)=>setAuthorImgSrc(e.target.value)} id="">
                            <option  defaultValue={authorImgSrc} >{authorImgSrc}</option>
                            {images.map((image, index)=>{
                                return <option key={index} value={`/${image}`}>{image}</option>
                            })}
                        </select>
                    <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author} className="block text-base font-bold mb-2"/>
                    <textarea className="text-sm w-52"onChange={(e)=>setDesignation(e.target.value)} value={designation} ></textarea>
                </div>
            </div>
            <div className="hidden sm:block w-1 mr-5 bg-[#f8d9a2] rounded-sm"></div>
            <div className="sm:w-3/6">
                <input type="text" onChange={(e)=>setTime(e.target.value)} value={time} className="block font-sans mb-4 uppercase text-gray-400 text-sm font-bold"/>
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className=" text-lg sm:text-xl text-gray-800 leading-9"></textarea>
            </div>
        </section>
        
        :<section className="font-serif leading-7 tracking-wider w-10/12 sm:w-4/6 flex flex-col sm:flex-row justify-center mx-auto my-16 ">
                <div className="flex sm:w-2/6 items-center space-x-3 mb-10 sm:mb-0">
                    <div className="w-16 h-16 bg-cover bg-center rounded-full " style={{backgroundImage:`url(${authorImgSrc})`}}></div>
                    <div className="">
                        <div className="text-base font-bold mb-2">{author}</div>
                        <div className="text-sm w-52">{designation}</div>
                    </div>
                </div>
                <div className="hidden sm:block w-1 mr-5 bg-[#f8d9a2] rounded-sm"></div>
                <div className="sm:w-3/6">
                    <div className="font-sans mb-4 uppercase text-gray-400 text-sm font-bold">{time}</div>
                    <div className="text-lg sm:text-xl text-gray-800 leading-9">{description}</div>
                </div>
        </section>}
    </>
    )
}

