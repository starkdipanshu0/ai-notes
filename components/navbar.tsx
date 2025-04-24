import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { signOutAction } from '@/app/actions'
import { ThemeSwitcher } from './theme-switcher'

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 flex items-center justify-between border-b border-b-foreground/10 h-16">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                     🧠 BrainBin
                  </div>

                  <div className="flex gap-10 items-center">
                    
                    
                    <ThemeSwitcher />
                    <Link href="/dashboard">
                      <Button size="sm">Sign in</Button>
                    </Link>
                    
                      
                   
                  </div>
              </nav>
    
  )
}
