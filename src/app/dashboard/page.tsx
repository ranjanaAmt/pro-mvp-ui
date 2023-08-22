"use client";

import React from "react";
import Link from "next/link";

export default function dashboardPage(){
    return(
        <div>
            Logged in Successfully
            <div className="mt-2">
                <Link href="/login" className="underline">
                    Logout
                </Link>
            </div>
        </div>

    )
}