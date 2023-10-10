
export default function Heading({admin=false, category="", title="", setCategory=(e)=>{}, setTitle=(e)=>{}}) {

    return (<>
        {admin?
        <section className="h-40 bg-color-1 text-white flex flex-col justify-center items-center text-center">
        <textarea onChange={(e)=>setCategory(e.target.value)} value={category} className="mb-5 bg-color-1 text-center" placeholder="Type Category"></textarea>
        <textarea onChange={(e)=>setTitle(e.target.value)} value={title} className="bg-color-1 text-center font-sans font-[1000] text-2xl sm:text-5xl uppercase" placeholder="Enter your title here"></textarea>
        </section>
        :<section className="h-40 bg-color-1 text-white flex flex-col justify-center items-center text-center">
        <div className="mb-5">{category}</div>
        <div className="font-sans font-[1000] text-2xl sm:text-5xl uppercase">{title}</div>
        </section>
        } 
         </>
    )
}