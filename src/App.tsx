import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Eye, ThumbsUp, MessageCircle, Share2, Clock, TrendingUp, DollarSign, Users, Mail, Youtube, Instagram, MessageSquare, Target, Zap, Trophy, X, Globe, Calendar, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LazyImage } from './components/LazyImage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useAnimatedCounter } from './hooks/useAnimatedCounter';
import SubtleVideoBackground from './components/SubtleVideoBackground';

// Lazy load components
const ParticlesBackground = lazy(() => import('./components/ParticlesBackground').then(m => ({ default: m.ParticlesBackground })));
const HexagonProfile = lazy(() => import('./components/HexagonProfile').then(m => ({ default: m.HexagonProfile })));
const GamingStatCard = lazy(() => import('./components/GamingStatCard').then(m => ({ default: m.GamingStatCard })));
const CountUp = lazy(() => import('./components/CountUp').then(m => ({ default: m.CountUp })));

// Import images
import profileImg from './Images/profile.png';
import video1Img from './Images/video-1.jpg';
import video2Img from './Images/video-2.png';
import video3Img from './Images/video-3.jpg';
import short1Img from './Images/short-1.jpg';
import short2Img from './Images/short-2.jpg';
import short3Img from './Images/short-3.jpg';
import statsLifetimeImg from './Images/stats-lifetime.jpg';
import statsRecentImg from './Images/stats-recent.jpg';
import demographicsAgeImg from './Images/demographics-age.jpg';
import demographicsGenderImg from './Images/demographics-gender.jpg';
import demographicsGeographyImg from './Images/demographics-geography.jpg';
import viewerActivityImg from './Images/viewer-activity.jpg';

