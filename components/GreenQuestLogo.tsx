import React from 'react';

interface GreenQuestLogoProps {
    className?: string;
    showText?: boolean;
    variant?: 'default' | 'on-dark';
}

const GreenQuestLogo: React.FC<GreenQuestLogoProps> = ({ 
    className = 'w-16 h-16', 
    showText = true, 
    variant = 'default' 
}) => {
    // Exact colors from the GreenQuest Innovations branding
    const tealColor = '#2BBDAE'; // Turquoise/teal
    const greenColor = '#94D03F'; // Lime green
    const textColorTeal = variant === 'on-dark' ? '#FFFFFF' : '#2BBDAE';
    const textColorGreen = variant === 'on-dark' ? '#94D03F' : '#94D03F';

    // Rotation angles and configurations for the 8 petals based on the logo
    // Angles: 0 (top-most), 45, 90 (right-most), 135, 180 (bottom-most), 225, 270 (left-most), 315
    const petalConfigs = [
        { angle: 0, isTeal: true },     // Top (Teal)
        { angle: 45, isTeal: true },    // Top-Right (Teal)
        { angle: 90, isTeal: false },   // Right (Green)
        { angle: 135, isTeal: true },   // Bottom-Right (Teal)
        { angle: 180, isTeal: true },   // Bottom (Teal)
        { angle: 225, isTeal: true },   // Bottom-Left (Teal)
        { angle: 270, isTeal: false },  // Left (Green)
        { angle: 315, isTeal: true },   // Top-Left (Teal)
    ];

    return (
        <div className={`flex flex-col items-center ${showText ? 'gap-3.5' : ''}`}>
            {/* Logo Emblem SVG */}
            <svg 
                className={className} 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {/* 8-Petal Fountain Pen Nib Mandala Group */}
                <g id="mandala-petals">
                    {petalConfigs.map((config, index) => {
                        const fillVal = config.isTeal ? tealColor : greenColor;
                        const strokeVal = config.isTeal ? '#7BE5D9' : '#C2FA75';
                        const veinVal = config.isTeal ? greenColor : tealColor;

                        return (
                            <g 
                                key={index} 
                                transform={`translate(100, 100) rotate(${config.angle})`}
                            >
                                {/* Outer Petal (Fountain Pen Nib Shape) - High Fidelity Vector */}
                                <path
                                    d="M 0,-85 L 25,-55 C 25,-44 21,-22 21,-22 L -21,-22 C -21,-22 -25,-44 -25,-55 Z"
                                    fill={fillVal}
                                />
                                
                                {/* Inner Contour Line */}
                                <path
                                    d="M 0,-76 L 19,-51 C 19,-41 16,-24 16,-24 L -16,-24 C -16,-24 -19,-41 -19,-51 Z"
                                    stroke={strokeVal}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />

                                {/* Center Vein (Fountain Pen Slit) */}
                                <line 
                                    x1="0" 
                                    y1="-23" 
                                    x2="0" 
                                    y2="-46" 
                                    stroke={veinVal} 
                                    strokeWidth="2.0" 
                                    strokeLinecap="round"
                                />
                                {/* Circuit-Style Vent Hole (Breather Hole) */}
                                <circle 
                                    cx="0" 
                                    cy="-46" 
                                    r="4.5" 
                                    fill={veinVal} 
                                />
                            </g>
                        );
                    })}
                </g>

                {/* Central Core Circle (Green) with slight white border for separation */}
                <circle 
                    cx="100" 
                    cy="100" 
                    r="17" 
                    fill="#FFFFFF" 
                />
                <circle 
                    cx="100" 
                    cy="100" 
                    r="14" 
                    fill={greenColor} 
                />
            </svg>

            {/* Logo Text Styling perfectly matching typography of GreenQuest Innovations */}
            {showText && (
                <div className="text-center font-sans">
                    <h4 
                        className="text-[14px] md:text-[15px] font-black tracking-[0.16em] uppercase select-none"
                        style={{ color: textColorTeal, fontFamily: '"Inter", sans-serif' }}
                    >
                        GreenQuest
                    </h4>
                    <p 
                        className="text-[9px] md:text-[10px] font-extrabold tracking-[0.27em] uppercase mt-[4px] select-none"
                        style={{ color: textColorGreen, fontFamily: '"Inter", sans-serif' }}
                    >
                        Innovations
                    </p>
                </div>
            )}
        </div>
    );
};

export default GreenQuestLogo;
