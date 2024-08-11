import Image from 'next/image';
import React from 'react';
import image from '../../../public/assets/01.png'
import Link from 'next/link';
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
                <h1 className='text-6xl font-medium text-primary'>Moniruzzaman</h1>
                <p className='mt-5 text-3xl leading-normal'>Hi there! I'm a video editor passionate about storytelling and exploring machine learning. I turn raw footage into captivating videos, and I love diving into the world of AI.</p>
                <div className='flex gap-2 mt-5'>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#24292E] text-white p-2' href='/'><FaGithub /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#0a66c2] text-white p-2' href='/'><FaLinkedinIn /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#ff0000] text-white p-2' href='/'><FaYoutube /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-black text-white p-2' href='/'><FaXTwitter /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#1877f2] text-white p-2' href='/'><FaFacebookF /></Link>
                    <Link className="text-2xl 2xl:text-3xl rounded-full bg-gradient-to-b from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white p-2" href="/"><FaInstagram /></Link>
                </div>
            </div>
            <div className='w-1/2'>
                <Image src={image} />
            </div>
        </div>
    );
};

export default Header;