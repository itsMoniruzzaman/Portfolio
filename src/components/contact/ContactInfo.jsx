import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import profile from '../../../public/assets/moniruzzaman.png'

const ContactInfo = () => {
    return (
        <div className='flex items-center my-16'>
            <div className='w-1/2 flex items-center justify-center'>
                <Image src={profile} alt='profile' className='w-3/5 border-4 rounded-full border-primary' />
            </div>
            <div className='w-1/2'>
                <h1 className='text-primary text-4xl font-medium mb-5'>Contact Me</h1>
                <p className='text-lg'>I’m active on almost every social media platform and available to connect. Feel free to message me, and I’ll respond within 24 hours. I can assist with video editing projects and provide insights into machine learning & data science</p>
                <div className='flex gap-2 mt-5'>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#24292E] text-white p-2' href='/'><FaGithub /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#0a66c2] text-white p-2' href='/'><FaLinkedinIn /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#ff0000] text-white p-2' href='/'><FaYoutube /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-black text-white p-2' href='/'><FaXTwitter /></Link>
                    <Link className='text-2xl 2xl:text-3xl rounded-full bg-[#1877f2] text-white p-2' href='/'><FaFacebookF /></Link>
                    <Link className="text-2xl 2xl:text-3xl rounded-full bg-gradient-to-b from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white p-2" href="/"><FaInstagram /></Link>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;