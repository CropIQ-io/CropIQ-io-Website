import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import { LeafIcon, MicroscopeIcon, GlobeIcon, UsersIcon, ShieldCheckIcon, CheckCircleIcon, BellIcon, ChartIcon, PartnershipIcon } from './components/Icons';
import GreenQuestLogo from './components/GreenQuestLogo';
import StatItem from './components/StatItem';
import InteractiveDemo from './components/InteractiveDemo';
import { Camera } from 'lucide-react';

const App: React.FC = () => {
    const [page, setPage] = useState('home');

    const navigate = (targetPage: string, hash?: string) => {
        setPage(targetPage);
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Header navigate={navigate} />
            <main>
                <>
                    {/* Hero Section */}
                    <section className="relative bg-brand-charcoal text-white pt-32 pb-40 lg:pt-48 lg:pb-60 overflow-hidden">
                        <div className="absolute inset-0">
                            <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2670&auto=format&fit=crop" alt="Lush green crops in a Nigerian field" className="w-full h-full object-cover opacity-30"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 to-brand-charcoal/90"></div>
                        </div>
                        <div className="container mx-auto px-6 relative z-10 text-center">
                            <div className="inline-block px-4 py-1.5 mb-6 bg-brand-green-500/20 rounded-full border border-brand-green-500/30">
                                <span className="text-brand-green-400 font-bold tracking-wider text-xs uppercase">AI-Powered Farming</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-down max-w-5xl mx-auto [text-shadow:_0_2px_10px_rgb(0_0_0_/_30%)]">
                                Detect. Diagnose. <span className="text-brand-green-500">Defend</span> your crops.
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed font-medium">
                                AI-Powered Climate-Smart Farming for Every Farmer. Instant plant health intelligence designed specifically for African staple crops and tropical pathogens.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="#how-it-works" className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg shadow-brand-green-500/30 transform hover:scale-105 inline-block">
                                    Get Started
                                </a>
                                <a href="#the-problem" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-10 rounded-full text-lg transition duration-300 backdrop-blur-sm inline-block">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* The Problem Section */}
                    <section id="the-problem" className="py-24 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="h-1 w-8 bg-red-500"></div>
                                        <span className="text-red-500 font-bold uppercase tracking-widest text-sm">The Urgent Challenge</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
                                        Smallholder farmers lose <span className="text-red-600">30–40%</span> of crop yields annually.
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        Late, inaccurate, or inaccessible disease detection costs billions in lost income and threatens regional food security across Africa. 
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "Climate change is increasing pest outbreaks and unpredictable disease patterns.",
                                            "Farmers rely on guesswork and expensive, often unnecessary pesticides.",
                                            "Environmental damage and reduced income trapping communities in poverty."
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1.5 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                                                <span className="text-gray-700">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-4 bg-gray-50 border-l-4 border-brand-charcoal italic text-gray-500 text-sm">
                                        Reference: worldbank.org | FAO (2021)
                                    </div>
                                </div>
                                <div className="lg:w-1/2 relative">
                                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2670&auto=format&fit=crop" alt="Farmer examining crops" className="w-full h-auto" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-green-500/10 rounded-full blur-3xl -z-10"></div>
                                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-charcoal/5 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats/Market Section */}
                    <section className="py-20 bg-brand-charcoal">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <StatItem value="$1.2B" label="Market Opportunity" description="Agri-advisory and extension market" />
                                <StatItem value="50M+" label="Farmers" description="Smallholders in Sub-Saharan Africa" />
                                <StatItem value="95%+" label="Diagnostic Accuracy" description="High-precision identification of crop pathogens" />
                                <StatItem value="20,000" label="Projected Users" description="Goal for current scaling phase" />
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section id="how-it-works" className="py-24 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-20">
                                <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-6">Simple, Fast, and Accessible</h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    CropIQ is a computer vision-powered platform that detects crop diseases often before visible yield loss occurs.
                                </p>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-12 relative items-stretch">
                                {/* Connector arrows for desktop */}
                                <div className="hidden lg:block absolute top-[40%] left-[28%] w-[10.5%] border-t-2 border-dashed border-brand-green-300 z-0"></div>
                                <div className="hidden lg:block absolute top-[40%] left-[61.5%] w-[10.5%] border-t-2 border-dashed border-brand-green-300 z-0"></div>
                                
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10 h-full">
                                    <div className="w-20 h-20 bg-brand-green-100 rounded-full flex items-center justify-center mb-6">
                                        <Camera className="h-10 w-10 text-brand-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-charcoal mb-4">1. Upload Leaf Photo</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Upload a picture of your affected crop directly to our secure, intuitive web application platform.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-brand-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                        <MicroscopeIcon className="h-10 w-10 text-brand-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-charcoal mb-4">2. AI Analysis</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        CNN models optimized for real African field data analyze images instantly, identifying pathogens and nutrient deficiencies.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-brand-green-100 rounded-full flex items-center justify-center mb-6">
                                        <LeafIcon className="h-10 w-10 text-brand-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-charcoal mb-4">3. Get a Solution</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Instant diagnosis and localized organic remedies are displayed on your dashboard in your preferred language.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <InteractiveDemo />

                    {/* Competitive Advantage */}
                    <section id="features" className="py-24 bg-white overflow-hidden">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2 relative order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4 pt-12">
                                            <div className="bg-brand-green-50 p-6 rounded-2xl border border-brand-green-100 shadow-sm">
                                                <h4 className="font-bold text-brand-green-800 mb-2">Real African Field Data</h4>
                                                <p className="text-sm text-brand-green-700/70 italic">Proprietary dataset trained on "real-world field chaos"</p>
                                            </div>
                                            <div className="bg-brand-charcoal p-6 rounded-2xl text-white shadow-lg shadow-brand-charcoal/20">
                                                <h4 className="font-bold mb-2">Multi-lingual</h4>
                                                <p className="text-sm text-gray-400">Yoruba, Hausa, Igbo support ensures inclusivity</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl">
                                                <h4 className="font-bold text-brand-charcoal mb-2 font-mono">MVP Completed</h4>
                                                <p className="text-sm text-gray-500">AI model platform is already functional and tested</p>
                                            </div>
                                            <div className="bg-brand-green-500 p-6 rounded-2xl text-white shadow-lg shadow-brand-green-500/20">
                                                <h4 className="font-bold mb-2">UNDP Awarded</h4>
                                                <p className="text-sm text-white/80">Recognized for innovation in climate-smart agriculture</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 order-1 lg:order-2">
                                    <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
                                        Our Competitive <span className="text-brand-green-500 underline decoration-brand-green-200">Advantage</span>
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="mt-1 bg-brand-green-100 p-1 rounded-full text-brand-green-600 flex-shrink-0">
                                                <CheckCircleIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-charcoal text-xl mb-1">Proprietary African crop disease dataset</h4>
                                                <p className="text-gray-600 italic">Underrepresented globally, giving us a unique data moat.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 bg-brand-green-100 p-1 rounded-full text-brand-green-600 flex-shrink-0">
                                                <CheckCircleIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-charcoal text-xl mb-1">Outcome-verified feedback engine</h4>
                                                <p className="text-gray-600 italic">AI that learns from real farm results, not just lab perfection.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 bg-brand-green-100 p-1 rounded-full text-brand-green-600 flex-shrink-0">
                                                <CheckCircleIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-charcoal text-xl mb-1">Interactive Diagnostic Dashboard</h4>
                                                <p className="text-gray-600 italic">Visualize disease spread and track plant health trends directly through our web application.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Traction & Partners */}
                    {/* Traction & Partnerships Section */}
                    <section id="traction" className="py-24 bg-[#1a202c] text-white overflow-hidden">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">Traction & Partnerships</h2>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto">Building a network for sustainable agricultural impact through strategic innovation and field-tested solutions.</p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {/* Left Column: Highlight and Operations */}
                                <div className="lg:col-span-2 grid gap-6">
                                    {/* Highlight Card: UNDP Grant */}
                                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:border-brand-green-500/30">
                                        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                                            <div className="flex-shrink-0 bg-brand-green-500 p-4 rounded-2xl shadow-[0_0_20px_rgba(141,198,63,0.4)]">
                                                <ShieldCheckIcon className="w-8 h-8 text-brand-charcoal" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl md:text-2xl text-white mb-3">UNDP Grant Awarded</h4>
                                                <p className="text-gray-400 text-lg leading-relaxed">Recognized for innovation in AI-powered climate-smart agriculture. This funding accelerates our mission to deliver real-time disease diagnostic tools to smallholder farmers.</p>
                                            </div>
                                        </div>
                                        {/* Decorative element */}
                                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-green-500/10 rounded-full blur-3xl group-hover:bg-brand-green-500/20 transition-all duration-500"></div>
                                    </div>

                                    {/* Operation Card: Pilot Testing */}
                                    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:border-brand-green-500/30">
                                        <div className="relative z-10 flex items-start gap-6">
                                            <div className="flex-shrink-0 bg-brand-green-500 p-4 rounded-2xl shadow-[0_0_20px_rgba(141,198,63,0.4)]">
                                                <UsersIcon className="w-8 h-8 text-brand-charcoal" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl md:text-2xl text-white mb-3">Pilot Testing Ongoing</h4>
                                                <p className="text-gray-400 text-lg leading-relaxed">Field validation with smallholder farmers in Ogun and Oyo States. Direct feedback cycles are refining our AI for real-world field conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Partners (Full Height) */}
                                <div className="lg:col-span-1 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group transition-all duration-500 hover:bg-white/10 hover:border-brand-green-500/30">
                                    <h4 className="text-sm font-bold mb-10 text-gray-400 uppercase tracking-[0.2em] relative z-10">Key Backers & Partners</h4>
                                    
                                    <div className="space-y-6 w-full relative z-10">
                                        <div className="group/chip bg-white/5 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-default">
                                            <p className="font-bold text-lg text-white mb-1">UNDP & Italian Government</p>
                                            <p className="text-xs text-brand-green-500 font-mono tracking-widest uppercase">Global Partner</p>
                                        </div>
                                        
                                        <div className="group/chip bg-white/5 border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] cursor-default">
                                            <p className="font-bold text-lg text-white mb-1">Youth4Climate</p>
                                            <p className="text-xs text-brand-green-400 font-mono tracking-widest uppercase">Innovation Hub</p>
                                        </div>
                                    </div>

                                    {/* Background glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-green-500/10 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </section>



                    
                    {/* Mission Statement */}
                    <section id="our-mission" className="bg-brand-charcoal py-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green-500 opacity-5 -skew-x-12 translate-x-1/2"></div>
                        <div className="container mx-auto px-6 text-center relative z-10">
                            <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 italic">"Our mission is to make farming in Africa smarter, more sustainable, and more inclusive."</h2>
                            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                                We are committed to reducing crop losses, increasing yields, and improving livelihoods for millions of smallholder farmers by bridging the gap between cutting-edge technology and traditional agriculture.
                            </p>
                        </div>
                    </section>

                     {/* Final CTA */}
                    <section id="contact" className="py-32 bg-white relative">
                        <div className="container mx-auto px-6 max-w-4xl">
                            <div className="bg-brand-green-500 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-brand-green-500/20">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to defend your crops?</h2>
                                <p className="text-lg md:text-xl text-brand-green-50 mb-10">
                                    Whether you're a farmer, a potential partner, or an investor, we invite you to help us revolutionize African agriculture.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a href="https://linktr.ee/cropiq" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-green-600 hover:bg-brand-green-50 font-bold py-4 px-10 rounded-2xl text-lg transition duration-300 shadow-xl flex items-center justify-center">
                                        Get in Touch
                                    </a>
                                    <a href="https://www.instagram.com/cropiq" target="_blank" rel="noopener noreferrer" className="bg-brand-charcoal hover:bg-black text-white font-bold py-4 px-10 rounded-2xl text-lg transition duration-300 flex items-center justify-center">
                                        Follow us @cropiq
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </main>
            <Footer navigate={navigate} />
        </div>
    );
};

export default App;
