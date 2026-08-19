import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
    navigate: (page: string, hash?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleNavClick = (page: string, hash?: string) => {
        navigate(page, hash);
        setIsOpen(false);
        if (hash) {
            setActiveSection(hash);
        } else {
            setActiveSection('home');
        }
    }

    const navLinks = [
        { name: 'The Problem', page: 'home', hash: '#the-problem' },
        { name: 'AI Agents', page: 'home', hash: '#ai-agents' },
        { name: 'How It Works', page: 'home', hash: '#how-it-works' },
        { name: 'Traction', page: 'home', hash: '#traction' },
    ];

    // Simple scroll spy to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(l => l.hash.replace('#', '')).concat(['home']);
            let current = 'home';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = `#${section}`;
                    }
                }
            }
            setActiveSection(current === '#home' ? 'home' : current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex-1 flex items-center justify-start min-w-[180px]">
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handleNavClick('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                            className="flex items-center hover:opacity-80 transition shrink-0"
                        >
                            <Logo />
                        </a>
                    </div>

                    {/* Center: Nav links */}
                    <nav className="hidden lg:flex items-center justify-center space-x-10 px-4">
                        {navLinks.map((link) => (
                             <a
                                key={`desktop-${link.name}`}
                                href={link.hash || '#'}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.page, link.hash); }}
                                className={`transition duration-300 font-bold text-xs uppercase tracking-widest whitespace-nowrap ${activeSection === link.hash ? 'text-brand-green-500' : 'text-gray-500 hover:text-brand-green-400'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/agents/"
                            className="border-2 border-brand-green-500 text-brand-green-600 hover:bg-brand-green-500 hover:text-white font-bold text-xs uppercase tracking-widest whitespace-nowrap py-1.5 px-5 rounded-full transition duration-300"
                        >
                            CropIQ Agents
                        </a>
                    </nav>

                    {/* Right: CTA / Mobile Menu */}
                    <div className="flex-1 flex items-center justify-end min-w-[180px]">
                        <a 
                            href="#contact" 
                            onClick={(e) => { e.preventDefault(); handleNavClick('home', '#contact'); }} 
                            className="hidden lg:inline-block bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-2.5 px-8 rounded-full transition duration-300 whitespace-nowrap text-sm shadow-md"
                        >
                            Contact Us
                        </a>
                        <div className="lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? <path d="M6 18L18 6M6 6l12 12"></path> : <path d="M4 6h16M4 12h16M4 18h16"></path>}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="lg:hidden mt-4">
                        <nav className="flex flex-col space-y-2">
                             {navLinks.map((link) => (
                                <a 
                                     key={`mobile-${link.name}`} 
                                     href={link.hash || '#'} 
                                     onClick={(e) => { e.preventDefault(); handleNavClick(link.page, link.hash); }} 
                                     className={`py-3 px-4 rounded transition duration-300 block font-bold uppercase tracking-widest text-xs ${activeSection === link.hash ? 'bg-brand-green-50 text-brand-green-600' : 'text-gray-600 hover:bg-gray-50'}`}
                                 >
                                     {link.name}
                                 </a>
                            ))}
                            <a href="/agents/" className="border-2 border-brand-green-500 text-brand-green-600 font-bold uppercase tracking-widest text-xs py-3 px-4 rounded-full transition duration-300 text-center mt-2">
                                CropIQ Agents
                            </a>
                            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('home', '#contact'); }} className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-center mt-2">
                                Contact Us
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;