'use client'
import { useState } from "react";

export default function Admin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const Submit =(e)=>{
        e.preventDefault();
        Login()
    }

    const Login = async()=>{
        try {
            const res = await fetch("/api/admin/login", {
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                    Accept:"application/json"
                },
                body:JSON.stringify({
                    username, password
                })
            });
            const response = await res.json();
            if(response.success){
                window.location.href = "/admin/dashboard"
            }else{
                alert(response.message);
            }
        } catch (error) {
            alert(error.message);
        }
    }
    
    return (
        <>
           <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="logo.png" alt="logo"/>
          Admin    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in 
              </h1>
              <form class="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                      <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button onClick={Submit} class="w-full bg-color-1 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >Sign in</button>
                  
              </form>
          </div>
      </div>
  </div>
</section> 
        </>
    )
}