const App = React.memo(() => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  useScrollAnimation();
  
  // Force scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  

  
  const openModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
    setModalTitle('');
  };
  

  
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-3 min-w-[140px]">
              <img src={profileImg} alt="MR ABU" className="w-8 h-8 rounded-full border-2 border-primary/50" />
              <span className="text-white font-bold text-lg">MR ABU</span>
            </div>
            
            {/* Center: Navigation */}
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-primary transition-colors cursor-pointer px-3 py-2">Home</button>
              <button onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-primary transition-colors cursor-pointer px-3 py-2">Stats</button>
              <button onClick={() => document.getElementById('audience')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-primary transition-colors cursor-pointer px-3 py-2">Audience</button>
              <button onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-primary transition-colors cursor-pointer px-3 py-2">Videos</button>
              <button onClick={() => document.getElementById('shorts')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-primary transition-colors cursor-pointer px-3 py-2">Shorts</button>
              <button onClick={() => document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-primary transition-colors cursor-pointer px-3 py-2">Contact</button>
            </div>
            
            {/* Right: Mobile Menu Button */}
            <div className="flex items-center gap-4 min-w-[140px] justify-end">
              <button className="md:hidden text-white hover:text-primary transition-colors" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed top-16 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary/20 md:hidden" style={{ marginTop: '0px' }}>
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <button onClick={() => { document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); setShowMobileMenu(false); }} className="block w-full text-left text-white hover:text-primary transition-colors py-2">Home</button>
              <button onClick={() => { document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' }); setShowMobileMenu(false); }} className="block w-full text-left text-white hover:text-primary transition-colors py-2">Stats</button>
              <button onClick={() => { document.getElementById('audience')?.scrollIntoView({ behavior: 'smooth' }); setShowMobileMenu(false); }} className="block w-full text-left text-white hover:text-primary transition-colors py-2">Audience</button>
              <button onClick={() => { document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' }); setShowMobileMenu(false); }} className="block w-full text-left text-white hover:text-primary transition-colors py-2">Videos</button>
              <button onClick={() => { document.getElementById('shorts')?.scrollIntoView({ behavior: 'smooth' }); setShowMobileMenu(false); }} className="block w-full text-left text-white hover:text-primary transition-colors py-2">Shorts</button>
              <button onClick={() => { document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' }); setShowMobileMenu(false); }} className="block w-full text-left text-white hover:text-primary transition-colors py-2">Contact</button>
            </div>
          </div>
        </div>
      )}
      {/* Animated particles background */}
      <Suspense fallback={<div style={{ display: 'none' }} />}>
        <ParticlesBackground />
      </Suspense>

      {/* Cyber grid background */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 hex-pattern opacity-20 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />


      

      
      <div className="relative z-10">
        {/* ORIGINAL HERO SECTION - BACKUP
        <section id="home" className="relative h-screen flex items-center justify-center px-4 py-16 pt-32">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center space-y-3">
              <div className="flex justify-center animate-fade-in-up mt-8">
                <div className="relative p-4 overflow-hidden">
                  <Suspense fallback={<div className="w-32 h-32 bg-gray-800 rounded-full" style={{ display: 'none' }} />}>
                    <HexagonProfile imageSrc={profileImg} name="MR ABU" size="xl" />
                  </Suspense>
                </div>
              </div>
              <div className="space-y-1 -mt-4">
                <h1 className="text-xl md:text-2xl font-black text-white neon-text tracking-widest" data-text="MR ABU">MR ABU</h1>
                <p className="text-sm md:text-base text-muted-foreground font-medium">Professional Gaming Creator & Free Fire Specialist</p>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto pt-1">Pakistan's leading <span className="text-primary font-semibold">Free Fire content creator</span> with a passion for competitive gaming and entertaining millions of viewers worldwide.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
                <div className="gaming-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black gradient-text font-mono mb-2">
                    <Suspense fallback={<div className="h-8 w-24 rounded" style={{ display: 'none' }} />}>
                      <CountUp end={526863} decimals={0} duration={3500} />
                    </Suspense>
                  </div>
                  <div className="text-primary uppercase tracking-widest text-sm font-bold">Subscribers</div>
                </div>
                <div className="gaming-card p-3 text-center">
                  <div className="text-lg font-bold text-white mb-1">Top Creator</div>
                  <div className="text-xs text-muted-foreground">Pakistan's Leading</div>
                </div>
                <div className="gaming-card p-3 text-center">
                  <div className="text-lg font-bold text-white mb-1">5+ Years</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
                <div className="gaming-card p-3 text-center">
                  <div className="text-lg font-bold text-white mb-1">Gaming</div>
                  <div className="text-xs text-muted-foreground">Expert</div>
                </div>
              </div>
              <div className="pt-4 relative z-20">
                <a href="https://www.youtube.com/@mrabu1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Youtube className="w-5 h-5" />Watch My Content
                </a>
              </div>
            </div>
          </div>
        </section>
        END ORIGINAL */}

        {/* Premium Industry-Leading Hero Section */}
        <section id="home" className="hero-section relative flex items-center justify-center premium-gradient-mesh overflow-hidden">

          <div className="container mx-auto max-w-6xl px-6 relative z-10">
            <motion.div 
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* 3D Floating Profile Card */}
              <div className="flex justify-center mt-8">
                <motion.div 
                  className="floating-profile-card profile-hexagon p-8 rounded-3xl relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Suspense fallback={<div className="w-32 h-32 bg-gray-800 rounded-full" style={{ display: 'none' }} />}>
                    <HexagonProfile
                      imageSrc={profileImg}
                      name="MR ABU"
                      size="xl"
                    />
                  </Suspense>
                </motion.div>
              </div>

              {/* Premium Typography */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-3xl md:text-5xl font-black premium-title tracking-wider">
                  ⚡ MR ABU ⚡
                </h1>
                <p className="text-lg md:text-xl premium-tagline font-semibold">
                  Professional Gaming Creator & Free Fire Specialist
                </p>
                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Pakistan's leading <span className="text-[#FFD700] font-bold">Elite Free Fire</span> content creator with a passion for competitive gaming and entertaining millions of viewers worldwide.
                </p>
              </motion.div>
              
              {/* Premium Stat Cards with Animated Counters */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="premium-stat-card p-6 text-center rounded-2xl min-w-[140px]"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 15px 40px rgba(0,255,255,0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl font-black text-[#00ffff] font-mono mb-2">
                    {useAnimatedCounter(526863, 2500).toLocaleString()}
                  </div>
                  <div className="text-[#00ffff] uppercase tracking-widest text-sm font-bold">
                    Subscribers
                  </div>
                </motion.div>
                
                <motion.div 
                  className="premium-stat-card p-6 text-center rounded-2xl min-w-[140px]"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 15px 40px rgba(255,0,255,0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-white mb-2">{useAnimatedCounter(73800000, 3000).toLocaleString()}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Total Views</div>
                </motion.div>
                
                <motion.div 
                  className="premium-stat-card p-6 text-center rounded-2xl min-w-[140px]"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 15px 40px rgba(139,92,246,0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-white mb-2">{useAnimatedCounter(5, 1500)}+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Years Experience</div>
                </motion.div>
                
                <motion.div 
                  className="premium-stat-card p-6 text-center rounded-2xl min-w-[140px]"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 15px 40px rgba(255,215,0,0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-[#FFD700] mb-2">Elite</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Gaming Expert</div>
                </motion.div>
              </motion.div>
              
              {/* Watch My Content Button */}
              <motion.div 
                className="pt-8 relative z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a 
                  href="https://www.youtube.com/@mrabu1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="watch-content-btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#ec4899] text-white font-bold text-lg rounded-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Youtube className="w-6 h-6" />
                  Watch My Content
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Lifetime Analytics */}
        <section id="stats" className="relative pt-20 pb-16 px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-12 text-center fade-in">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
                <h2 className="relative text-xl md:text-2xl font-black text-white glitch tracking-tight" data-text="LIFETIME STATS">
                  LIFETIME STATS
                </h2>
              </div>
              <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary" />
              <p className="text-xl text-muted-foreground mt-4 font-semibold tracking-wide">
                Complete Channel Analytics
              </p>
            </div>



            {/* Analytics Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Total Views Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:transform hover:translateY(-2px) hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(59, 130, 246, 0.05) 100%)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Total Views</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">73.8M</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">All Time High</span>
                    </div>
                  </div>
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-blue-500/20 w-2 h-2 rounded-sm"></div>
                  <div className="bg-blue-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-blue-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-blue-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-blue-500/60 w-2 h-6 rounded-sm"></div>
                  <div className="bg-blue-500/70 w-2 h-7 rounded-sm"></div>
                  <div className="bg-blue-500/80 w-2 h-8 rounded-sm"></div>
                </div>
              </div>

              {/* Total Likes Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:transform hover:translateY(-2px) hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(236, 72, 153, 0.05) 100%)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Total Likes</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">4.3M</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">High Engagement</span>
                    </div>
                  </div>
                  <ThumbsUp className="w-6 h-6 text-pink-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-pink-500/20 w-2 h-3 rounded-sm"></div>
                  <div className="bg-pink-500/30 w-2 h-4 rounded-sm"></div>
                  <div className="bg-pink-500/40 w-2 h-5 rounded-sm"></div>
                  <div className="bg-pink-500/50 w-2 h-6 rounded-sm"></div>
                  <div className="bg-pink-500/60 w-2 h-7 rounded-sm"></div>
                  <div className="bg-pink-500/70 w-2 h-8 rounded-sm"></div>
                  <div className="bg-pink-500/60 w-2 h-6 rounded-sm"></div>
                </div>
              </div>

              {/* Total Comments Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:transform hover:translateY(-2px) hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(168, 85, 247, 0.05) 100%)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Total Comments</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">278.6K</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">Active Community</span>
                    </div>
                  </div>
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-purple-500/30 w-2 h-4 rounded-sm"></div>
                  <div className="bg-purple-500/40 w-2 h-5 rounded-sm"></div>
                  <div className="bg-purple-500/50 w-2 h-6 rounded-sm"></div>
                  <div className="bg-purple-500/60 w-2 h-7 rounded-sm"></div>
                  <div className="bg-purple-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-purple-500/70 w-2 h-8 rounded-sm"></div>
                  <div className="bg-purple-500/60 w-2 h-6 rounded-sm"></div>
                </div>
              </div>

              {/* Total Shares Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:transform hover:translateY(-2px) hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(34, 197, 94, 0.05) 100%)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Total Shares</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">114.8K</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">High Viral Rate</span>
                    </div>
                  </div>
                  <Share2 className="w-6 h-6 text-green-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-green-500/20 w-2 h-2 rounded-sm"></div>
                  <div className="bg-green-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-green-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-green-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-green-500/60 w-2 h-6 rounded-sm"></div>
                  <div className="bg-green-500/70 w-2 h-7 rounded-sm"></div>
                  <div className="bg-green-500/80 w-2 h-8 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* View Official Analytics Button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => openModal(statsLifetimeImg, 'Official Lifetime Analytics from YouTube Studio')}
                className="group relative px-8 py-4 bg-black/60 border border-primary/30 rounded-xl text-white font-bold text-lg hover:border-primary/70 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 flex items-center gap-3 mx-auto overflow-hidden"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  YouTube Studio
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="absolute inset-0 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Recent Performance - 28 Days */}
        <section className="relative py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
                <h2 className="relative text-xl md:text-2xl font-black text-white glitch tracking-tight" data-text="RECENT PERFORMANCE">
                  RECENT PERFORMANCE
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mt-2 font-medium">
                Track Your Growth
              </p>
              
              {/* Time Period Tabs */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 font-medium hover:bg-gray-600 transition-all duration-300">
                  7 DAYS
                </button>
                <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 font-medium hover:bg-gray-600 transition-all duration-300">
                  14 DAYS
                </button>
                <button className="px-4 py-2 bg-primary/30 border-2 border-primary/70 rounded-md text-primary font-bold font-mono backdrop-blur-sm shadow-lg shadow-primary/20">
                  28 DAYS
                </button>
                <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 font-medium hover:bg-gray-600 transition-all duration-300">
                  90 DAYS
                </button>
              </div>
              
              <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-secondary to-primary" />
            </div>



            {/* Analytics Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Views Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(59, 130, 246, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Views</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">1.3M</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-red-400 text-sm font-medium">-3.2% ↓</span>
                    </div>
                  </div>
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-blue-500/30 w-2 h-4 rounded-sm"></div>
                  <div className="bg-blue-500/50 w-2 h-6 rounded-sm"></div>
                  <div className="bg-blue-500/40 w-2 h-3 rounded-sm"></div>
                  <div className="bg-blue-500/60 w-2 h-7 rounded-sm"></div>
                  <div className="bg-blue-500/30 w-2 h-2 rounded-sm"></div>
                  <div className="bg-blue-500/70 w-2 h-8 rounded-sm"></div>
                  <div className="bg-blue-500/50 w-2 h-5 rounded-sm"></div>
                </div>
              </div>

              {/* Watch Time Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(168, 85, 247, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Watch Time</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">64.4K</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">+12.5% ↑</span>
                    </div>
                  </div>
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-purple-500/40 w-2 h-5 rounded-sm"></div>
                  <div className="bg-purple-500/60 w-2 h-7 rounded-sm"></div>
                  <div className="bg-purple-500/50 w-2 h-4 rounded-sm"></div>
                  <div className="bg-purple-500/70 w-2 h-8 rounded-sm"></div>
                  <div className="bg-purple-500/40 w-2 h-3 rounded-sm"></div>
                  <div className="bg-purple-500/80 w-2 h-8 rounded-sm"></div>
                  <div className="bg-purple-500/60 w-2 h-6 rounded-sm"></div>
                </div>
              </div>

              {/* Subscribers Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(236, 72, 153, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Subscribers</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">+4.6K</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">+8.7% ↑</span>
                    </div>
                  </div>
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-pink-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-pink-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-pink-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-pink-500/60 w-2 h-6 rounded-sm"></div>
                  <div className="bg-pink-500/70 w-2 h-7 rounded-sm"></div>
                  <div className="bg-pink-500/80 w-2 h-8 rounded-sm"></div>
                  <div className="bg-pink-500/60 w-2 h-6 rounded-sm"></div>
                </div>
              </div>

              {/* Revenue Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(34, 197, 94, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Revenue</p>
                    <p className="text-xl md:text-2xl font-bold text-white mt-1">US$105.90</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">+15.3% ↑</span>
                    </div>
                  </div>
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-green-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-green-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-green-500/60 w-2 h-6 rounded-sm"></div>
                  <div className="bg-green-500/70 w-2 h-7 rounded-sm"></div>
                  <div className="bg-green-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-green-500/80 w-2 h-8 rounded-sm"></div>
                  <div className="bg-green-500/60 w-2 h-6 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* View Official Analytics Button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => openModal(statsRecentImg, 'Official Recent Performance from YouTube Studio')}
                className="group relative px-8 py-4 bg-black/60 border border-secondary/30 rounded-xl text-white font-bold text-lg hover:border-secondary/70 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-500 flex items-center gap-3 mx-auto overflow-hidden"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  YouTube Studio
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="absolute inset-0 border border-secondary/50 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Audience Demographics */}
        <section id="audience" className="relative py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
                <h2 className="relative text-xl md:text-2xl font-black text-white glitch tracking-tight" data-text="AUDIENCE INTEL">
                  AUDIENCE INTEL
                </h2>
              </div>
              <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-muted-foreground mt-4 font-medium">
                Understanding Who Watches Your Content
              </p>
            </div>



            {/* Analytics Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Age Demographics Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(59, 130, 246, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Top Age Group</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-1">18-24</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">42.3% of audience</span>
                    </div>
                  </div>
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-blue-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-blue-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-blue-500/80 w-2 h-8 rounded-sm"></div>
                  <div className="bg-blue-500/60 w-2 h-6 rounded-sm"></div>
                  <div className="bg-blue-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-blue-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-blue-500/20 w-2 h-2 rounded-sm"></div>
                </div>
              </div>

              {/* Gender Demographics Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(236, 72, 153, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Gender Split</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-1">82% M</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">18% Female</span>
                    </div>
                  </div>
                  <Target className="w-6 h-6 text-pink-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-pink-500/80 w-3 h-8 rounded-sm"></div>
                  <div className="bg-pink-500/80 w-3 h-8 rounded-sm"></div>
                  <div className="bg-pink-500/80 w-3 h-8 rounded-sm"></div>
                  <div className="bg-pink-500/40 w-3 h-4 rounded-sm"></div>
                  <div className="bg-pink-500/40 w-3 h-4 rounded-sm"></div>
                </div>
              </div>

              {/* Geographic Demographics Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(168, 85, 247, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Top Country</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-1">Pakistan</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">73.9% of views</span>
                    </div>
                  </div>
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-purple-500/80 w-2 h-8 rounded-sm"></div>
                  <div className="bg-purple-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-purple-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-purple-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-purple-500/25 w-2 h-2 rounded-sm"></div>
                  <div className="bg-purple-500/20 w-2 h-2 rounded-sm"></div>
                  <div className="bg-purple-500/15 w-2 h-1 rounded-sm"></div>
                </div>
              </div>

              {/* Viewer Activity Card */}
              <div className="group bg-[#2d2d2d] border border-primary/25 rounded-xl p-6 shadow-xl hover:border-primary/50 hover:scale-102 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, rgba(34, 197, 94, 0.05) 100%)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">Peak Time</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-1">8-10 PM</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-green-400 text-sm font-medium">IST Daily Peak</span>
                    </div>
                  </div>
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="bg-green-500/30 w-2 h-3 rounded-sm"></div>
                  <div className="bg-green-500/40 w-2 h-4 rounded-sm"></div>
                  <div className="bg-green-500/50 w-2 h-5 rounded-sm"></div>
                  <div className="bg-green-500/70 w-2 h-7 rounded-sm"></div>
                  <div className="bg-green-500/80 w-2 h-8 rounded-sm"></div>
                  <div className="bg-green-500/70 w-2 h-7 rounded-sm"></div>
                  <div className="bg-green-500/40 w-2 h-4 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* View Official Analytics Button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => openModal('demographics-all', 'Official Audience Demographics from YouTube Studio')}
                className="group relative px-8 py-4 bg-black/60 border border-primary/30 rounded-xl text-white font-bold text-lg hover:border-primary/70 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 flex items-center gap-3 mx-auto overflow-hidden"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  YouTube Studio
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="absolute inset-0 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Top Performing Videos */}
        <section id="videos" className="relative py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
                <h2 className="relative text-xl md:text-2xl font-black text-white glitch tracking-tight" data-text="TOP VIDEOS">
                  TOP VIDEOS
                </h2>
              </div>
              <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary" />
              <p className="text-xl text-muted-foreground mt-4 font-semibold tracking-wide">
                Most viewed content that drove millions of views
              </p>
              <div className="text-right mt-8">
                <a href="https://www.youtube.com/@mrabu1/videos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  View All
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="https://youtu.be/VOHp_rtYVRs?si=WjbntmTlmJmx9xOC" target="_blank" rel="noopener noreferrer" className="group relative bg-black/60 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={video1Img} alt="Video thumbnail" className="w-full h-full object-cover" />
                  

                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-white font-semibold">Watch on YouTube</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg line-clamp-2 mb-3">
                    99.97% Headshot Challenge in 7 Days | Free Fire
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-white font-medium text-lg">1.5M views</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>1 year ago</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.60L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>75K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>3.2K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              
              <a href="https://youtu.be/v_1Z__dmfe4?si=u6O-orUbgFVriJeo" target="_blank" rel="noopener noreferrer" className="group relative bg-black/60 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={video2Img} alt="Video thumbnail" className="w-full h-full object-cover" />
                  

                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-white font-semibold">Watch on YouTube</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg line-clamp-2 mb-3">
                    ADITECH vs MR ABU | Epic 1v1 Battle | Who Wins?
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-white font-medium text-lg">1.0M views</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>4 years ago</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>67K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>4.0K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              
              <a href="https://youtu.be/SvB4CzNKgPk?si=1oPUEgRJZULt-xJ7" target="_blank" rel="noopener noreferrer" className="group relative bg-black/60 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={video3Img} alt="Video thumbnail" className="w-full h-full object-cover" />
                  

                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-white font-semibold">Watch on YouTube</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg line-clamp-2 mb-3">
                    MR ABU vs TUFAN | Ultimate Gaming Showdown
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-white font-medium text-lg">899K views</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>1 month ago</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.60L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>32K</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>1.4K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Viral Shorts */}
        <section id="shorts" className="relative py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
                <h2 className="relative text-xl md:text-2xl font-black text-white glitch tracking-tight" data-text="VIRAL SHORTS">
                  VIRAL SHORTS
                </h2>
              </div>
              <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary" />
              <p className="text-xl text-muted-foreground mt-4 font-semibold tracking-wide">
                Short-form content that broke the algorithm
              </p>
            </div>
            
            {/* View All Shorts Button */}
            <div className="text-right mb-8">
              <a href="https://www.youtube.com/@mrabu1/shorts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                View All
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a href="https://youtube.com/shorts/178gscrIpRc?si=ZLT2OcK-" target="_blank" rel="noopener noreferrer" className="group relative aspect-[9/16] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:rotate-1" style={{ border: '2px solid', borderImage: 'linear-gradient(135deg, #a855f7, #ec4899) 1' }}>
                <img src={short1Img} alt="Viral Short" className="w-full h-full object-cover" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* View Count */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">9.8M</span>
                      <span className="text-lg animate-bounce">🔥</span>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-2 py-1 rounded text-white text-xs font-bold animate-pulse">
                      SHORT
                    </div>
                  </div>
                  
                  {/* Reaction Stats */}
                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <span>😂 234K</span>
                    <span>❤️ 567K</span>
                    <span>🔥 123K</span>
                  </div>
                </div>
              </a>
              
              <a href="https://youtube.com/shorts/C8R3HjEMbiE?si=p_wHKkcEe60v4ey6" target="_blank" rel="noopener noreferrer" className="group relative aspect-[9/16] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:rotate-1" style={{ border: '2px solid', borderImage: 'linear-gradient(135deg, #a855f7, #ec4899) 1' }}>
                <img src={short2Img} alt="Viral Short" className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5.7M</span>
                      <span className="text-lg">⬆️</span>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-2 py-1 rounded text-white text-xs font-bold animate-pulse">
                      SHORT
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <span>😂 189K</span>
                    <span>❤️ 423K</span>
                    <span>🔥 98K</span>
                  </div>
                </div>
              </a>
              
              <a href="https://youtube.com/shorts/178gscrIpRc?si=jlkG5X-k4x8EZn9S" target="_blank" rel="noopener noreferrer" className="group relative aspect-[9/16] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 hover:rotate-1" style={{ border: '2px solid', borderImage: 'linear-gradient(135deg, #a855f7, #ec4899) 1' }}>
                <img src={short3Img} alt="Viral Short" className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3.9M</span>
                      <span className="text-lg">⬆️</span>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-2 py-1 rounded text-white text-xs font-bold animate-pulse">
                      SHORT
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <span>😂 156K</span>
                    <span>❤️ 298K</span>
                    <span>🔥 87K</span>
                  </div>
                </div>
              </a>
            </div>
            
            {/* View All Shorts Button */}

          </div>
        </section>

        {/* Contact CTA */}
        <section id="collaborate" className="relative py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="gaming-card p-12 text-center space-y-8 scanline">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-white glitch" data-text="LET'S COLLABORATE">
                  LET'S COLLABORATE
                </h2>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary" />
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Open for brand partnerships, sponsorships, and gaming collaborations
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                <div className="group relative">
                  <a
                    href="mailto:btumer83@gmail.com?subject=Business Collaboration Inquiry&body=Hi MR ABU,%0D%0A%0D%0AI would like to discuss a potential collaboration opportunity.%0D%0A%0D%0ABest regards"
                    className="block p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-110" 
                    style={{ 
                      background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <div className="space-y-4">
                      <Mail className="w-12 h-12 text-white mx-auto" />
                      <div className="text-white">
                        <div className="font-bold text-lg">Gmail</div>
                        <div className="text-sm opacity-90">btumer83@gmail.com</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <span className="text-white font-semibold">Click to Connect</span>
                    </div>
                  </a>
                </div>

                <div className="group relative">
                  <button
                    onClick={() => {
                      const phoneDiv = document.getElementById('phone-number');
                      const clickText = document.getElementById('click-text');
                      if (phoneDiv && clickText) {
                        phoneDiv.style.display = phoneDiv.style.display === 'none' ? 'block' : 'none';
                        clickText.style.display = clickText.style.display === 'none' ? 'flex' : 'none';
                      }
                    }}
                    className="block w-full p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-110" 
                    style={{ 
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <div className="space-y-4">
                      <svg className="w-12 h-12 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="text-white">
                        <div className="font-bold text-lg">Phone</div>
                        <div id="phone-number" className="text-sm opacity-90" style={{ display: 'none' }}>0335 600 5422</div>
                        <div id="click-text" className="flex items-center gap-1 mt-2 text-xs opacity-75">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                          <span>Click for personal details</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <span className="text-white font-semibold">Click to Reveal</span>
                    </div>
                  </button>
                </div>

                <div className="group relative">
                  <a
                    href="https://www.instagram.com/abubakar_mrabu/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-110" 
                    style={{ 
                      background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                      boxShadow: '0 10px 30px rgba(131, 58, 180, 0.3)'
                    }}
                  >
                    <div className="space-y-4">
                      <Instagram className="w-12 h-12 text-white mx-auto" />
                      <div className="text-white">
                        <div className="font-bold text-lg">Instagram</div>
                        <div className="text-sm opacity-90">@mrabu • 45K followers</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                      <span className="text-white font-semibold">Click to Connect</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="mt-16 p-6 md:p-10 bg-gray-800/60 border-2 border-purple-500/30 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-blue-500" />
                    <div>
                      <div className="text-white font-bold text-xl">24-48h</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <div>
                      <div className="text-white font-bold text-xl">Premium</div>
                      <div className="text-sm text-muted-foreground">Content Quality</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-green-500" />
                    <div>
                      <div className="text-white font-bold text-xl">Pakistan</div>
                      <div className="text-sm text-muted-foreground">Primary Market</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-purple-500" />
                    <div>
                      <div className="text-white font-bold text-xl">Gaming</div>
                      <div className="text-sm text-muted-foreground">Niche Expert</div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  <span className="text-white font-bold">Professional gaming creator</span> with <span className="text-white font-bold">proven track record</span> of engaging{' '}
                  <span className="text-primary font-bold">millions of viewers</span>. Ready to take your brand to the next level.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                © 2025 MR ABU. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Modal for Official Analytics */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold text-lg">{modalTitle}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
              {modalImage === 'demographics-all' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Age Demographics</h4>
                    <img src={demographicsAgeImg} alt="Age Demographics" className="w-full h-auto rounded-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Gender Demographics</h4>
                    <img src={demographicsGenderImg} alt="Gender Demographics" className="w-full h-auto rounded-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Geographic Demographics</h4>
                    <img src={demographicsGeographyImg} alt="Geographic Demographics" className="w-full h-auto rounded-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Viewer Activity</h4>
                    <img src={viewerActivityImg} alt="Viewer Activity" className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              ) : (
                <img 
                  src={modalImage} 
                  alt={modalTitle}
                  className="w-full h-auto rounded-lg"
                />
              )}
              <p className="text-gray-400 text-sm mt-4 text-center">
                Official analytics screenshot from MR ABU's YouTube Studio dashboard
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;
