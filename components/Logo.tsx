import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'on-dark';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default', size = 'md' }) => {
    const textColor = variant === 'on-dark' ? 'text-white' : 'text-[#263B46]';
    const leafColor = '#44D368';
    const veinColor = variant === 'on-dark' ? '#081810' : '#ffffff';

    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl',
        xl: 'text-4xl',
    };

    return (
        <div className={`font-bold tracking-tight inline-flex items-center select-none font-sans ${sizeClasses[size]} ${textColor} ${className}`}>
            <span className="inline-flex items-baseline">
                <span className="tracking-tight font-semibold">cr</span>
                <span className="relative inline-flex items-baseline justify-center">
                    <span className="font-semibold">o</span>
                    {/* Sprouting Twin Leaves Mark */}
                    <span className="absolute -top-[1.1em] left-1/2 -translate-x-[48%] pointer-events-none w-[1.45em] h-[1.15em]">
                        <svg
                            viewBox="0 0 100 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full overflow-visible"
                            aria-hidden="true"
                        >
                            {/* Left Leaf */}
                            <path
                                d="M47 70 C44 52 30 38 4 35 C1 48 10 65 32 72 C38 74 43 73 47 70 Z"
                                fill={leafColor}
                            />
                            {/* Left Leaf Inner Vein */}
                            <path
                                d="M44 68 C35 56 22 47 10 42"
                                stroke={veinColor}
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* Right Leaf */}
                            <path
                                d="M52 70 C56 46 72 24 96 10 C99 26 94 48 70 65 C62 70 56 72 52 70 Z"
                                fill={leafColor}
                            />
                            {/* Right Leaf Inner Vein */}
                            <path
                                d="M55 67 C66 52 78 36 89 22"
                                stroke={veinColor}
                                strokeWidth="3.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </span>
                <span className="tracking-tight font-semibold">p</span>
                <span className="tracking-tight font-bold ml-[1px]">IQ</span>
            </span>
        </div>
    );
};

export default Logo;

