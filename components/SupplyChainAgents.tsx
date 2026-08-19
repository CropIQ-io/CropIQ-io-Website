import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  TrendingUp, 
  Truck, 
  Store, 
  Wheat, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Layers, 
  Cpu, 
  Flame, 
  ChevronRight,
  Plus,
  RefreshCw,
  Search,
  Check,
  Send,
  Zap
} from 'lucide-react';

interface AgentEvent {
  id: string;
  agent: 'Market Match' | 'Logistics' | 'Pricing' | 'Verification' | 'Insight';
  agentColor: string;
  title: string;
  detail: string;
  time: string;
  badgeBg: string;
}

const INITIAL_EVENTS: AgentEvent[] = [
  {
    id: 'e1',
    agent: 'Market Match',
    agentColor: '#22c55e',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'Order matched',
    detail: 'New order paired to available listing.',
    time: '13:19'
  },
  {
    id: 'e2',
    agent: 'Market Match',
    agentColor: '#22c55e',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'Order matched',
    detail: 'ORD-2851 → Grains Plus onions 300 kg.',
    time: '08:42'
  },
  {
    id: 'e3',
    agent: 'Logistics',
    agentColor: '#f97316',
    badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    title: 'Fee quoted',
    detail: 'ORD-2851: NGN 18,700. Awaiting buyer.',
    time: '08:42'
  },
  {
    id: 'e4',
    agent: 'Pricing',
    agentColor: '#eab308',
    badgeBg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    title: 'Price suggested',
    detail: 'Spinach listing: NGN 750/kg (14d avg 748).',
    time: '07:15'
  },
  {
    id: 'e5',
    agent: 'Verification',
    agentColor: '#3b82f6',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    title: 'Listing accepted',
    detail: 'Green Leaf Farm: Spinach 200 kg.',
    time: '07:15'
  }
];

const FIVE_AGENTS = [
  {
    name: 'Verification & Quality Agent',
    role: 'Audit & Grade',
    desc: 'Audits harvest authenticity, calculates crop health score from diagnostics, and validates moisture/grade before listing.',
    icon: ShieldCheck,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    name: 'Dynamic Pricing Agent',
    role: 'Market Rate Optimization',
    desc: 'Evaluates 14-day trailing volume, regional market variations (Lagos, Abuja, Kano), and suggests fair farmgate pricing.',
    icon: DollarSign,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10 border-yellow-500/20'
  },
  {
    name: 'Market Match Agent',
    role: 'Automated Pairing',
    desc: 'Instantly matches harvested farm inventory with verified supermarket chains, bulk food processors, and wholesale cooperatives.',
    icon: Sparkles,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20'
  },
  {
    name: 'Logistics & Dispatch Agent',
    role: 'Route & Fee Gate',
    desc: 'Calculates instant distance-based freight quotes, schedules interstate dispatch corridors, and prevents post-harvest spoilage.',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10 border-orange-500/20'
  },
  {
    name: 'Insight & Demand Agent',
    role: 'Predictive Pulse',
    desc: 'Detects real-time demand surges across urban markets to notify farmers what to harvest and where yield premiums exist.',
    icon: TrendingUp,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10 border-purple-500/20'
  }
];

