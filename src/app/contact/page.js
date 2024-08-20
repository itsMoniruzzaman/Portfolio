import AnimationComponent from '@/components/animation/AnimationComponent';
import Address from '@/components/contact/Address';
import BlogAndService from '@/components/contact/BlogAndService';
import ContactInfo from '@/components/contact/ContactInfo';
import React from 'react';

const ContactPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                <ContactInfo />
                <BlogAndService />
                <Address />
                <AnimationComponent /> 
            </div>
        </div>
    );
};

export default ContactPage;