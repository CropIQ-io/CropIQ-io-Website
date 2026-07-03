import React from 'react';

interface StatItemProps {
    value: string;
    label: string;
    description?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, description }) => {
    return (
        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-extrabold text-brand-green-600 mb-2">{value}</div>
            <div className="text-xl font-extrabold text-brand-charcoal mb-2 uppercase tracking-tight">{label}</div>
            {description && <p className="text-gray-500 text-sm">{description}</p>}
        </div>
    );
};

export default StatItem;
