import Certification from '@/components/education/Certification';
import Degrees from '@/components/education/Degrees';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='mx-4 md:mx-0'>
                <div className='md:flex items-center justify-center gap-x-20'>
                    <FaGraduationCap className='text-[24rem] text-primary' />
                    <div>
                        <h1 className='md:text-8xl text-6xl text-primary font-semibold text-center mb-5'>Education</h1>
                        <p className='text-4xl text-primary font-medium text-center'>Basic Qualification and Certifications</p>
                    </div>
                </div>
                <Degrees />
                <Certification />
            </div>
        </div>
    );
};

export default EducationPage;