import React from 'react'
import './index.css'
import Header from '@/components/home/header'
import HeroSection from '@/components/home/HeroSection'
import Services from '@/components/home/services'
import Contact from '@/components/home/contact'

const page = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Services />
            <Contact />
            <footer>
                <p>&copy; 2024 Hospital Name. All Rights Reserved.</p>
            </footer>
        </>
    )
}
export default page
