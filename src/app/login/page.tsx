"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password : ""
    })

    const onLogin = async() =>{
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center" style={{backgroundImage: "url('/login.png')"}}>
           <div className="bg-white bg-opacity-75 p-10 rounded">
             <h1 className="text-center text-4xl pb-3" >Login</h1>

                <div className="flex items-center">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} placeholder="Email"></input>
                </div>

                <div className="flex items-center mt-2">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} placeholder="Password" className="min-w-20"></input>
                </div>
            
                <div>
                    <button onClick={onLogin} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">LOGIN</button>
                </div>
            </div>
        </div>
    )
}