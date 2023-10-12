'use client'

import { useSearchParams } from "next/navigation"

export default function Page() {
    const params = useSearchParams();
    const id = params.get('id');
    
    const deletePage = async()=>{
        try {
            const res = await fetch("/api/admin/pop-blog?id="+id);
            const response = await res.json();
            if(response.success){
                alert("Deleted Successfully!");
                window.location.href = "/admin/dashboard"
            }else{
                alert("Unable to delete");
                window.location.href = "/admin/dashboard"
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return <div className="min-h-[50vh] flex justify-center items-center">
            <div className="w-5/6 sm:w-3/6">
                <div className="text-xl">Do You Want to Delete ID:{id}</div>
                <button onClick={deletePage} className="p-3 bg-red-600 text-white rounded-md ">Confirm</button>
                <button onClick={()=>window.history.back()} className="p-3 bg-blue-600 text-white rounded-md ml-3">Cancel</button>

            </div>
    </div>

}