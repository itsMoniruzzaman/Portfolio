import Certification from '@/components/education/Certification';
import Degrees from '@/components/education/Degrees';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                <div className='md:flex items-center justify-center gap-x-20'>
                    <div className='flex items-center justify-center'>
                        <FaGraduationCap className='md:text-[24rem] text-[16rem] text-primary' />
                    </div>
                    <div>
                        <h1 className='md:text-8xl text-5xl text-primary font-semibold text-center mb-5'>Education</h1>
                        <p className='md:text-4xl text-2xl text-primary font-medium text-center'>Basic Qualification and Certifications</p>
                    </div>
                </div>
                <Degrees />
                <Certification />
            </div>
        </div>
    );
};

export default EducationPage;