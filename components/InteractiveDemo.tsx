import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  MessageSquare, 
  Camera, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ArrowRight,
  RefreshCcw,
  Zap
} from 'lucide-react';

type DemoMode = 'welcome' | 'sms' | 'app';
type AppStep = 'select' | 'analyzing' | 'result';
type SmsStep = 'compose' | 'sending' | 'received';

const SAMPLE_CROPS = [
  {
    id: 'tomato',
    name: 'Tomato',
    issue: 'Early Blight (Alternaria solani)',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=400&auto=format&fit=crop',
    advisory: 'Removal and destruction of affected plant parts. Practice crop rotation. Spray organic fungicide if spread continues.',
    smsMessage: 'Hi CropIQ, my tomatoes have dark spots with yellow circles around them. What should I do?'
  },
  {
    id: 'maize',
    name: 'Maize',
    issue: 'Nitrogen Deficiency',
    image: 'https://images.unsplash.com/photo-1554310603-d39d43033735?q=80&w=400&auto=format&fit=crop',
    advisory: 'Apply well-decomposed manure or compost. Use nitrogen-rich organic fertilizers like fish emulsion or neem cake.',
    smsMessage: 'My maize leaves are turning yellow from the tip in a V-shape. Please help.'
  },
  {
    id: 'cassava',
    name: 'Cassava',
    issue: 'Mosaic Disease',
    image: 'https://images.unsplash.com/photo-1614051017838-8e68cf6f0141?q=80&w=400&auto=format&fit=crop',
    advisory: 'Uproot and burn infected plants immediately. Use only certified disease-free stem cuttings for the next planting.',
    smsMessage: 'Cassava leaves are twisted and have light green patches. Is this a disease?'
  }
];

