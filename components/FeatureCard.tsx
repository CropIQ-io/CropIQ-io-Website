import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
                <div className="bg-brand-green-500 p-3 rounded-full mr-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;