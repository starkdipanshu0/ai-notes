"use client"
import { ThemeSwitcher } from '@/components/theme-switcher'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "next-themes";
import Navbar from '@/components/navbar';
import { createClient } from "@/utils/supabase/server";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";
import {UserType} from "@/types/user";
import {user} from './actions'
function  Provider({children}: { children: React.ReactNode }) {

    
    
    useEffect(() => {
        if(user==null)newUser();
      }, [user]);
    
    
      const newUser = async()=>{
    
        if (!user?.email) {
          console.error("Email address is undefined");
          return;
        }
        
        const result = await db.select().from(Users)
        .where(eq(Users.email, user?.email));
        
        if(!result[0]){
          await db.insert(Users).values({
            name: user?.name??"",
            email:user?.primaryEmailAddress?.emailAddress,
            imageUrl:user?.imageUrl
    
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
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              
              <Navbar/>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
    </ThemeProvider>
  )
}

export default Provider