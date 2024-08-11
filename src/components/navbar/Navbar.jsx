import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <h1>MONIRUZZAMAN</h1>
                <nav>
                    <ul className='flex items-center gap-5'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/'>Education</Link></li>
                        <li><Link href='/'>Video Editing</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;