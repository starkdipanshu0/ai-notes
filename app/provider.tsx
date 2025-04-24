"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "next-themes";


import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';


function  Provider({children}: { children: React.ReactNode }) {

   
    const {user} = useUser();
  
  useEffect(() => {
    if(user)newUser();
  }, [user]);


  const newUser = async()=>{

    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("Email address is undefined");
      return;
    }
    
    const result = await db.select().from(Users)
    .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));
    
    if(!result[0]){
      await db.insert(Users).values({
        name: user?.fullName??"",
        email:user?.primaryEmailAddress?.emailAddress,
        imageUrl:user?.imageUrl,
        

      })
    }

  }  
    

  return (
    <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">    

                {children}

          </main>
    </ThemeProvider>
  )
}

export default Provider