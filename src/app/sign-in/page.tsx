"use client";
import React, {useEffect} from "react";
import {FaUserAlt} from "react-icons/fa";
import Link from "next/link";


export default function SignInPage() {
    useEffect(() => {
        // Set the overflow property of body to hidden when the component is mounted
        document.body.style.overflow = 'hidden';

        // Reset the overflow property when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        orgName:""
    })
    const [error, setError] = React.useState(null);
    const [successMessage, setSuccessMessage] = React.useState(null);


    const onSignIn = async () => {
        try {
            const response = await fetch('http://localhost:8980/api/api/sign-in', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.email,
                    password: user.password,
                    orgName : user.orgName
                })
            })
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                throw new Error(message);
            }
            const responseData = await response.json();
            console.log(responseData);
            setSuccessMessage("Successfully signed in!");
            setTimeout(() => {
                setSuccessMessage(null);
            }, 5000);
            window.location.href = '/login'

        } catch (e) {
            console.error('Error logging in:',e);

            setError("Error signing in. Please try again.");

            // Clear error message after 5 seconds
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    }

    return (

        <div
            className="relative min-h-screen bg-contain bg-center"
            style={{backgroundImage: "url('/login.png')"}}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/3 bg-white p-8 rounded shadow-md">
                    <div className="flex items-center mb-4 bg-blue-100 p-3 rounded">
                        <FaUserAlt className="mr-3"/>
                        <h2 className="text-2xl">Sign In</h2>
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="email" className="pr-3">Username</label>
                        <input
                            id="email"
                            type="text"
                            value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}
                            className="flex-grow bg-transparent focus:outline-none border-b border-black"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="password" className="pr-3">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
                            className="flex-grow bg-transparent focus:outline-none border-b border-black"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="orgName" className="pr-3">Organization Name</label>
                        <input
                            id="orgName"
                            type="text"
                            value={user.orgName} onChange={(e) => setUser({...user, orgName: e.target.value})}
                            className="flex-grow bg-transparent focus:outline-none border-b border-black"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={onSignIn} className="w-1/4 p-2 bg-blue-500 text-white rounded">Sign In</button>
                    </div>
                    <div className="mt-2">
                        <Link href="/login" className="underline">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
