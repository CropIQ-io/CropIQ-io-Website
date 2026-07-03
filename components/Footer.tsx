import React from 'react';
import Logo from './Logo';
import GreenQuestLogo from './GreenQuestLogo';

interface FooterProps {
    navigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
    return (
        <footer className="bg-brand-charcoal text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-center justify-center md:justify-start mb-4">
                            <Logo variant="on-dark" />
                        </a>
                        <p className="text-gray-300">Smarter Farming for a Sustainable Africa.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <a href="https://www.linkedin.com/posts/thecropiq_we-are-proud-to-announce-the-launch-of-cropiq-activity-7412457519693856768-GT02" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-white transition duration-300 bg-white/5 rounded-full hover:bg-white/10" aria-label="LinkedIn">
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                         <a href="https://x.com/thecropiq" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-white transition duration-300 bg-white/5 rounded-full hover:bg-white/10" aria-label="Twitter/X">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/cropiq" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-white transition duration-300 bg-white/5 rounded-full hover:bg-white/10" aria-label="Instagram">
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.012 3.855.06 1.061.044 1.787.209 2.427.458a4.902 4.902 0 011.747 1.137 4.902 4.902 0 011.137 1.747c.249.64.414 1.366.457 2.427.048 1.07.06 1.424.06 3.855 0 2.43-.012 2.784-.06 3.855-.044 1.061-.209 1.787-.458 2.427a4.902 4.902 0 01-1.137 1.747 4.902 4.902 0 01-1.747 1.137c-.64.249-1.366.414-2.427.458-1.07.048-1.424.06-3.855.06-2.43 0-2.784-.012-3.855-.06-1.061-.044-1.787-.209-2.427-.458a4.902 4.902 0 01-1.747-1.137 4.902 4.902 0 01-1.137-1.747c-.249-.64-.414-1.366-.457-2.427-.048-1.07-.06-1.424-.06-3.855 0-2.43.012-2.784.06-3.855.044-1.061.209-1.787.458-2.427a4.902 4.902 0 011.137-1.747 4.902 4.902 0 011.747-1.137c.64-.249 1.366-.414 2.427-.457 1.07-.048 1.424-.06 3.855-.06zm1.102 1.812c-1.026-.046-1.369-.057-3.73-.057-2.362 0-2.703.011-3.731.057-.96.044-1.482.204-1.829.338-.46.179-.788.392-1.133.737-.344.344-.558.672-.737 1.133-.134.347-.294.869-.338 1.829-.046 1.028-.057 1.371-.057 3.73 0 2.36.011 2.701.057 3.73.044.96.204 1.482.338 1.829.179.46.392.788.737 1.133.344.344.672.558 1.133.737.347.134.869.294 1.829.338 1.028.046 1.371.057 3.73.057 2.361 0 2.702-.011 3.73-.057.96-.044 1.482-.204 1.829-.338.46-.179.788-.392 1.133-.737.344-.344.558-.672.737-1.133.134-.347.294-.869.338-1.829.046-1.028.057-1.371.057-3.73 0-2.36-.011-2.702-.057-3.73-.044-.96-.204-1.482-.338-1.829-.179-.46-.392-.788-.737-1.133-.344-.344-.672-.558-1.133-.737-.347-.134-.869-.294-1.829-.338zM8.301 12.019A3.696 3.696 0 1111.996 15.7a3.696 3.696 0 01-3.695-3.681zm1.812 0a1.883 1.883 0 101.884-1.883 1.883 1.883 0 00-1.884 1.883zm6.166-4.509a1.144 1.144 0 11-1.143-1.142 1.144 1.144 0 011.143 1.142z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://linktr.ee/cropiq" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-300 hover:text-white transition duration-300 bg-white/5 rounded-full hover:bg-white/10" aria-label="Linktree">
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.511 5.83333V4.11111H18.8444V0H5.15556V4.11111H10.4889V5.83333H6.88889L12 11.5222L17.1111 5.83333H13.511ZM13.511 11.8333V10.1111H18.8444V6H5.15556V10.1111H10.4889V11.8333H6.88889L12 17.5222L17.1111 11.8333H13.511ZM13.511 17.8333V16.1111H18.8444V12H5.15556V16.1111H10.4889V17.8333H6.88889L12 23.5222L17.1111 17.8333H13.511Z"/></svg>
                        </a>
                    </div>
                </div>
                 <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
                    <p>&copy; {new Date().getFullYear()} CropIQ. All rights reserved.</p>
                    <div className="flex items-center gap-3 bg-white/5 py-2 px-4 rounded-2xl border border-white/5">
                        <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">Created by</span>
                        <div className="scale-90 select-none">
                            <GreenQuestLogo showText={true} variant="on-dark" className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;