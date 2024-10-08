import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../svg/logo.svg';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-900 text-white fixed w-full top-0 z-50">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-4">
                    <img src={Logo} alt="Logo" className="w-10 h-10" />
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded transition duration-300">Home</Link>
                        <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded transition duration-300">About</Link>
                        <Link to="/" className="hover:bg-blue-800 px-3 py-2 rounded transition duration-300">Contact</Link>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link to="/" className="block py-2 px-4 text-sm hover:bg-blue-600">Home</Link>
                    <Link to="/" className="block py-2 px-4 text-sm hover:bg-blue-600">About</Link>
                    <Link to="/" className="block py-2 px-4 text-sm hover:bg-blue-600">Contact</Link>
                </div>
            )}
        </header>
    );
}

export default Nav;