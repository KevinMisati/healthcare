import React from 'react'
import './index.css'
import Header from '@/components/home/header'
import HeroSection from '@/components/home/HeroSection'
import Services from '@/components/home/services'
import Contact from '@/components/home/contact'
import Footer from '@/components/home/footer'

const page = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}
export default page
