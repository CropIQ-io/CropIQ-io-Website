import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import { LeafIcon, MicroscopeIcon, GlobeIcon, UsersIcon, ShieldCheckIcon, CheckCircleIcon, BellIcon, ChartIcon, PartnershipIcon } from './components/Icons';
import GreenQuestLogo from './components/GreenQuestLogo';
import StatItem from './components/StatItem';
import InteractiveDemo from './components/InteractiveDemo';
import SupplyChainAgents from './components/SupplyChainAgents';
import { Camera, Sparkles, Truck, Store, ArrowRight, Activity, DollarSign } from 'lucide-react';

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
                    <section className="relative bg-[#081810] text-white pt-32 pb-36 lg:pt-48 lg:pb-52 overflow-hidden">
                        <div className="absolute inset-0">
                            <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2670&auto=format&fit=crop" alt="Lush green crops in a Nigerian field" className="w-full h-full object-cover opacity-25"/>
                            <div className="absolute inset-0 bg-gradient-to-b from-[#081810]/70 via-[#081810]/85 to-[#081810]"></div>
                        </div>
                        
                        <div className="container mx-auto px-6 relative z-10 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-brand-green-500/15 rounded-full border border-brand-green-500/30 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-brand-green-400 animate-pulse"></span>
                                <span className="text-brand-green-400 font-bold tracking-wider text-xs uppercase">Plant Vision & Supply Chain AI Agents</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 max-w-5xl mx-auto [text-shadow:_0_2px_12px_rgb(0_0_0_/_40%)]">
                                Detect in the Field. <br className="hidden sm:inline" />
                                <span className="text-brand-green-500">Deliver Farm-to-Door.</span>
                            </h1>
                            
                            <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                                CropIQ goes beyond instant plant disease detection — our autonomous network of <strong>5 cooperating AI agents</strong> validates, prices, matches, and delivers Nigeria's produce supply chain with zero middleman friction.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
                                <a href="#ai-agents" className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg shadow-brand-green-500/30 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                                    <span>Explore Supply Chain Agents</span>
                                    <Sparkles className="w-5 h-5" />
                                </a>
                                <a href="#demo" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-10 rounded-full text-lg transition duration-300 backdrop-blur-sm inline-flex items-center justify-center gap-2">
                                    <Activity className="w-5 h-5 text-brand-green-400" />
                                    <span>Test Disease Detection</span>
                                </a>
                            </div>

                            {/* Core Performance Metric Badges */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-2xl lg:text-3xl font-extrabold text-brand-green-400">&lt; 2 hrs</div>
                                    <div className="text-xs text-gray-300 font-medium">Harvest to Buyer Match</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-2xl lg:text-3xl font-extrabold text-brand-green-400">98%+</div>
                                    <div className="text-xs text-gray-300 font-medium">Verified Audit Trail</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-2xl lg:text-3xl font-extrabold text-brand-green-400">&lt; 5%</div>
                                    <div className="text-xs text-gray-300 font-medium">Supply Spoilage Rate</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-2xl lg:text-3xl font-extrabold text-brand-green-400">95%+</div>
                                    <div className="text-xs text-gray-300 font-medium">Pathogen Diagnostic Accuracy</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Problem Section: Both Crop Disease Loss & Supply Chain Fragmentation */}
                    <section id="the-problem" className="py-24 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="h-1 w-8 bg-red-500"></div>
                                        <span className="text-red-500 font-bold uppercase tracking-widest text-sm">The Urgent Double Bottleneck</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
                                        African farmers lose <span className="text-red-600">30–40%</span> in the field, and even more to supply bottlenecks.
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        Agriculture in Sub-Saharan Africa is challenged from both ends: uncontained crop disease reduces harvest yields, while fragmented logistics and exploitative middlemen cause massive post-harvest spoilage and price instability.
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "In-Field Disease: Farmers lack rapid pathogen identification, causing avoidable crop failure.",
                                            "Pricing Blindspots: Lack of real-time market data forces farmers into distressed selling below market cost.",
                                            "Logistics Delays: Delayed freight dispatch leaves perishable produce stranded until it spoils.",
                                            "Disconnected Buyers: Supermarkets and wholesale processors struggle to source consistent, verified produce."
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1.5 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                                                <span className="text-gray-700 text-sm md:text-base">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-4 bg-gray-50 border-l-4 border-brand-charcoal italic text-gray-500 text-sm rounded-r-xl">
                                        Reference: worldbank.org | FAO Africa Agricultural Outlook
                                    </div>
                                </div>
                                <div className="lg:w-1/2 relative">
                                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2670&auto=format&fit=crop" alt="Farmer examining crops" className="w-full h-auto" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-green-500/10 rounded-full blur-3xl -z-10"></div>
                                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-charcoal/5 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats/Market Section */}
                    <section className="py-20 bg-brand-charcoal text-white">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <StatItem value="$1.2B" label="Market Opportunity" description="Agri-advisory & digital supply chain" />
                                <StatItem value="50M+" label="Farmers" description="Smallholders in Sub-Saharan Africa" />
                                <StatItem value="5 Agents" label="Autonomous Supply Loop" description="Verification, pricing, matching, logistics & insight" />
                                <StatItem value="20,000" label="Projected Scaling Target" description="Growers, buyers and logistics partners" />
                            </div>
                        </div>
                    </section>

                    {/* The Autonomous Supply Chain Agents Section */}
                    <SupplyChainAgents />

                    {/* How It Works Section: 4 Integrated Steps */}
                    <section id="how-it-works" className="py-24 bg-gray-50">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-20">
                                <div className="inline-block px-4 py-1.5 mb-4 bg-brand-green-500/10 rounded-full border border-brand-green-500/20">
                                    <span className="text-brand-green-600 font-bold tracking-wider text-xs uppercase">End-to-End Synergy</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-6">How CropIQ Closes the Loop</h2>
                                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                                    From leaf diagnostics in the soil to matched orders in urban centers, CropIQ connects every stage of agricultural value creation.
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch">
                                <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-brand-green-100 rounded-2xl flex items-center justify-center mb-5 text-brand-green-600">
                                        <Camera className="h-8 w-8" />
                                    </div>
                                    <span className="text-xs font-mono text-brand-green-600 font-bold mb-1">STEP 01</span>
                                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">Field Disease Scan</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Farmers upload photo samples to detect blight, pests, or deficiencies before yield loss occurs.
                                    </p>
                                </div>

                                <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5 text-blue-600">
                                        <ShieldCheckIcon className="h-8 w-8" />
                                    </div>
                                    <span className="text-xs font-mono text-blue-600 font-bold mb-1">STEP 02</span>
                                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">Audit & Log Harvest</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Healthy yield is verified by the Verification Agent and added to an immutable digital inventory.
                                    </p>
                                </div>

                                <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-5 text-yellow-600">
                                        <DollarSign className="h-8 w-8" />
                                    </div>
                                    <span className="text-xs font-mono text-yellow-600 font-bold mb-1">STEP 03</span>
                                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">AI Pricing & Matching</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Dynamic Pricing Agent suggests optimal NGN/kg rates; Market Match Agent instantly pairs with supermarkets.
                                    </p>
                                </div>

                                <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-5 text-orange-600">
                                        <Truck className="h-8 w-8" />
                                    </div>
                                    <span className="text-xs font-mono text-orange-600 font-bold mb-1">STEP 04</span>
                                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">Interstate Dispatch</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Logistics Agent quotes freight, tracks route corridors, and delivers fresh produce within hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Plant Disease Detection Interactive Demo Section */}
                    <InteractiveDemo />

                    {/* Competitive Advantage */}
                    <section id="features" className="py-24 bg-white overflow-hidden">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2 relative order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4 pt-12">
                                            <div className="bg-brand-green-50 p-6 rounded-2xl border border-brand-green-100 shadow-sm">
                                                <h4 className="font-bold text-brand-green-800 mb-2">5-Agent Ecosystem</h4>
                                                <p className="text-sm text-brand-green-700/70 italic">Cooperating AI agents automate pricing, matching, and freight</p>
                                            </div>
                                            <div className="bg-brand-charcoal p-6 rounded-2xl text-white shadow-lg shadow-brand-charcoal/20">
                                                <h4 className="font-bold mb-2">Multi-lingual & SMS Ready</h4>
                                                <p className="text-sm text-gray-400">Yoruba, Hausa, Igbo support ensures complete grassroots accessibility</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl">
                                                <h4 className="font-bold text-brand-charcoal mb-2 font-mono">Live Web App</h4>
                                                <p className="text-sm text-gray-500">Diagnostic vision models and multi-portal consoles actively deployed</p>
                                            </div>
                                            <div className="bg-brand-green-500 p-6 rounded-2xl text-white shadow-lg shadow-brand-green-500/20">
                                                <h4 className="font-bold mb-2">UNDP Awarded</h4>
                                                <p className="text-sm text-white/80">Recognized for innovation in climate-smart food systems</p>
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
                                                <p className="text-gray-600 italic">Underrepresented globally, giving us a deep data moat on tropical pathogens.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 bg-brand-green-100 p-1 rounded-full text-brand-green-600 flex-shrink-0">
                                                <CheckCircleIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-charcoal text-xl mb-1">Autonomous Farm-to-Door Commerce</h4>
                                                <p className="text-gray-600 italic">Moving beyond static diagnosis into automated pricing, matching, and freight dispatch.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 bg-brand-green-100 p-1 rounded-full text-brand-green-600 flex-shrink-0">
                                                <CheckCircleIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-charcoal text-xl mb-1">Real-time Market Pulse & Audit Trails</h4>
                                                <p className="text-gray-600 italic">Append-only transaction logs and live regional demand surges (e.g., Lagos tomato index).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
                                                <p className="text-gray-400 text-lg leading-relaxed">Recognized for innovation in AI-powered climate-smart agriculture. This funding accelerates our mission to deliver real-time disease diagnostic tools and AI supply chain agents to smallholder farmers.</p>
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
                                                <p className="text-gray-400 text-lg leading-relaxed">Field validation with smallholder farmers in Ogun, Oyo, and Kaduna States. Direct feedback cycles are refining our computer vision models and supply chain matching logic for real African conditions.</p>
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
                    <section id="our-mission" className="bg-[#091a13] py-24 relative overflow-hidden border-t border-white/10">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green-500 opacity-5 -skew-x-12 translate-x-1/2"></div>
                        <div className="container mx-auto px-6 text-center relative z-10">
                            <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 italic">"Our mission is to make farming and food distribution in Africa smarter, more profitable, and zero-waste."</h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                We are committed to eradicating yield losses and supply chain bottlenecks by putting cutting-edge computer vision and autonomous AI agents directly into the hands of farmers, traders, and logistics providers.
                            </p>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section id="contact" className="py-32 bg-white relative">
                        <div className="container mx-auto px-6 max-w-4xl">
                            <div className="bg-brand-green-500 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-brand-green-500/20">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform agriculture?</h2>
                                <p className="text-lg md:text-xl text-brand-green-50 mb-10">
                                    Whether you're a farmer, supermarket buyer, logistics partner, or investor, join us in building Africa's next-generation autonomous agricultural backbone.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a href="https://cropiq.up.railway.app/dashboard" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-green-700 hover:bg-brand-green-50 font-bold py-4 px-10 rounded-2xl text-lg transition duration-300 shadow-xl flex items-center justify-center">
                                        Test Live App Dashboard
                                    </a>
                                    <a href="https://linktr.ee/cropiq" target="_blank" rel="noopener noreferrer" className="bg-brand-charcoal hover:bg-black text-white font-bold py-4 px-10 rounded-2xl text-lg transition duration-300 flex items-center justify-center">
                                        Get in Touch
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

