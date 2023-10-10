import Link from "next/link";

export default function DashboardLayout({ children }) {
    return <section className="w-full">
        <nav  className="w-full bg-color-1">
            <div className="font-bold text-white mx-auto h-10 w-10/12 flex justify-center items-center space-x-2">
                <Link href={"/admin/dashboard/allblogs"} className="hover:bg-blue-400 p-1 rounded-sm">Blog List</Link>
                <Link href={"/admin/dashboard/uploadImage"} className="hover:bg-blue-400 p-1 rounded-sm">Upload Image</Link>
            </div>
        </nav>
        
        {children}
        </section>
  }