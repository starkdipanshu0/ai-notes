import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { signOutAction } from '@/app/actions'

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 flex items-center justify-between border-b border-b-foreground/10 h-16">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                     🧠 AI Notes
                  </div>

                  <div className="flex gap-4 items-center">
                    <Link href="/" className="text-sm text-gray-600 hover:text-black transition">
                      Home
                    </Link>
                    <Link href="/dashboard" className="text-sm text-gray-600 hover:text-black transition">
                      Dashboard
                    </Link>
                    
                    <Link href="/sign-in">
                      <Button size="sm" variant="outline">Login</Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button size="sm">Sign Up</Button>
                    </Link>
                    
                      <Button size="sm" variant="destructive" formAction={signOutAction}>Sign Out</Button>
                   
                  </div>
              </nav>
    
  )
}
