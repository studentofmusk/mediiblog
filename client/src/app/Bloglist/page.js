'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const categoryFilter = (ListOfObject)=>{
    return ListOfObject.map(element=> element.category).filter((value, index, self) => self.indexOf(value) === index)
  }

export default function Page() {
    const [head, setHead] = useState([]);
    const getHeads = async ()=>{
        try {
          const res = await fetch("/api/get-head");
          const response = await res.json();
          if(response.success){

            setHead(categoryFilter(response.data));
            console.log(response.data)
          }else{
            console.log("poche");
          }
        } catch (error) {
          console.log(error.message);
        }
      }

    useEffect(()=>{getHeads()}, [])
    return <>

        <center className="my-3 md:text-3xl font-bold text-gray-600">MediiBlog&apos;s Collections</center>
        <div className=" w-10/12 mx-auto flex justify-evenly items-center flex-wrap min-h-[50vh] lg:h-[70vh] space-y-4">

        {head.map((element, index)=>{
            return <div
            key={index}
            class="shrink-0 mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            style={{width: "18rem"}}
            >
                <div class="p-6">
                    <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 uppercase">
                    {element}
                    </h5>
                    
                    <Link
                    type="button"
                    href={`Bloglist/Blogs?cat=${element}`}
                    class="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Explore
                    </Link>
                </div>
            </div>
        })}
        </div>
    </>
}