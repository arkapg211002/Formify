"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const { user, isSignedIn } = useUser();
  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, []);

  return !path.includes('aiform') && (
    <div className='p-3 px-5 border-b shadow-lg'>
      <div className='container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row'>
        <div className='relative flex flex-col md:flex-row'>
          <Link href="/" className="flex items-center mb-5 font-medium text-[#000000] lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <Image src="/logo.svg" width={20} height={20} alt="Logo" />
            <span className="mx-2 text-xl font-black leading-none select-none">Formify</span>
          </Link>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <Link href="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="https://arkapg211002.github.io/" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-[#000000]">Portfolio</Link>
            <Link href="https://www.linkedin.com/in/arkapratimghosh2002/" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-[#000000]">LinkedIn</Link>
            <Link href="https://github.com/arkapg211002" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-[#000000]">GitHub</Link>
          </nav>
        </div>

        {isSignedIn ? (
          <div className='flex items-center gap-5'>
            <Link href={'/dashboard'}>
              <Button variant="outline" className="text-[#000000] border-[#000000] hover:bg-[#E9EBE3]">Dashboard</Button>
            </Link>
            <UserButton className="text-[#000000]" />
          </div>
        ) : (
          <SignInButton>
            <Button className="text-[#000000] bg-[#E9EBE3] hover:bg-[#000000] hover:text-[#E9EBE3]">Get Started</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Header;
