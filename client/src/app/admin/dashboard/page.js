'use client'

import Link from "next/link"
import { useState } from "react";

export default function Page() {
    const [loading, setLoading] = useState(false);

    const createNewPage = async()=>{
        try {
            setLoading(true);
            const res = await fetch("/api/admin/create-new-page");
            const response = await res.json();
            if(response.success){
                alert("Created Successful!")
                window.location.href="/admin/dashboard/allblogs"

            }else{
                alert("Unable to create!");
            }
        } catch (error) {
            console.log(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return <div className=" min-h-[50vh] bg-gray-400 flex justify-center items-center px-10 space-x-2 flex-wrap" >
        <div
            className="m-3 block sm:w-5/12 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
                className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                MediiBlog
            </div>
            <div class="p-6">
                <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Create Blog Page
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                After Click the Create button you can get you new page at Blog List, named as Unknown. You can click and Edit it according to you wish
                </p>
                <button
                type="button"
                onClick={createNewPage}
                disabled={loading}
                className="inline-flex items-center rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">{loading?"Loading...":<>
                <span className="text-xl mr-2"> +</span><span className=""> Create</span> 
                </>}
                </button>
            </div>
        </div>
        <div
            className="m-3 block sm:w-5/12 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
                className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                MediiBlog
            </div>
            <div className="p-6">
                <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Delete Blog Page
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                After Click the Delete button you will redirect to the blog collection page. At there You can click and Delete the page according to you wish
                </p>
                <Link
                type="button"
                href="/admin/dashboard/deletebloglist"
                className="inline-flex items-center rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                <span className="text-xl mr-2"> -</span><span className=""> Delete</span> 
                </Link>
            </div>
        </div>
    </div>

}