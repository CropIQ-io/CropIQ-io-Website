import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ArrowRight,
  RefreshCcw,
  Zap,
  FileText,
  ShieldCheck,
  ExternalLink,
  Activity
} from 'lucide-react';

const SAMPLE_CROPS = [
  {
    id: 'tomato',
    name: 'Tomato Leaf (Lycopersicon)',
    issue: 'Early Blight (Alternaria solani)',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600&auto=format&fit=crop',
    confidence: '98.4%',
    severity: 'Moderate',
    advisory: 'Prune infected lower leaves immediately. Avoid overhead watering to prevent spreading spores. Apply organic copper-based fungicide weekly until resolved.',
    prevention: 'Practice a 3-year crop rotation. Lay down organic mulch to prevent spores splashing from soil.'
  },
  {
    id: 'maize',
    name: 'Maize Leaf (Zea mays)',
    issue: 'Nitrogen Deficiency',
    image: 'https://images.unsplash.com/photo-1554310603-d39d43033735?q=80&w=600&auto=format&fit=crop',
    confidence: '95.1%',
    severity: 'Mild',
    advisory: 'Apply well-decomposed compost or poultry manure. Side-dress with high-nitrogen organic fertilizers like fish emulsion or blood meal.',
    prevention: 'Incorporate nitrogen-fixing cover crops like cowpeas or clover into your rotation cycle.'
  },
  {
    id: 'cassava',
    name: 'Cassava Leaf (Manihot esculenta)',
    issue: 'Cassava Mosaic Disease (CMD)',
    image: 'https://images.unsplash.com/photo-1614051017838-8e68cf6f0141?q=80&w=600&auto=format&fit=crop',
    confidence: '99.2%',
    severity: 'Severe',
    advisory: 'Uproot and completely burn infected plants to prevent transmission by whiteflies. Do not propagate cuttings from symptomatic crops.',
    prevention: 'Always source certified disease-resistant cassava varieties (e.g., TME 419) for new plantings.'
  }
];

