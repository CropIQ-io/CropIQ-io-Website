import React from 'react';
import { CheckCircleIcon, GlobeIcon, LeafIcon, MicroscopeIcon, SmsIcon, UsersIcon } from '../components/Icons';

interface HowItWorksProps {
    navigate: (page: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ navigate }) => {

    const features = [
        { 
            icon: <MicroscopeIcon className="h-8 w-8 text-brand-green-500" />, 
            title: "AI Crop Health Detection", 
            description: "Utilizes advanced image and text recognition to diagnose issues." 
        },
        { 
            icon: <SmsIcon className="h-8 w-8 text-brand-green-500" />, 
            title: "SMS/USSD Access", 
            description: "Ensures accessibility for non-smartphone users, bridging the digital divide." 
        },
        { 
            icon: <GlobeIcon className="h-8 w-8 text-brand-green-500" />, 
            title: "Multi-language Support", 
            description: "Communicates in Yoruba, Hausa, Igbo, and English to serve diverse communities." 
        },
        { 
            icon: <UsersIcon className="h-8 w-8 text-brand-green-500" />, 
            title: "Farmer Dashboard", 
            description: "Provides valuable data for cooperatives and agricultural extension officers." 
        },
        { 
            icon: <CheckCircleIcon className="h-8 w-8 text-brand-green-500" />, 
            title: "API Integration", 
            description: "Partners with agri-input providers and telcos to create a connected ecosystem." 
        },
    ];

    return (
        <div className="bg-white pt-24 pb-20 animate-fade-in-up">
            <div className="container mx-auto px-6">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="text-brand-green-600 hover:text-brand-green-800 font-semibold mb-8 inline-block group">
                    <span className="group-hover:-translate-x-1 inline-block transition-transform duration-200">&larr;</span> Back to Home
                </a>
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal">How CropIQ Works</h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                        From a simple photo to a sustainable solution, our technology is designed to be simple, fast, and effective.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-10 mb-20 relative">
                    {/* Dashed line */}
                    <div className="absolute left-6 h-full border-l-2 border-dashed border-gray-300 top-0"></div>

                    <div className="flex items-start z-10">
                        <div className="flex-shrink-0 bg-brand-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-6">1</div>
                        <div className="bg-gray-50 p-6 rounded-lg flex-grow">
                            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Submit an Inquiry</h3>
                            <p className="text-gray-600">A farmer sends a photo of a sick plant or a text description of its symptoms via SMS or USSD. No internet or smartphone is required.</p>
                        </div>
                    </div>
                     <div className="flex items-start z-10">
                        <div className="flex-shrink-0 bg-brand-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-6">2</div>
                        <div className="bg-gray-50 p-6 rounded-lg flex-grow">
                            <h3 className="text-xl font-bold text-brand-charcoal mb-2">AI Analysis</h3>
                            <p className="text-gray-600">CropIQ’s powerful AI analyzes the submission, using Convolutional Neural Networks (CNNs) trained on vast datasets of local crop data.</p>
                        </div>
                    </div>
                     <div className="flex items-start z-10">
                        <div className="flex-shrink-0 bg-brand-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-6">3</div>
                        <div className="bg-gray-50 p-6 rounded-lg flex-grow">
                            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Instant Diagnosis & Remedy</h3>
                            <p className="text-gray-600">A clear diagnosis and actionable remedy are sent back instantly to the farmer’s phone, translated into their preferred local language.</p>
                        </div>
                    </div>
                    <div className="flex items-start z-10">
                        <div className="flex-shrink-0 bg-brand-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-6">4</div>
                        <div className="bg-gray-50 p-6 rounded-lg flex-grow">
                            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Actionable Recommendations</h3>
                            <p className="text-gray-600">Guidance includes sustainable solutions like organic pest control, smart irrigation techniques, and proper fertilizer application to prevent future losses.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto mb-20">
                     <LeafIcon className="h-12 w-12 mx-auto text-brand-green-500 mb-4" />
                     <h3 className="text-2xl font-bold text-brand-charcoal">Real-Time Insights, Real-World Impact</h3>
                     <p className="text-gray-600 mt-2">
                        By providing immediate, actionable insights, farmers can prevent crop losses, improve their yield, and secure their livelihoods.
                    </p>
                </div>


                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">Product Features</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Technology designed for the unique challenges of smallholder farming.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    {features.map(feature => (
                        <div key={feature.title} className="bg-white p-6 rounded-lg border border-gray-200">
                           <div className="flex items-center space-x-4">
                             <div>{feature.icon}</div>
                             <div>
                                 <h4 className="font-bold text-brand-charcoal">{feature.title}</h4>
                                 <p className="text-gray-600 text-sm">{feature.description}</p>
                             </div>
                           </div>
                        </div>
                    ))}
                </div>

                <div className="text-center border-t pt-10">
                    <p className="text-2xl font-semibold text-brand-charcoal italic max-w-3xl mx-auto">"Technology meets tradition: bridging digital and cultural divides."</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
