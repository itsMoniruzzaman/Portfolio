import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/logo.png'

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between py-5'>
                <Link href='/'>
                    <Image className='w-80' src={logo} quality={100} placeholder='blur' />
                </Link>
                <nav>
                    <ul className='flex items-center gap-5 text-lg'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/education'>Education</Link></li>
                        <li><Link href='/'>Video Editing</Link></li>
                        <li><Link href='/'>Blog</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;