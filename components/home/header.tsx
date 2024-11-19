import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Image
                    src="/assets/icons/keumbu-logo.png"
                    height={1000}
                    width={1000}
                    alt="patient"
                    className="mb-0 h-14 w-fit"
                    />
            </div>
            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header