import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full py-3 px-50'>
        <div>

        <Link href={'/'} className='text-lg '>Home</Link>
        <Link href={'/login'}>Login</Link>
        <Link href={'/signup'}>signup</Link>
        </div>
    </div>
  )
}

export default Navbar