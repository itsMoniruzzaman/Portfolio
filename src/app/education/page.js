import Degrees from '@/components/education/Degrees';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationPage = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-center gap-x-20'>
                <FaGraduationCap className='text-[24rem] text-primary' />
                <div>
                    <h1 className='text-8xl text-primary font-semibold text-center mb-5'>Education</h1>
                    <p className='text-4xl text-primary font-medium text-center'>Basic Qualification and Certifications</p>
                </div>
            </div>
            <Degrees />
        </div>
    );
};

export default EducationPage;