const SupplyChainAgents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'console' | 'dashboard' | 'portals'>('console');
  const [events, setEvents] = useState<AgentEvent[]>(INITIAL_EVENTS);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activePortal, setActivePortal] = useState<'farmer' | 'buyer' | 'logistics'>('farmer');
  const [activeActionModal, setActiveActionModal] = useState<string | null>(null);

  const simulateNewHarvest = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Step 1: Verification
    setTimeout(() => {
      setEvents(prev => [
        {
          id: `new-${Date.now()}-1`,
          agent: 'Verification',
          agentColor: '#3b82f6',
          badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          title: 'Harvest verified',
          detail: 'Adamu (Kaduna): 450 kg Fresh Red Tomatoes (Grade A).',
          time: timeNow
        },
        ...prev
      ]);
    }, 600);

    // Step 2: Pricing
    setTimeout(() => {
      setEvents(prev => [
        {
          id: `new-${Date.now()}-2`,
          agent: 'Pricing',
          agentColor: '#eab308',
          badgeBg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
          title: 'Price suggested',
          detail: 'Tomato listing: NGN 820/kg (Lagos demand +18% premium applied).',
          time: timeNow
        },
        ...prev
      ]);
    }, 1400);

    // Step 3: Market Match
    setTimeout(() => {
      setEvents(prev => [
        {
          id: `new-${Date.now()}-3`,
          agent: 'Market Match',
          agentColor: '#22c55e',
          badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          title: 'Order matched',
          detail: 'ORD-3092 → FreshMart Stores Abuja (450 kg Tomatoes).',
          time: timeNow
        },
        ...prev
      ]);
    }, 2200);

    // Step 4: Logistics
    setTimeout(() => {
      setEvents(prev => [
        {
          id: `new-${Date.now()}-4`,
          agent: 'Logistics',
          agentColor: '#f97316',
          badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
          title: 'Fee quoted & Dispatched',
          detail: 'ORD-3092: NGN 26,400. Driver route Kaduna → Abuja confirmed.',
          time: timeNow
        },
        ...prev
      ]);
      setIsSimulating(false);
    }, 3000);
  };

  return (
    <section id="ai-agents" className="py-24 bg-[#0c1e15] text-white relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-gray-200 font-bold text-xs uppercase tracking-widest mb-6">
            <Cpu className="w-4 h-4 text-brand-green-400" />
            <span>Autonomous Agricultural Supply Chain</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Farm-to-door, <br className="hidden sm:inline" />
            <span className="text-brand-green-500">
              every step logged.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Nigeria's produce supply chain — validated, priced, matched, and delivered by <strong className="text-white">five cooperating AI agents</strong> working in real time.
          </p>

          {/* Key Metrics Row from Screenshot 1 */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-10 p-2 bg-white/5 rounded-3xl border border-white/10">
            <div className="py-4 px-3 text-center border-r border-white/10">
              <div className="text-2xl sm:text-4xl font-black text-brand-green-400">&lt; 2 hrs</div>
              <div className="text-xs text-gray-300 font-medium mt-1">harvest → match</div>
            </div>
            <div className="py-4 px-3 text-center border-r border-white/10">
              <div className="text-2xl sm:text-4xl font-black text-brand-green-400">98%+</div>
              <div className="text-xs text-gray-300 font-medium mt-1">audit trail</div>
            </div>
            <div className="py-4 px-3 text-center">
              <div className="text-2xl sm:text-4xl font-black text-brand-green-400">&lt; 5%</div>
              <div className="text-xs text-gray-300 font-medium mt-1">spoil rate</div>
            </div>
          </div>
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left Column: 5 Cooperating Agents Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-400">The 5 Agent Architecture</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">Cooperating Agent Network</h3>
              <p className="text-sm text-gray-300 mt-2">
                Instead of disjointed manual brokers, 5 specialized AI agents exchange append-only state updates to move crops from harvest to urban buyer with zero friction.
              </p>
            </div>

            <div className="space-y-3">
              {FIVE_AGENTS.map((agent, idx) => {
                const Icon = agent.icon;
                return (
                  <div 
                    key={agent.name}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-brand-green-500/40 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className={`p-3 rounded-xl ${agent.bgColor} flex-shrink-0 mt-0.5 group-hover:scale-110 transition duration-300`}>
                      <Icon className={`w-5 h-5 ${agent.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-400">0{idx + 1}.</span>
                        <h4 className="font-bold text-white text-base">{agent.name}</h4>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${agent.bgColor} ${agent.color} ml-auto hidden sm:inline-block`}>
                          {agent.role}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 mt-1 leading-relaxed">{agent.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={simulateNewHarvest}
                disabled={isSimulating}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-green-500 hover:bg-brand-green-600 disabled:opacity-50 text-white font-bold py-3.5 px-6 rounded-2xl transition duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>{isSimulating ? 'Agents Cooperating...' : 'Trigger Harvest Simulation'}</span>
              </button>
              <span className="text-xs text-gray-400">Click to run all 5 agents through a real Nigerian supply corridor</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Mobile App UI (faithful to screenshots) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[420px] bg-[#071710] rounded-[3rem] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-4 border-[#183a2a] relative overflow-hidden">
              
              {/* iPhone Island / Status Bar */}
              <div className="pt-2 pb-3 px-6 flex items-center justify-between text-xs text-gray-300 border-b border-white/5">
                <span className="font-bold font-mono">9:41</span>
                <div className="w-24 h-4 bg-black rounded-full mx-auto"></div>
                <div className="flex items-center gap-1.5 font-mono text-[10px]">
                  <span>5G</span>
                  <div className="w-5 h-2.5 border border-gray-300 rounded-sm p-0.5 flex items-center">
                    <div className="w-full h-full bg-brand-green-400 rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* In-Phone Navigation Switcher */}
              <div className="grid grid-cols-3 p-1.5 bg-[#0f281d] rounded-2xl mx-3 my-3 text-xs font-bold">
                <button 
                  onClick={() => setActiveTab('console')}
                  className={`py-2 rounded-xl transition ${activeTab === 'console' ? 'bg-brand-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                >
                  Agent Console
                </button>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`py-2 rounded-xl transition ${activeTab === 'dashboard' ? 'bg-brand-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                >
                  Farmer App
                </button>
                <button 
                  onClick={() => setActiveTab('portals')}
                  className={`py-2 rounded-xl transition ${activeTab === 'portals' ? 'bg-brand-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                >
                  3 Portals
                </button>
              </div>

              {/* Dynamic Screen Contents */}
              <div className="min-h-[520px] max-h-[560px] overflow-y-auto px-3 pb-4">
                
                {/* 1. AGENT CONSOLE (SCREENSHOT 3) */}
                {activeTab === 'console' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#10251c] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-lg text-white">Agent Console</h4>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-gray-300 text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500"></span>
                            Live
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                          Append-only · all 5 agents · {events.length} events
                        </p>
                      </div>
                      <button 
                        onClick={simulateNewHarvest}
                        disabled={isSimulating}
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-brand-green-400 transition"
                        title="Simulate Event"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Events Stream */}
                    <div className="space-y-2.5">
                      <AnimatePresence>
                        {events.map((evt) => (
                          <motion.div
                            key={evt.id}
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="bg-[#0b1d14] p-3.5 rounded-2xl border border-white/5 hover:border-white/15 transition relative"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: evt.agentColor }}></span>
                                <span className="text-xs font-bold" style={{ color: evt.agentColor }}>{evt.agent}</span>
                              </div>
                              <span className="text-[10px] text-gray-500 font-mono">{evt.time}</span>
                            </div>
                            <h5 className="text-xs font-bold text-white mb-0.5">{evt.title}</h5>
                            <p className="text-[11px] text-gray-400 font-sans leading-relaxed">{evt.detail}</p>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {/* 2. FARMER APP VIEW & MARKET PULSE (SCREENSHOT 2) */}
                {activeTab === 'dashboard' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    {/* Quick Actions (4-grid from Screenshot 2) */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">
                        QUICK ACTIONS
                      </div>
                      <div className="grid grid-cols-2 gap-2.5">
                        <button 
                          onClick={simulateNewHarvest}
                          className="bg-[#dcfce7] text-[#14532d] p-3 rounded-2xl text-left font-bold text-xs flex items-center gap-2 hover:opacity-90 transition shadow-sm"
                        >
                          <span className="text-lg">🌾</span>
                          <span>Log Harvest</span>
                        </button>
                        <button 
                          onClick={() => setActiveTab('portals')}
                          className="bg-[#fef3c7] text-[#78350f] p-3 rounded-2xl text-left font-bold text-xs flex items-center gap-2 hover:opacity-90 transition shadow-sm"
                        >
                          <span className="text-lg">📝</span>
                          <span>Adjust Stock</span>
                        </button>
                        <button 
                          onClick={() => setActiveTab('portals')}
                          className="bg-[#dbeafe] text-[#1e40af] p-3 rounded-2xl text-left font-bold text-xs flex items-center gap-2 hover:opacity-90 transition shadow-sm"
                        >
                          <span className="text-lg">🛒</span>
                          <span>View Buyers</span>
                        </button>
                        <button 
                          onClick={() => setActiveTab('console')}
                          className="bg-[#f3e8ff] text-[#581c87] p-3 rounded-2xl text-left font-bold text-xs flex items-center gap-2 hover:opacity-90 transition shadow-sm"
                        >
                          <span className="text-lg">✨</span>
                          <span>Insight Agent</span>
                        </button>
                      </div>
                    </div>

                    {/* Market Pulse Widget (from Screenshot 2) */}
                    <div className="bg-[#0f2e20] p-4 rounded-3xl border border-brand-green-500/20 shadow-lg">
                      <div className="text-[10px] font-bold tracking-widest text-brand-green-400 uppercase mb-1">
                        MARKET PULSE
                      </div>
                      <h4 className="font-serif font-bold text-sm text-white mb-3">
                        Tomato demand up 18% in Lagos this week
                      </h4>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-black/30 p-2.5 rounded-xl text-center border border-white/5">
                          <span className="text-base">🍅</span>
                          <div className="text-[10px] text-gray-300 font-medium mt-0.5">Tomatoes</div>
                          <div className="text-xs font-bold text-brand-green-400">+18%</div>
                        </div>
                        <div className="bg-black/30 p-2.5 rounded-xl text-center border border-white/5">
                          <span className="text-base">🌽</span>
                          <div className="text-[10px] text-gray-300 font-medium mt-0.5">Maize</div>
                          <div className="text-xs font-bold text-brand-green-400">+5%</div>
                        </div>
                        <div className="bg-black/30 p-2.5 rounded-xl text-center border border-white/5">
                          <span className="text-base">🌶️</span>
                          <div className="text-[10px] text-gray-300 font-medium mt-0.5">Pepper</div>
                          <div className="text-xs font-bold text-brand-green-400">+12%</div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Agent Activity Preview */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">
                        RECENT AGENT ACTIVITY
                      </div>
                      <div className="space-y-2">
                        {events.slice(0, 3).map((e) => (
                          <div key={e.id} className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: e.agentColor }}></span>
                              <div>
                                <div className="font-bold text-white">{e.title}</div>
                                <div className="text-[10px] text-gray-400 truncate max-w-[200px]">{e.detail}</div>
                              </div>
                            </div>
                            <span className="text-[10px] text-gray-500 font-mono">{e.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* In-app bottom navigation bar */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-around text-[10px] text-gray-400 font-medium">
                      <span className="text-brand-green-400 font-bold">Home</span>
                      <span>Inventory (2)</span>
                      <span>Listings</span>
                      <span>Buyers</span>
                      <span>Insight</span>
                    </div>
                  </motion.div>
                )}

                {/* 3. SIGN IN / 3 PORTALS VIEW (SCREENSHOT 1) */}
                {activeTab === 'portals' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2 px-1">
                      SIGN IN AS
                    </div>

                    {/* Farmer Portal */}
                    <div 
                      onClick={() => setActivePortal('farmer')}
                      className={`p-4 rounded-3xl border transition cursor-pointer flex items-center gap-3.5 ${activePortal === 'farmer' ? 'bg-white text-brand-charcoal border-white shadow-xl' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#0f2e20] text-brand-green-400 flex items-center justify-center text-xl flex-shrink-0">
                        🌾
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-serif font-bold text-base leading-tight">Farmer Portal</h4>
                        <p className={`text-xs mt-0.5 ${activePortal === 'farmer' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Log harvests · Manage inventory · Find buyers
                        </p>
                        <div className="text-[11px] font-bold text-brand-green-600 mt-1">
                          Adamu · Kaduna
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${activePortal === 'farmer' ? 'text-brand-charcoal' : 'text-gray-500'}`} />
                    </div>

                    {/* Buyer Portal */}
                    <div 
                      onClick={() => setActivePortal('buyer')}
                      className={`p-4 rounded-3xl border transition cursor-pointer flex items-center gap-3.5 ${activePortal === 'buyer' ? 'bg-white text-brand-charcoal border-white shadow-xl' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#0f2e20] text-brand-green-400 flex items-center justify-center text-xl flex-shrink-0">
                        🛒
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-serif font-bold text-base leading-tight">Buyer Portal</h4>
                        <p className={`text-xs mt-0.5 ${activePortal === 'buyer' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Browse listings · Place orders · Negotiate fees
                        </p>
                        <div className="text-[11px] font-bold text-brand-green-600 mt-1">
                          FreshMart Stores · Abuja
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${activePortal === 'buyer' ? 'text-brand-charcoal' : 'text-gray-500'}`} />
                    </div>

                    {/* Logistics Portal */}
                    <div 
                      onClick={() => setActivePortal('logistics')}
                      className={`p-4 rounded-3xl border transition cursor-pointer flex items-center gap-3.5 ${activePortal === 'logistics' ? 'bg-white text-brand-charcoal border-white shadow-xl' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#0f2e20] text-brand-green-400 flex items-center justify-center text-xl flex-shrink-0">
                        🚚
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-serif font-bold text-base leading-tight">Logistics Portal</h4>
                        <p className={`text-xs mt-0.5 ${activePortal === 'logistics' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Dispatch board · Fee gate · Fleet roster
                        </p>
                        <div className="text-[11px] font-bold text-brand-green-600 mt-1">
                          Crop IQ Dispatch · Lagos HQ
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${activePortal === 'logistics' ? 'text-brand-charcoal' : 'text-gray-500'}`} />
                    </div>

                    <div className="p-3 bg-brand-green-500/10 border border-brand-green-500/20 rounded-2xl text-[11px] text-brand-green-300 text-center font-mono">
                      CROP IQ AGENTS · v1.0 · NGN
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupplyChainAgents;
