'use client'

import Link from "next/link"


export default function Page() {
    return <div className="h-[50vh] flex justify-center items-center" >
        <Link href="/admin/dashboard/deletebloglist">Delete Blog Page</Link>
    </div>

}