import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'on-dark';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
    const textColor = variant === 'on-dark' ? 'text-white' : 'text-[#41515A]';
    // Using two shades of green from the brand palette for a more accurate logo
    const darkLeafColor = '#699832'; // brand-green-700
    const lightLeafColor = '#8DC63F'; // brand-green-500

    return (
        <div className={`font-bold text-2xl tracking-tight flex items-center ${textColor} ${className}`}>
            <span className="flex items-center">
                <span>cr</span>
                <span className="relative inline-flex items-center justify-center">
                    o
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-[24px] h-[20px]">
                        <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M11.8383 9.403C12.8336 7.0398 13.9142 4.4848 14.524 1.905C14.524 1.905 9.14399 0.5284 6.55169 3.424C4.69469 5.4984 4.85109 9.5312 6.01289 11.458C6.01289 11.458 10.3341 12.8346 11.8383 9.403Z"
                                fill={darkLeafColor}
                            />
                            <path
                                d="M12.1617 9.403C11.1664 7.0398 10.0858 4.4848 9.47601 1.905C9.47601 1.905 14.856 0.5284 17.4483 3.424C19.3053 5.4984 19.1489 9.5312 17.9871 11.458C17.9871 11.458 13.6659 12.8346 12.1617 9.403Z"
                                fill={lightLeafColor}
                            />
                        </svg>
                    </span>
                </span>
                <span>pIQ</span>
            </span>
        </div>
    );
};


export default Logo;
