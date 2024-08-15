import Link from 'next/link';
import React from 'react';

const MobileNav = ({ toggle }) => {
    return (
        <nav className={`bg-[#EDF9FE] overflow-hidden text-[#888888] transition-all ease-in-out duration-700 ${toggle ? 'h-[40vh] overflow-y-hidden lg:overflow-hidden border-t border-t-gray-300 lg:invisible lg:h-0 visible  pb-4' : 'h-0 overflow-hidden invisible'}`}>
            <ul className='text-xl text-black text-start mt-5 pl-5'>
                <li className='mt-5'><Link href='/'>Home</Link></li>
                <li className='mt-5'><Link href='/education'>Education</Link></li>
                <li className='mt-5'><Link href='/'>Video Editing</Link></li>
                <li className='mt-5'><Link href='/'>Blog</Link></li>
                <li className='mt-5'><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MobileNav;