'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/assets/logo.png'
import { RiMenu3Line } from "react-icons/ri";
import { HiOutlineXMark } from "react-icons/hi2";
import MobileNav from './MobileNav';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='container mx-auto'>
            <div className='mx-2 md:mx-0'>
                <div className='flex items-center justify-between py-5'>
                    <Link href='/'>
                        <Image className='md:w-80 w-72' src={logo} quality={100} placeholder='blur' />
                    </Link>
                    <button onClick={() => setToggle(!toggle)} className='text-4xl md:hidden'>
                        {
                            toggle ?
                                <HiOutlineXMark /> :
                                <RiMenu3Line />
                        }
                    </button>
                    <nav className='hidden md:block'>
                        <ul className='md:flex items-center gap-5 text-lg'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/education'>Education</Link></li>
                            <li><Link href='/'>Video Editing</Link></li>
                            <li><Link href='/'>Blog</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <MobileNav toggle={toggle} />
        </div>
    );
};

export default Navbar;