const InteractiveDemo: React.FC = () => {
    const [selectedCrop, setSelectedCrop] = useState(SAMPLE_CROPS[0]);
    const [isScanning, setIsScanning] = useState(false);
    const [hasScanned, setHasScanned] = useState(true);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    const triggerScan = (crop: typeof SAMPLE_CROPS[0]) => {
        setSelectedCrop(crop);
        setIsScanning(true);
        setHasScanned(false);
        setUploadSuccess(false);
        setTimeout(() => {
            setIsScanning(false);
            setHasScanned(true);
        }, 1800);
    };

    const handleSimulatedUpload = () => {
        setIsScanning(true);
        setHasScanned(false);
        setUploadSuccess(true);
        // Randomly choose a different crop
        const remaining = SAMPLE_CROPS.filter(c => c.id !== selectedCrop.id);
        const randomCrop = remaining[Math.floor(Math.random() * remaining.length)] || SAMPLE_CROPS[0];
        
        setTimeout(() => {
            setSelectedCrop(randomCrop);
            setIsScanning(false);
            setHasScanned(true);
        }, 1800);
    };

    return (
        <section id="demo" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 bg-brand-green-500/10 rounded-full border border-brand-green-500/20">
                        <span className="text-brand-green-600 font-bold tracking-wider text-xs uppercase">Interactive Playground</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4 leading-tight">
                        Test Our Plant Disease Detection App
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience our high-precision computer vision model. Click a crop sample below to simulate a live diagnostic scan on our web platform.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">
                    {/* Left Panel: Control Station */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex-grow">
                            <h3 className="font-bold text-xl text-brand-charcoal mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-brand-green-500" />
                                <span>Choose a Leaf Sample</span>
                            </h3>

                            <div className="space-y-4 mb-8">
                                {SAMPLE_CROPS.map((crop) => (
                                    <button
                                        key={crop.id}
                                        onClick={() => triggerScan(crop)}
                                        disabled={isScanning}
                                        className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition duration-300 ${
                                            selectedCrop.id === crop.id && hasScanned
                                                ? 'border-brand-green-500 bg-brand-green-50/40'
                                                : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                                        }`}
                                    >
                                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/5"></div>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-brand-charcoal text-base">{crop.name.split(' (')[0]}</h4>
                                            <p className="text-xs text-gray-400 font-mono mt-1">{crop.name.split(' (')[1]?.replace(')', '') || ''}</p>
                                        </div>
                                        <div className="h-6 w-6 rounded-full bg-brand-green-100 text-brand-green-600 flex items-center justify-center font-bold text-xs">
                                            →
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="border-t border-dashed border-gray-200 pt-8">
                                <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-4">Or Upload Your Photo</h4>
                                <button
                                    onClick={handleSimulatedUpload}
                                    disabled={isScanning}
                                    className="w-full border-2 border-dashed border-brand-green-200 bg-brand-green-50/10 hover:bg-brand-green-50/30 hover:border-brand-green-400 rounded-2xl p-6 transition duration-300 flex flex-col items-center justify-center text-center group disabled:opacity-50"
                                >
                                    <Upload className="w-8 h-8 text-brand-green-500 mb-2 group-hover:scale-110 transition duration-300" />
                                    <span className="font-bold text-brand-charcoal text-sm">Simulate Custom Upload</span>
                                    <span className="text-xs text-gray-400 mt-1">Simulates uploading a file from your device</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-brand-green-700 font-medium bg-brand-green-50 border border-brand-green-100 p-4 rounded-2xl">
                            <Clock className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                            <span className="text-sm">Takes less than 2 seconds to complete a full diagnosis.</span>
                        </div>
                    </div>

                    {/* Right Panel: Web Dashboard Simulator */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="bg-brand-charcoal rounded-[2.5rem] p-3 shadow-2xl flex-grow flex flex-col min-h-[580px] overflow-hidden border-4 border-brand-charcoal">
                            {/* Dashboard Browser Mock Header */}
                            <div className="flex items-center justify-between px-6 py-3 bg-[#202735] rounded-t-[2rem]">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    <div className="h-5 w-48 bg-[#2d3748] rounded-md ml-4 flex items-center px-3 text-[9px] text-gray-400 font-mono overflow-hidden">
                                        https://cropiq.up.railway.app
                                    </div>
                                </div>
                                <div className="text-[10px] text-brand-green-400 font-bold tracking-widest uppercase">
                                    CropIQ Web v1.4
                                </div>
                            </div>

                            {/* Dashboard Internal Content */}
                            <div className="flex-grow bg-[#1a202c] p-6 text-white flex flex-col justify-between relative">
                                <AnimatePresence mode="wait">
                                    {isScanning ? (
                                        <motion.div 
                                            key="scanning"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex-grow flex flex-col items-center justify-center text-center py-16"
                                        >
                                            <div className="relative w-48 h-48 mb-8 rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-green-500/20">
                                                <img src={selectedCrop.image} alt="Scanning crop" className="w-full h-full object-cover opacity-50" />
                                                <motion.div 
                                                    className="absolute left-0 w-full h-1 bg-brand-green-500 shadow-[0_0_20px_#8DC63F]"
                                                    initial={{ top: '0%' }}
                                                    animate={{ top: ['0%', '100%', '0%'] }}
                                                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">Analyzing Leaf Architecture...</h3>
                                            <p className="text-gray-400 text-sm max-w-sm">Comparing symptoms against localized West African crop pathogens</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="result"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex-grow flex flex-col justify-between"
                                        >
                                            <div>
                                                {/* Diagnostic Header */}
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/5">
                                                    <div>
                                                        <span className="text-xs text-brand-green-400 font-mono tracking-widest uppercase block mb-1">
                                                            {uploadSuccess ? 'Custom Upload Diagnostic' : 'Diagnostic Report'}
                                                        </span>
                                                        <h3 className="text-2xl font-black text-white">{selectedCrop.name.split(' (')[0]}</h3>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-gray-400 font-medium">Severity:</span>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                            selectedCrop.severity === 'Severe' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                                            selectedCrop.severity === 'Moderate' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                                                            'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                        }`}>
                                                            {selectedCrop.severity}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Leaf and main health bar */}
                                                <div className="grid md:grid-cols-12 gap-6 mb-6">
                                                    <div className="md:col-span-4 h-32 rounded-xl overflow-hidden border border-white/10 relative">
                                                        <img src={selectedCrop.image} alt={selectedCrop.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="md:col-span-8 flex flex-col justify-center">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-sm font-bold text-gray-300">Pathogen / Stress Detected:</span>
                                                            <span className="text-sm font-bold text-brand-green-400">{selectedCrop.confidence} Confidence</span>
                                                        </div>
                                                        <p className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                                            <AlertCircle className="w-5 h-5 text-brand-green-400" />
                                                            <span>{selectedCrop.issue}</span>
                                                        </p>
                                                        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                                            <div className="bg-brand-green-500 h-full rounded-full" style={{ width: selectedCrop.confidence }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action and preventive cards */}
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                                        <h4 className="text-xs font-bold text-brand-green-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                            <Zap className="w-3.5 h-3.5" />
                                                            <span>Recommended Action</span>
                                                        </h4>
                                                        <p className="text-xs text-gray-300 leading-relaxed">{selectedCrop.advisory}</p>
                                                    </div>
                                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                                        <h4 className="text-xs font-bold text-[#94D03F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                            <ShieldCheck className="w-3.5 h-3.5" />
                                                            <span>Preventive Advice</span>
                                                        </h4>
                                                        <p className="text-xs text-gray-300 leading-relaxed">{selectedCrop.prevention}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-6 pt-4 border-t border-white/5 font-mono">
                                                <CheckCircle2 className="w-4 h-4 text-brand-green-500" />
                                                <span>Model trained on 15,000+ local tropical plant pathogen samples.</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plant Disease Detection Live App CTA Section */}
                <div className="bg-brand-charcoal text-white p-8 md:p-12 rounded-[2.5rem] mt-16 border border-white/10 relative overflow-hidden group shadow-2xl shadow-brand-green-500/5 max-w-7xl mx-auto">
                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-green-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-brand-green-400 uppercase tracking-widest">Production App Ready</span>
                            </div>
                            <h3 className="font-extrabold text-3xl md:text-4xl mb-4 text-white leading-tight">
                                Launch Our Real-World Plant Disease Detector
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                Ready to analyze your own farm crops? Upload field photos directly to our live application dashboard and diagnose crop health instantly with real-world organic advice.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-auto">
                            <a 
                                href="https://cropiq.up.railway.app/dashboard" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-green-500/20 group"
                            >
                                <span className="text-lg">Test Live Application Dashboard</span>
                                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                            </a>
                        </div>
                    </div>
                    {/* Accent decorative vector */}
                    <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-brand-green-500/5 rounded-full blur-3xl group-hover:bg-brand-green-500/15 transition-all duration-500"></div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;
