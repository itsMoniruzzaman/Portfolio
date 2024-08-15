import Image from 'next/image';
import React from 'react';
import logo1 from '../../../public/assets/Python logo.png'
import logo2 from '../../../public/assets/PyTorch logo.png'
import logo3 from '../../../public/assets/Seaborn logo.png'
import logo4 from '../../../public/assets/Sklearn logo.png'
import logo5 from '../../../public/assets/Tensorflow logo.png'

const DataScience = () => {
    return (
        <div className='flex items-center justify-between my-10'>
            <div className='w-1/2'>
                <Image src='' alt='video' />
            </div>
            <div className='w-1/2'>
                <h1 className='text-4xl font-medium mb-5 text-primary'>Data Science, ML & AI</h1>
                <div className='flex flex-wrap gap-5 my-5'>
                    <Image className='h-16 w-16' src={logo1} alt='python' />
                    <Image className='h-16 w-48' src={logo2} alt='pytorch' />
                    <Image className='h-16 w-16' src={logo3} alt='seaborn' />
                    <Image className='h-16 w-16' src={logo4} alt='sklearn' />
                    <Image className='h-16 w-16' src={logo5} alt='tensorflow' />
                </div>
                <p className='text-lg'>Currently exploring data science and machine learning as a learner. Passionate about gaining practical skills and understanding in these fields.</p>
            </div>
        </div>
    );
};

export default DataScience;