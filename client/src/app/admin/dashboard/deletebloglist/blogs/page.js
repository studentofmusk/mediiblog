'use client'
import Card from "@/app/components/Accessory/Card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [blogs, setBlogs] = useState(false);
    const params = useSearchParams();
    const cat = params.get('cat');
    const getBlogs = async ()=>{
        try {
          const res = await fetch("/api/get-bloglist?cat="+cat);
          const response = await res.json();
          if(response.success){

            setBlogs(response.data);
            console.log(response.data)
          }else{
            console.log("poche");
          }
        } catch (error) {
          console.log(error.message);
        }
      }

      useEffect(()=>{
        getBlogs()
      }, [])
    return<>
        <div className="flex flex-wrap space-x-5 justify-evenly m-10">

        {blogs?blogs.map((element, index)=>{
            return <Card 
            key={index}
            imageSrc={element.coverpic}
            category={element.category} 
            title={element.title} 
            author={element.author} 
            time={element.time}
            cc={true}
            href={`/admin/dashboard/deletebloglist/blogs/confirm?id=${element._id}`}
            />
        }) :"Loading..."  }
        </div>
    </>
}