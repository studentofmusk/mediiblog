'use client'
import { useEffect } from "react"

export default function Admin() {
    const isAdmin = async()=>{
        try {
            const res = await fetch("/api/admin/admin-check");
            const response = await res.json();
            if(response.success){
                window.location.href = "/admin/dashboard"
            }else{
                alert(response.message);
                window.location.href = "/admin-in"
            }
        } catch (error) {
            alert(error.message);
        }
    }
    useEffect(()=>{
        isAdmin()
    }, [])
    return (
        <>
            loading....    
        </>
    )
}