'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AnimationComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])

    return (
        <></>
    );
};

export default AnimationComponent;
