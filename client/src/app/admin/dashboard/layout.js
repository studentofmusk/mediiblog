'use client'
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const Logout = async()=>{
        try {
            const response = await fetch("/api/admin/logout", {
                method: "POST"
            });
            if (response.ok) {
                window.location.href="/"; 
            } else {
                alert("Failed to logout");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return <section className="w-full">
        <nav  className="w-full bg-color-1">
            <div className="font-bold text-white mx-auto h-10 w-10/12 flex justify-center items-center space-x-2">
                <Link href={"/admin/dashboard"} className="hover:bg-blue-400 p-1 rounded-sm text-sm sm:text-base">Dashboard</Link>
                <Link href={"/admin/dashboard/allblogs"} className="hover:bg-blue-400 p-1 rounded-sm text-sm sm:text-base">Blog List</Link>
                <Link href={"/admin/dashboard/uploadImage"} className="hover:bg-blue-400 p-1 rounded-sm text-sm sm:text-base">Upload Image</Link>
                <div onClick={Logout} className="hover:bg-blue-400 p-1 rounded-sm text-sm sm:text-base">Log out</div>

            </div>
        </nav>
        
        {children}
        </section>
  }