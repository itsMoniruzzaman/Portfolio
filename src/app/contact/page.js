import Address from '@/components/contact/Address';
import BlogAndService from '@/components/contact/BlogAndService';
import ContactInfo from '@/components/contact/ContactInfo';
import React from 'react';

const ContactPage = () => {
    return (
        <div className='container mx-auto'>
            <ContactInfo />
            <BlogAndService />
            <Address />
        </div>
    );
};

export default ContactPage;