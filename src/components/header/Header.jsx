import Image from 'next/image';
import React from 'react';
import image from '../../../public/assets/01.png'
import Link from 'next/link';
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AnimationComponent from '../animation/AnimationComponent';

const Header = () => {
    return (
        <div className='md:flex flex-row-reverse items-center' data-aos="fade-up">
            <div className='md:w-1/2'>
                <Image src={image} placeholder='blur' alt='banner' quality={100} />
            </div>
            <div className='md:w-1/2'>
                <h1 className='md:text-6xl text-4xl font-medium text-primary'>Moniruzzaman</h1>
                <p className='mt-5 md:text-3xl leading-normal'>Hi there! I'm a video editor passionate about storytelling and exploring machine learning. I turn raw footage into captivating videos, and I love diving into the world of AI.</p>
                <div className='flex gap-2 mt-5'>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#24292E] text-white p-2' target='_blank' href='https://www.github.com/itsMoniruzzaman'><FaGithub /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#0a66c2] text-white p-2' target='_blank' href='https://www.linkedin.com/in/itsmoniruzzaman'><FaLinkedinIn /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#ff0000] text-white p-2' target='_blank' href='https://youtube.com/@itsmoniruzzamanofficial'><FaYoutube /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-black text-white p-2' target='_blank' href='https://x.com/imMoniruzzaman'><FaXTwitter /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#1877f2] text-white p-2' target='_blank' href='https://www.facebook.com/itsMoniruzzamanOfficial'><FaFacebookF /></Link>
                    <Link className="text-2xl 2xl:text-3xl rounded-full bg-gradient-to-b from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white p-2" target='_blank' href="https://www.instagram.com/itsmoniruzzaman"><FaInstagram /></Link>
                </div>
            </div>
            <AnimationComponent />
        </div>
    );
};

export default Header;