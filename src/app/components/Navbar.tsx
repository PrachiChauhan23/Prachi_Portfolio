'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, HomeIcon, User, Mail } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/projects', label: 'Projects', icon: Briefcase },
    { href: '/about', label: 'About Me', icon: User },
    { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="bg-white  border-b border-gray-200  shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <Link
                    href="/"
                    className="text-2xl font-bold text-gray-900  font-headline"
                >
                    Prachi Chauhan
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-4">
                    {navLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700  hover:bg-gray-100  hover:text-indigo-600 transition"
                        >
                            <Icon className="inline-block w-4 h-4 mr-2" />
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded hover:bg-gray-200  transition"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="h-6 w-6 text-gray-700 " /> : <Menu className="h-6 w-6 text-gray-700 " />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white  border-t border-gray-200  px-4 py-4 space-y-3">
                    {navLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition"
                        >
                            <Icon className="inline-block w-5 h-5 mr-3" />
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