const InteractiveDemo: React.FC = () => {
    const [mode, setMode] = useState<DemoMode>('welcome');
    const [appStep, setAppStep] = useState<AppStep>('select');
    const [smsStep, setSmsStep] = useState<SmsStep>('compose');
    const [selectedCrop, setSelectedCrop] = useState(SAMPLE_CROPS[0]);
    const [isLoading, setIsLoading] = useState(false);

    const resetDemo = () => {
        setMode('welcome');
        setAppStep('select');
        setSmsStep('compose');
        setIsLoading(false);
    };

    const runSimulation = () => {
        setIsLoading(true);
        if (mode === 'app') {
            setAppStep('analyzing');
            setTimeout(() => {
                setAppStep('result');
                setIsLoading(false);
            }, 2500);
        } else if (mode === 'sms') {
            setSmsStep('sending');
            setTimeout(() => {
                setSmsStep('received');
                setIsLoading(false);
            }, 2000);
        }
    };

    const renderMobileScreen = () => {
        if (mode === 'welcome') {
            return (
                <div className="flex flex-col h-full bg-white p-6">
                    <div className="flex-grow flex flex-col justify-center items-center text-center">
                        <div className="w-16 h-16 bg-brand-green-100 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="w-8 h-8 text-brand-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-charcoal mb-2">Try CropIQ Simulation</h3>
                        <p className="text-gray-500 text-sm mb-8">Select a method to see how our AI helps farmers instantly.</p>
                        
                        <div className="w-full space-y-3">
                            <button 
                                onClick={() => setMode('app')}
                                className="w-full py-4 px-6 bg-brand-green-500 hover:bg-brand-green-600 text-white rounded-xl font-bold transition flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <Camera className="w-5 h-5" />
                                    <span>Mobile App</span>
                                </div>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                            </button>
                            <button 
                                onClick={() => setMode('sms')}
                                className="w-full py-4 px-6 bg-white border-2 border-brand-charcoal hover:bg-gray-50 text-brand-charcoal rounded-xl font-bold transition flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>SMS / USSD</span>
                                </div>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                            </button>
                        </div>
                    </div>
                    <div className="text-center pb-2">
                        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto"></div>
                    </div>
                </div>
            );
        }

        if (mode === 'app') {
            return (
                <div className="flex flex-col h-full bg-gray-50">
                    <div className="bg-brand-green-500 p-4 text-white flex items-center gap-3">
                        <button onClick={resetDemo}><RefreshCcw className="w-4 h-4" /></button>
                        <span className="font-bold">CropIQ AI Scanner</span>
                    </div>

                    <div className="flex-grow p-4 overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {appStep === 'select' && (
                                <motion.div 
                                    key="select"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="space-y-4"
                                >
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Select a healthy or sick plant</p>
                                    <div className="grid grid-cols-1 gap-3">
                                        {SAMPLE_CROPS.map((crop) => (
                                            <button 
                                                key={`app-option-${crop.id}`}
                                                onClick={() => setSelectedCrop(crop)}
                                                className={`p-3 rounded-xl border-2 transition text-left flex items-center gap-4 ${selectedCrop.id === crop.id ? 'border-brand-green-500 bg-brand-green-50' : 'border-white bg-white shadow-sm'}`}
                                            >
                                                <img src={crop.image} alt={crop.name} className="w-12 h-12 rounded-lg object-cover" />
                                                <span className="font-bold text-brand-charcoal">{crop.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={runSimulation}
                                        className="w-full py-4 bg-brand-charcoal text-white rounded-xl font-bold mt-4 flex items-center justify-center gap-2"
                                    >
                                        <Camera className="w-5 h-5" />
                                        Analyze Plant
                                    </button>
                                </motion.div>
                            )}

                            {appStep === 'analyzing' && (
                                <motion.div 
                                    key="analyzing"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center h-full text-center py-10"
                                >
                                    <div className="relative w-40 h-40 mb-8">
                                        <img src={selectedCrop.image} alt="Analyzing" className="w-full h-full object-cover rounded-2xl opacity-50" />
                                        <motion.div 
                                            className="absolute top-0 left-0 w-full h-1 bg-brand-green-500 shadow-[0_0_15px_#8DC63F]"
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-charcoal mb-2">AI Processing...</h3>
                                    <p className="text-gray-500 text-sm">Identifying symptoms using CNN model</p>
                                </motion.div>
                            )}

                            {appStep === 'result' && (
                                <motion.div 
                                    key="result"
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="space-y-4"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                                        <img src={selectedCrop.image} alt={selectedCrop.name} className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 text-brand-green-600 mb-1">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase">Diagnosis Complete</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-brand-charcoal mb-4">{selectedCrop.issue}</h4>
                                            
                                            <div className="bg-brand-green-50 p-3 rounded-xl border border-brand-green-100 mb-4">
                                                <h5 className="text-xs font-bold text-brand-green-800 mb-1">RECOMMENDED ACTION:</h5>
                                                <p className="text-sm text-brand-green-900 leading-relaxed">{selectedCrop.advisory}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setAppStep('select')}
                                        className="w-full py-3 bg-gray-200 text-gray-700 rounded-xl font-bold transition flex items-center justify-center gap-2"
                                    >
                                        <RefreshCcw className="w-4 h-4" />
                                        Scan Another
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            );
        }

        if (mode === 'sms') {
            return (
                <div className="flex flex-col h-full bg-white">
                    <div className="bg-gray-100 p-4 border-b flex items-center gap-3">
                        <button onClick={resetDemo}><RefreshCcw className="w-4 h-4 text-gray-500" /></button>
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 bg-brand-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">C</div>
                             <div>
                                <h4 className="text-sm font-bold text-brand-charcoal leading-none">CropIQ Chat</h4>
                                <span className="text-[10px] text-green-500 font-bold uppercase">Online Agent</span>
                             </div>
                        </div>
                    </div>

                    <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-[#f0f2f5]">
                        <AnimatePresence mode="popLayout">
                            <motion.div key="welcome-msg" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs max-w-[85%] text-gray-700">
                                    Welcome to CropIQ. Describe your plant problem or type 'SCAN' to start.
                                </div>
                            </motion.div>

                            {(smsStep === 'sending' || smsStep === 'received') && (
                                <motion.div key={`user-msg-${selectedCrop.id}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex justify-end">
                                    <div className="bg-brand-green-100 p-3 rounded-2xl rounded-tr-none shadow-sm text-xs max-w-[85%] text-brand-green-900 font-medium">
                                        {selectedCrop.smsMessage}
                                    </div>
                                </motion.div>
                            )}

                            {smsStep === 'sending' && (
                                <motion.div key="typing-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white p-2 px-3 rounded-2xl shadow-sm text-[10px] text-gray-400 italic">
                                        Agent is typing...
                                    </div>
                                </motion.div>
                            )}

                            {smsStep === 'received' && (
                                <motion.div key={`diagnosis-res-${selectedCrop.id}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-start">
                                    <div className="bg-brand-charcoal p-4 rounded-2xl rounded-tl-none shadow-md text-xs max-w-[90%] text-white">
                                        <div className="flex items-center gap-2 text-brand-green-400 mb-2">
                                            <Zap className="w-3 h-3" />
                                            <span className="font-bold">CROP DIAGNOSIS</span>
                                        </div>
                                        <p className="font-bold mb-2 text-sm">{selectedCrop.issue}</p>
                                        <p className="mb-3 text-gray-300 opacity-90">{selectedCrop.advisory}</p>
                                        <div className="h-px bg-white/10 mb-2"></div>
                                        <p className="text-[10px] text-gray-400 italic">Was this helpful? Reply with YES or NO.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="p-4 bg-white border-t">
                        {smsStep === 'compose' ? (
                            <div className="space-y-4">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Select a common concern:</p>
                                    <div className="space-y-2 overflow-x-auto">
                                        {SAMPLE_CROPS.map((crop) => (
                                            <button 
                                                key={`sms-option-${crop.id}`}
                                                onClick={() => { setSelectedCrop(crop); runSimulation(); }}
                                                className="w-full text-left p-3 border rounded-xl text-xs hover:bg-gray-50 transition"
                                            >
                                                {crop.smsMessage}
                                            </button>
                                        ))}
                                    </div>
                            </div>
                        ) : (
                            <button 
                                onClick={() => setSmsStep('compose')}
                                className="w-full py-3 bg-gray-100 text-gray-600 rounded-xl font-bold transition text-xs"
                            >
                                Send New Message
                            </button>
                        )}
                    </div>
                </div>
            );
        }
    };

    return (
        <section id="demo" className="py-24 bg-brand-green-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 mb-6 bg-brand-green-500/10 rounded-full border border-brand-green-500/20">
                            <span className="text-brand-green-600 font-bold tracking-wider text-xs uppercase">Interactive Demo</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
                            Experience the power of <span className="text-brand-green-500 underline decoration-brand-green-200">CropIQ</span> in seconds.
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Watch how we bridge the digital divide. From advanced computer vision on smartphones to simple text-based AI via SMS, we ensure no farmer is left behind regardless of their connectivity.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-green-100">
                                <div className="w-10 h-10 bg-brand-green-100 rounded-lg flex items-center justify-center text-brand-green-600 mb-4">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-brand-charcoal mb-2">Visual Detection</h4>
                                <p className="text-sm text-gray-500">Real-time image analysis for farmers with smartphones.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-green-100">
                                <div className="w-10 h-10 bg-brand-charcoal text-white rounded-lg flex items-center justify-center mb-4">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-brand-charcoal mb-2">Text-Based AI</h4>
                                <p className="text-sm text-gray-500">Accessible diagnosis via SMS and USSD for basic phone users.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-brand-green-700 font-medium">
                            <Clock className="w-5 h-5" />
                            <span>Takes less than 1 minute to try.</span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative flex justify-center w-full max-w-md mx-auto lg:max-w-none">
                        {/* Phone Frame */}
                        <div className="relative w-full aspect-[9/18.5] max-h-[640px] bg-brand-charcoal rounded-[3rem] p-2.5 shadow-2xl overflow-hidden border-8 border-brand-charcoal/50">
                             {/* Speaker notch */}
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 bg-brand-charcoal rounded-b-2xl z-20"></div>
                             
                             <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative z-10 transition-all duration-500">
                                {renderMobileScreen()}
                             </div>

                             {/* Home bar */}
                             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gray-300 rounded-full z-20"></div>
                        </div>

                        {/* Background Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-green-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-charcoal/10 rounded-full blur-3xl -z-10 animate-pulse transition-delay-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
