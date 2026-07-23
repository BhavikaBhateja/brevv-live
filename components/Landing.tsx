"use client";

/* Auto-converted from the static index.html — the brevv landing markup. */
export default function Landing() {
  return (
    <>
      <div className="sui-hero-container w-full min-h-screen flex flex-col">
          
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <video id="hero-bg-video"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-0 transition-opacity duration-1000 ease-in-out hero-video-cinematic"
              autoPlay loop muted playsInline>
              <source data-src="/assets/videos/hero section video.mp4" type="video/mp4" />
            </video>
          </div>
      
          <div id="hero-loader-container" className="hero-loader-container">
            <div id="hero-loader-bar" className="hero-loader-bar"></div>
          </div>
          <div className="hero-gate hero-gate-top"></div>
          <div className="hero-gate hero-gate-bottom"></div>
          <div className="hero-gate-heading-container">
            <div className="hero-gate-main-title">The Future of Learning, Architected for Today.</div>
          </div>
      
          <nav className="relative z-20 w-full py-5 font-body bg-transparent">
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto w-full">
              
              <a href="#" className="flex items-center cursor-pointer z-30" id="logo-link">
                <img src="/assets/images/logo.png" alt="brevv" style={{ height: '32px', display: 'block' }} />
              </a>
      
              <div className="hidden md:flex items-center gap-7">
      
                <div className="relative group">
                  <button
                    className="text-sm text-white/80 group-hover:text-white transition-colors font-medium flex items-center gap-1 cursor-pointer bg-transparent border-none">
                    Features
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-40">
                    <div className="bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-black/5">
                      <a href="#why-choose"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">AI
                        Course Builder</a>
                      <a href="#why-choose"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Verified
                        Credentials</a>
                      <a href="#why-choose"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Skill
                        Gap Analysis</a>
                      <a href="#why-choose"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Live
                        Learning</a>
                      <a href="#why-choose"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Proctored
                        Assessments</a>
                    </div>
                  </div>
                </div>
      
                <div className="relative group">
                  <button
                    className="text-sm text-white/80 group-hover:text-white transition-colors font-medium flex items-center gap-1 cursor-pointer bg-transparent border-none">
                    Solutions
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-40">
                    <div className="bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-black/5">
                      <a href="#scale-performance"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Higher
                        Education</a>
                      <a href="#scale-performance"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Corporate
                        L&amp;D</a>
                      <a href="#scale-performance"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Vocational
                        &amp; K-12</a>
                    </div>
                  </div>
                </div>
      
                <div className="relative group">
                  <button
                    className="text-sm text-white/80 group-hover:text-white transition-colors font-medium flex items-center gap-1 cursor-pointer bg-transparent border-none">
                    Resources
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-40">
                    <div className="bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-black/5">
                      <a href="#about"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">About
                        Brevv</a>
                      <a href="#about"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">The
                        Foundary DNA</a>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Documentation</a>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] transition-colors">Support
                        Center</a>
                    </div>
                  </div>
                </div>
      
              </div>
      
              <div className="flex items-center gap-4">
                <a href="#"
                  className="nav-login-btn hidden sm:inline-block px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer">
                  Login
                </a>
                <a href="#cta"
                  className="nav-trial-btn rounded-full px-5 py-2 text-sm font-medium bg-white text-black transition-all shadow-sm cursor-pointer">
                  Start Free Trial
                </a>
      
                <button id="mobile-menu-toggle"
                  className="md:hidden flex items-center justify-center p-2 text-white z-30 focus:outline-none cursor-pointer"
                  aria-label="Toggle Menu">
                  <i data-lucide="menu" className="w-6 h-6"></i>
                </button>
              </div>
            </div>
      
            <div id="mobile-menu-drawer"
              className="fixed inset-0 bg-black/95 z-25 flex flex-col items-center justify-center gap-7 md:hidden transition-all duration-300 transform translate-x-full overflow-y-auto py-16">
              <div className="text-center">
                <span className="text-white/40 text-xs uppercase tracking-widest">Features</span>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a href="#why-choose"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">AI
                    Course Builder</a>
                  <a href="#why-choose"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Verified
                    Credentials</a>
                  <a href="#why-choose"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Skill
                    Gap Analysis</a>
                  <a href="#why-choose"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Live
                    Learning</a>
                  <a href="#why-choose"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Proctored
                    Assessments</a>
                </div>
              </div>
              <div className="text-center">
                <span className="text-white/40 text-xs uppercase tracking-widest">Solutions</span>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a href="#scale-performance"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Higher
                    Education</a>
                  <a href="#scale-performance"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Corporate
                    L&amp;D</a>
                  <a href="#scale-performance"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Vocational
                    &amp; K-12</a>
                </div>
              </div>
              <div className="text-center">
                <span className="text-white/40 text-xs uppercase tracking-widest">Resources</span>
                <div className="mt-3 flex flex-col gap-2.5">
                  <a href="#about"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">About
                    Brevv</a>
                  <a href="#about"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">The
                    Foundary DNA</a>
                  <a href="#"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Documentation</a>
                  <a href="#"
                    className="mobile-nav-link text-lg text-white/80 hover:text-white transition-colors font-medium cursor-pointer">Support
                    Center</a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 mt-2">
                <a href="#"
                  className="mobile-nav-link text-white/70 text-base font-medium cursor-pointer">Login</a>
                <a href="#cta"
                  className="mobile-nav-link px-7 py-3 bg-white text-black text-sm font-bold rounded-full cursor-pointer">Start
                  Free Trial</a>
              </div>
            </div>
          </nav>
      
          <section
            className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-4 text-center overflow-hidden pb-12"
            style={{ paddingTop: '140px' }}>
      
          </section>
        </div>
      
        <section className="ecosystem-section" id="ecosystem">
          <div className="ecosystem-glow ecosystem-glow-1"></div>
          <div className="ecosystem-glow ecosystem-glow-2"></div>
      
          <div className="container ecosystem-inner">
            <span className="ecosystem-tag">The Ecosystem</span>
            <h2 className="ecosystem-title">Moving Beyond the LMS: <br /><span
                className="ecosystem-title-accent animate-text-gradient">A Next-Generation LXP.</span></h2>
            <p className="ecosystem-lead">Traditional LMS platforms act as static filing cabinets for content. <strong>Brevv is a
                dynamic Learning Experience Platform (LXP)</strong>, an active partner throughout the learning journey.</p>
            <p className="ecosystem-lead ecosystem-lead-2">While a standard LMS focuses on administration, Brevv is built around
              the learner. Powered by <span className="eco-hl">Generative AI</span>, <span className="eco-hl">live collaboration</span>,
              and <span className="eco-hl">blockchain security</span>, it bridges the gap between digital learning and verified
              career success.</p>
          </div>
        </section>
      
        <section className="trust-badges" id="partners" style={{ backgroundColor: '#FAF9F5' }}>
          <div className="container">
            
            <div style={{ marginBottom: '4rem' }}>
              <span className="section-tag core-anim-tag" style={{ color: 'var(--primary-color)' }}>Core Foundations</span>
              <h2 className="core-anim-title"
                style={{ fontSize: 'clamp(1.9rem, 6vw, 2.8rem)', fontWeight: '800', color: '#111827', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                Built for Intelligence and Trust.</h2>
              <p className="core-anim-sub" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>The Brevv
                architecture is defined by three fundamental principles:</p>
            </div>
      
            <div className="triple-core-grid">
              
              <div className="core-card core-card-bounce">
                <div className="core-card-icon"
                  style={{ background: 'none', width: 'auto', height: 'auto', marginBottom: '1.25rem', display: 'flex', justifyContent: 'flex-start' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008CFF" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path
                      d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z">
                    </path>
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'flex-start', gap: '0.1rem', lineHeight: '1.3' }}>
                  01 | Generative Intelligence</h3>
                <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong>Stop
                    building from scratch.</strong> Why spend months on a syllabus? Use Brevv AI to transform raw PDFs, videos,
                  or curricula into structured, interactive learning paths tailored to how each student actually learns.</p>
              </div>
      
              <div className="core-card core-card-bounce">
                <div className="core-card-icon"
                  style={{ background: 'none', width: 'auto', height: 'auto', marginBottom: '1.25rem', display: 'flex', justifyContent: 'flex-start' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008CFF" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'flex-start', gap: '0.1rem', lineHeight: '1.3' }}>
                  02 | Immutable Veracity</h3>
                <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong>Move
                    beyond paper.</strong> In a world of deepfakes and fraud, trust is everything. We issue secure,
                  blockchain-backed digital credentials that give your learners a permanent, unhackable edge in the global job
                  market.</p>
              </div>
      
              <div className="core-card core-card-bounce">
                <div className="core-card-icon"
                  style={{ background: 'none', width: 'auto', height: 'auto', marginBottom: '1.25rem', display: 'flex', justifyContent: 'flex-start' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008CFF" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0F172A', display: 'flex', alignItems: 'flex-start', gap: '0.1rem', lineHeight: '1.3' }}>
                  03 | Unified Connectivity</h3>
                <p style={{ marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-muted)', fontSize: '0.95rem' }}><strong>Eliminate
                    tool fatigue.</strong> Stop jumping between Zoom, Moodle, and WhatsApp. Brevv brings live sessions, course
                  management, skill mapping, and community engagement into one single, beautiful command center.</p>
              </div>
            </div>
          </div>
        </section>
      
        <section className="product-suite-section" id="why-choose" style={{ paddingTop: '4rem' }}>
          <div className="container">
            <div className="suite-pin-wrap">
            
            <div className="suite-split-header">
              <div className="suite-header-left">
                <span className="section-tag" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>The All-In-One Suite</span>
                <h2 className="about-title font-bold" style={{ margin: '0', lineHeight: '1.15', fontSize: 'clamp(1.9rem, 6vw, 3rem)', fontWeight: '850' }}>
                  Replace Complexity<br />with Clarity.</h2>
              </div>
              <div className="suite-header-right">
                <p className="suite-header-desc">Disconnected tools often lead to data silos and technical friction. Brevv simplifies your infrastructure by consolidating essential learning tools into a unified "Bento-box" ecosystem. Every module is built for harmony, ensuring information flows seamlessly across your entire organization</p>
              </div>
            </div>
      
            <div className="suite-tabs-wrapper desktop-only">
              <ul className="suite-tabs-pill">
                <li className="suite-tab-item"><button className="suite-tab-btn-pill active"
                    data-suite-tab="suite-community">Course Creation</button></li>
                <li className="suite-tab-item"><button className="suite-tab-btn-pill" data-suite-tab="suite-courses">Learner
                    Intelligence</button>
                </li>
                <li className="suite-tab-item"><button className="suite-tab-btn-pill" data-suite-tab="suite-events">Skill
                    Mapping</button>
                </li>
                <li className="suite-tab-item"><button className="suite-tab-btn-pill"
                    data-suite-tab="suite-members">Credentials</button>
                </li>
              </ul>
            </div>
      
            <div className="suite-select-wrapper mobile-only-select-wrapper">
              <select id="suite-tab-select" className="suite-tab-select-input">
                <option value="suite-community" selected>Course Creation</option>
                <option value="suite-courses">Learner Intelligence</option>
                <option value="suite-events">Skill Mapping</option>
                <option value="suite-members">Credentials</option>
              </select>
            </div>
      
            <div className="relative w-full z-10">
              
              <div
                className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full bg-sky-400/35 blur-[100px] pointer-events-none z-0">
              </div>
              <div
                className="absolute -bottom-24 -right-20 w-[500px] h-[500px] rounded-full bg-violet-400/30 blur-[120px] pointer-events-none z-0">
              </div>
      
              <div className="mockup-browser-window relative z-10">
                
                <div className="browser-window-header">
                  <div className="window-controls">
                    <span className="control-dot close"></span>
                    <span className="control-dot minimize"></span>
                    <span className="control-dot maximize"></span>
                  </div>
                  <div className="browser-address-bar">
                    <span>https://brevv.org</span>
                  </div>
                </div>
      
                <div className="suite-content-stage">
                
                <div className="suite-content-new active" id="suite-community">
                  <div className="suite-grid-new">
                    <div className="suite-text-panel">
                      <span className="suite-pill-new">Efficiency in Minutes</span>
                      <h3>AI-Powered Course Creation</h3>
                      <p>Transition from raw concepts to complete courses instantly. By uploading a document, curriculum, or
                        topic, our AI generates structured modules, interactive quizzes, and concise summaries, reducing
                        development time by up to 60%.</p>
                    </div>
                    <div className="suite-visual-panel">
                      <img src="/assets/images/lms_how_create.png" alt="AI-Powered Course Creation" />
                    </div>
                  </div>
                </div>
      
                <div className="suite-content-new" id="suite-courses">
                  <div className="suite-grid-new">
                    <div className="suite-text-panel">
                      <span className="suite-pill-new">Data with Direction</span>
                      <h3>Real-Time Learner Intelligence</h3>
                      <p>Move beyond basic "completion rates." Access deep-dive analytics that track actual engagement and
                        mastery, allowing you to understand how learners interact with your content.</p>
                    </div>
                    <div className="suite-visual-panel">
                      <img src="/assets/images/lms_how_track.png" alt="Real-Time Learner Intelligence" />
                    </div>
                  </div>
                </div>
      
                <div className="suite-content-new" id="suite-events">
                  <div className="suite-grid-new">
                    <div className="suite-text-panel">
                      <span className="suite-pill-new">Closing the Gap</span>
                      <h3>Precision Skill Mapping</h3>
                      <p>Identify exactly where a learner is struggling. Our platform detects knowledge gaps in real-time and
                        provides AI-driven remedies to help individuals reach their goals before they fall behind.</p>
                    </div>
                    <div className="suite-visual-panel">
                      <img src="/assets/images/lms_how_improve.png" alt="Precision Skill Mapping" />
                    </div>
                  </div>
                </div>
      
                <div className="suite-content-new" id="suite-members">
                  <div className="suite-grid-new">
                    <div className="suite-text-panel">
                      <span className="suite-pill-new">Authority in Every Record</span>
                      <h3>Verified Digital Credentials</h3>
                      <p>Issue secure, shareable, and instantly verifiable digital certificates. By using blockchain
                        technology, we ensure that your graduates possess a tamper-proof record of achievement that is
                        recognized globally.</p>
                    </div>
                    <div className="suite-visual-panel">
                      <img src="/assets/images/lms_how_deliver.png" alt="Verified Digital Credentials" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      
        <section className="comparison-section" id="comparison">
          <div className="container">
            
            <div className="edge-header">
              <span className="comp-anim-tag edge-tag">The Competitive Edge</span>
              <h2 className="comp-anim-heading edge-title">Built for Scale. <span className="edge-title-accent">Designed for
                  Simplicity.</span></h2>
              <p className="comp-anim-sub edge-subtitle">As education and job requirements change, the tools we use to learn must
                change too. Brevv offers a modern approach to learning by fixing the common problems found in older,
                traditional systems.</p>
            </div>
      
            <div className="comparison-table-wrapper edge-table">
              
              <div className="edge-row edge-head-row">
                <div className="edge-col-feature edge-head-cell">Feature</div>
                <div className="edge-col edge-head-cell edge-brevv-head">The Brevv Way</div>
                <div className="edge-col edge-head-cell">The Old Way</div>
              </div>
      
              <div className="edge-row">
                <div className="edge-col-feature">
                  <i data-lucide="pen-tool" className="edge-feature-icon"></i>
                  <span>Creating Courses</span>
                </div>
                <div className="edge-col edge-brevv" data-label="The Brevv Way">
                  <span className="edge-lead">
                    <svg className="edge-mark check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    AI-Assisted and Fast.
                  </span>
                  <p>Upload your notes or videos, and the Brevv AI builds the lessons and quizzes for you in minutes.</p>
                </div>
                <div className="edge-col edge-trad" data-label="The Old Way">
                  <span className="edge-lead">Manual and Time-Consuming.</span>
                  <p>You have to type and upload everything yourself. It can take weeks to finish one course.</p>
                </div>
              </div>
      
              <div className="edge-row">
                <div className="edge-col-feature">
                  <i data-lucide="route" className="edge-feature-icon"></i>
                  <span>How Students Learn</span>
                </div>
                <div className="edge-col edge-brevv" data-label="The Brevv Way">
                  <span className="edge-lead">
                    <svg className="edge-mark check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalized and Adaptive.
                  </span>
                  <p>The platform sees how a student is doing and gives them extra help or lets them move ahead faster.</p>
                </div>
                <div className="edge-col edge-trad" data-label="The Old Way">
                  <span className="edge-lead">One-Size-Fits-All.</span>
                  <p>Every student follows the exact same path, even if they already know the topic.</p>
                </div>
              </div>
      
              <div className="edge-row">
                <div className="edge-col-feature">
                  <i data-lucide="activity" className="edge-feature-icon"></i>
                  <span>Tracking Progress</span>
                </div>
                <div className="edge-col edge-brevv" data-label="The Brevv Way">
                  <span className="edge-lead">
                    <svg className="edge-mark check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Deep Skill Analysis.
                  </span>
                  <p>The Brevv system shows you exactly which topics a student is struggling with so you can help them.</p>
                </div>
                <div className="edge-col edge-trad" data-label="The Old Way">
                  <span className="edge-lead">Basic Information.</span>
                  <p>Reports only show if a student finished a video. You don't know if they truly "got it."</p>
                </div>
              </div>
      
              <div className="edge-row">
                <div className="edge-col-feature">
                  <i data-lucide="award" className="edge-feature-icon"></i>
                  <span>Certificates</span>
                </div>
                <div className="edge-col edge-brevv" data-label="The Brevv Way">
                  <span className="edge-lead">
                    <svg className="edge-mark check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Official & Safe Records.
                  </span>
                  <p>We use secure technology to make certificates official. They can't be faked and are easy to check.</p>
                </div>
                <div className="edge-col edge-trad" data-label="The Old Way">
                  <span className="edge-lead">Easily Lost or Faked.</span>
                  <p>Basic PDFs are easy to lose or fake. It's hard for bosses to check if they are real.</p>
                </div>
              </div>
      
              <div className="edge-row">
                <div className="edge-col-feature">
                  <i data-lucide="layers" className="edge-feature-icon"></i>
                  <span>The Technology</span>
                </div>
                <div className="edge-col edge-brevv" data-label="The Brevv Way">
                  <span className="edge-lead">
                    <svg className="edge-mark check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    One Unified System.
                  </span>
                  <p>Live classes, exams, and certificates all happen in one app. It's simpler and costs less.</p>
                </div>
                <div className="edge-col edge-trad" data-label="The Old Way">
                  <span className="edge-lead">Many Disconnected Tools.</span>
                  <p>You have to pay for and use different apps for video, tests, and student records.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="solid-direction-section" id="solid-direction">
          <div className="solid-direction-container">
            <div className="solid-direction-sticky">
              <div className="solid-direction-video-wrapper">
                <video src="/assets/videos/13.mp4" loop muted playsInline autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
              </div>
              
              <div className="solid-direction-gate gate-left">
                <div className="gate-text-wrapper text-left">
                  <h2 className="gate-title text-slate-900">Unlock Your</h2>
                </div>
              </div>
              
              <div className="solid-direction-gate gate-right">
                <div className="gate-text-wrapper text-left">
                  <h2 className="gate-title text-blue-500">Smarter Potential</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="new-scale-section" id="scale-performance">
          <div className="scale-container">
            
            <div className="new-scale-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
              <span className="scale-tag-glow">THE SOLUTIONS</span>
              <h2 className="new-scale-title">Your Vision, Our Infrastructure.</h2>
              <p className="new-scale-subtitle">No two organizations learn the same way. Brevv offers a flexible platform that
                adapts to the specific goals and administrative needs of different sectors.</p>
            </div>
      
            <div className="scale-grid-layout">
              
              <div className="scale-premium-card card-blue">
                <div className="card-image-box">
                  <img src="/assets/images/scale_higher_ed.png" alt="Higher Education Platform" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-body-box">
                  <div className="card-meta">
                    <span className="meta-tag">HIGHER EDUCATION</span>
                    <span className="meta-num">01</span>
                  </div>
                  <h3 className="card-heading-title">The Modern Campus</h3>
                  <p className="card-short-desc"><strong>Support Faculty, Engage Students:</strong> Modernize your institutional
                    delivery with a mobile-first experience that Gen-Z expects. Brevv reduces the administrative burden on
                    professors by automating course setup and grading, allowing them to focus more on teaching and
                    mentorship.</p>
                  <a href="#cta" className="card-arrow-link">
                    <span>Explore Higher Education</span>
                    <i data-lucide="arrow-right" className="w-4 h-4 link-arrow"></i>
                  </a>
                </div>
              </div>
      
              <div className="scale-premium-card card-purple">
                <div className="card-image-box">
                  <img src="/assets/images/scale_corporate.png" alt="Corporate L&D Platform" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-body-box">
                  <div className="card-meta">
                    <span className="meta-tag">CORPORATE L&D</span>
                    <span className="meta-num">02</span>
                  </div>
                  <h3 className="card-heading-title">Workforce Intelligence</h3>
                  <p className="card-short-desc"><strong>A Strategic Competitive Advantage:</strong> Transform employee training
                    from a requirement into a growth engine. Build onboarding and upskilling programs that employees find
                    valuable, while measuring success through quantifiable skill growth and clear ROI data.</p>
                  <a href="#cta" className="card-arrow-link">
                    <span>Explore Corporate L&D</span>
                    <i data-lucide="arrow-right" className="w-4 h-4 link-arrow"></i>
                  </a>
                </div>
              </div>
      
              <div className="scale-premium-card card-emerald">
                <div className="card-image-box">
                  <img src="/assets/images/scale_k12.png" alt="K-12 & Vocational Platform" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-body-box">
                  <div className="card-meta">
                    <span className="meta-tag">VOCATIONAL & K-12</span>
                    <span className="meta-num">03</span>
                  </div>
                  <h3 className="card-heading-title">Practical Readiness</h3>
                  <p className="card-short-desc"><strong>Skills for the Real World:</strong> Prepare students for immediate success
                    in the workforce or higher exams. Deliver structured learning pathways that lead directly to industry
                    certification and career placement through secure, proctored assessments.</p>
                  <a href="#cta" className="card-arrow-link">
                    <span>Explore Programs</span>
                    <i data-lucide="arrow-right" className="w-4 h-4 link-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="sector-section" id="pricing">
          <div className="sector-bg-glow sector-bg-glow-1"></div>
          <div className="sector-bg-glow sector-bg-glow-2"></div>
      
          <div className="container">
            <div className="sector-header">
              <span className="sector-tag">Choose Your Sector</span>
              <h2 className="sector-title">Purpose-Built <span className="sector-title-accent animate-text-gradient">Platforms.</span>
              </h2>
              <p className="sector-subtitle">Tailored for your specific community.</p>
            </div>
      
            <div className="sector-grid">
              
              <div className="sector-card sector-card-academic" data-sector-card="left">
                <div className="sector-card-banner">
                  <span className="sector-num">01</span>
                  <span className="sector-icon"><i data-lucide="graduation-cap"></i></span>
                  <h3 className="sector-card-title">Academic Institutions</h3>
                  <p className="sector-card-tagline">Modernize your campus and empower your faculty.</p>
                </div>
                <div className="sector-card-body">
                  <p className="sector-card-desc">Designed specifically for schools and universities, this version of Brevv helps
                    you scale your learning reach while protecting your academic reputation.</p>
                  <ul className="sector-features">
                    <li>
                      <svg className="sector-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span><strong>Empower Faculty:</strong> Use AI to automate course design and grading.</span>
                    </li>
                    <li>
                      <svg className="sector-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span><strong>Engage Students:</strong> Provide a mobile-first, personalized learning journey.</span>
                    </li>
                    <li>
                      <svg className="sector-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span><strong>Secure Success:</strong> Issue blockchain-verified degrees that are globally
                        recognized.</span>
                    </li>
                  </ul>
                  <a href="#cta" className="sector-btn">
                    <span>Explore Academic Solutions</span>
                    <i data-lucide="arrow-right" className="w-4 h-4"></i>
                  </a>
                </div>
              </div>
      
              <div className="sector-card sector-card-enterprise" data-sector-card="right">
                <div className="sector-card-banner">
                  <span className="sector-num">02</span>
                  <span className="sector-icon"><i data-lucide="briefcase"></i></span>
                  <h3 className="sector-card-title">Enterprise Solutions</h3>
                  <p className="sector-card-tagline">Transform employee training into a growth engine.</p>
                </div>
                <div className="sector-card-body">
                  <p className="sector-card-desc">Built for modern businesses, Brevv helps HR and L&amp;D teams turn workforce
                    development into a measurable competitive advantage.</p>
                  <ul className="sector-features">
                    <li>
                      <svg className="sector-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span><strong>Scale Onboarding:</strong> Get new hires up to speed in days, not weeks.</span>
                    </li>
                    <li>
                      <svg className="sector-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span><strong>Track Skill Growth:</strong> Use data to identify talent and close knowledge gaps.</span>
                    </li>
                    <li>
                      <svg className="sector-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span><strong>Ensure Compliance:</strong> Keep verifiable, audit-ready training records in one
                        place.</span>
                    </li>
                  </ul>
                  <a href="#cta" className="sector-btn">
                    <span>Explore Enterprise Solutions</span>
                    <i data-lucide="arrow-right" className="w-4 h-4"></i>
                  </a>
                </div>
              </div>
            </div>
      
            <div className="sector-footer">
              <p className="sector-footer-q">Not sure which path to take?</p>
              <div className="sector-footer-actions">
                <a href="#cta" className="sector-ghost-btn">Talk to a Solutions Expert</a>
                <a href="#cta" className="sector-ghost-btn">Request a Personalized Quote</a>
              </div>
            </div>
          </div>
        </section>
      
        <section className="faq-section" id="faq">
          <div className="pricing-container">
            <div className="faq-grid-container">
              <div className="faq-left-col">
                <div className="faq-title-serif">Questions?</div>
                <div className="faq-title-sub">We're here to help</div>
                <div className="faq-title-underline"></div>
              </div>
      
              <div>
                <div className="faq-list-clean">
                  <div className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">
                        <span className="faq-number">01.</span>
                        <span>How is Brevv different from other platforms?</span>
                      </span>
                      <span className="faq-icon-circle">
                        <svg className="faq-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="3">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>Traditional systems (LMS) are essentially digital storage units; they host files but don't do much
                        else. Brevv is an active participant. We use AI to help you generate content, identify exactly where a
                        learner is struggling, and provide immediate support. We don't just store learning; we help drive it.
                      </p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">
                        <span className="faq-number">02.</span>
                        <span>Is our institutional data safe and private?</span>
                      </span>
                      <span className="faq-icon-circle">
                        <svg className="faq-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="3">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>Data security is our top priority. We are fully compliant with global standards like GDPR and FERPA,
                        as well as India's Digital Personal Data Protection (DPDP) Act. We use high-level encryption to ensure
                        that your data is private, secure, and belongs only to you.</p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">
                        <span className="faq-number">03.</span>
                        <span>Can we move our existing courses and students to Brevv?</span>
                      </span>
                      <span className="faq-icon-circle">
                        <svg className="faq-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="3">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>Yes, and we make it easy. We offer a "White-Glove" migration service, meaning our team handles the
                        heavy lifting. We can move your data from Moodle, Canvas, Blackboard, or D2L seamlessly, ensuring you
                        don't lose any progress or records during the switch.</p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">
                        <span className="faq-number">04.</span>
                        <span>What exactly is a "Blockchain-Verified Credential"?</span>
                      </span>
                      <span className="faq-icon-circle">
                        <svg className="faq-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="3">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>Think of it as a digital certificate with a permanent, unhackable fingerprint. Unlike a PDF that can
                        be edited or faked, our certificates are stored on a secure digital ledger. This allows employers to
                        verify a student's skills instantly without needing to call your office for confirmation.</p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">
                        <span className="faq-number">05.</span>
                        <span>Does Brevv work on mobile devices or slow internet?</span>
                      </span>
                      <span className="faq-icon-circle">
                        <svg className="faq-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="3">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>Yes. We built Brevv to be mobile-first. It is designed to work smoothly on smartphones and can handle
                        low-bandwidth (slow internet) situations, making it accessible for learners no matter where they are
                        located.</p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <button className="faq-question">
                      <span className="faq-question-text">
                        <span className="faq-number">06.</span>
                        <span>Do we need to be tech experts to manage the platform?</span>
                      </span>
                      <span className="faq-icon-circle">
                        <svg className="faq-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="3">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <div className="faq-answer">
                      <p>Not at all. We designed Brevv to be as simple as using your favorite social media app. Our dashboard
                        is clean and intuitive, and we provide full training and support to make sure your team feels confident
                        using every feature.</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
        </section>
      
        <section className="cta-section" id="cta">
          <div className="cta-particles" aria-hidden="true"></div>
          <div className="cta-container">
            <span className="cta-tag-new cta-anim-tag">The Next Step</span>
            <h2 className="cta-anim-heading">Static learning is over. Lead the future.</h2>
            <p>Staying with an outdated system isn't just a technical problem, it's a missed opportunity for your learners.
              Moving to a modern, AI-powered ecosystem is the most effective way to improve results, save time for your staff,
              and provide certificates that hold real-world value. Whether you are ready to start today or just want to see how
              it works, we are here to help you make the transition.</p>
      
            <div className="cta-actions">
              <div className="cta-action">
                <a href="#cta" className="cta-btn-primary-new">Start Your Free Trial</a>
                
              </div>
              <div className="cta-action">
                <button id="book-demo-trigger-cta" className="cta-btn-secondary-new" style={{ cursor: 'pointer' }}>Book a Strategy
                  Consultation</button>
                
              </div>
            </div>
          </div>
        </section>
      
        <section className="foundary-section" id="about">
          <div className="foundary-glow"></div>
          <div className="container foundary-grid">
            <div className="foundary-left">
              <span className="foundary-tag">About The Foundary</span>
              <h2 className="foundary-title">Our Mission: Building the Architecture of <span className="letter-reveal-trigger"
                  data-delay="0.2" data-speed="0.04">Human Potential.</span></h2>
            </div>
            <div className="foundary-right">
              <p className="foundary-p"><strong>A Collective of Experts:</strong> The Foundary is a global team of educators and AI researchers dedicated to evolving how the world learns through innovation and experience.</p>

              <p className="foundary-p"><strong>Simplified Learning Technology:</strong> We built Brevv to solve the high costs and complexity of traditional tools, replacing disconnected systems with one unified, intelligent platform that works for everyone.

</p>

<p className="foundary-p">
<strong>Our Core Mission:</strong> We provide institutions with the infrastructure needed to deliver a learning experience that is personalized to the individual, verifiable by the world, and accessible to all.
</p>
            </div>
          </div>
        </section>
      
      <footer className="footer">
        
        <div className="footer-bg-effects">
          <div className="footer-ray footer-ray-1"></div>
          <div className="footer-ray footer-ray-2"></div>
          <div className="footer-ray footer-ray-3"></div>
          <div className="footer-bokeh-container"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
      
          <div className="footer-brand-row" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div className="footer-large-brand" style={{ marginBottom: '0' }}>
                <img src="/assets/icons/logo.svg" alt="brevv" />
              </div>
            </div>
            <p style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '600', margin: '1.5rem 0 0', lineHeight: '1.4' }}>AI-Powered
              Learning. Trusted Credentials. One Connected Platform.</p>
          </div>
      
          <hr className="footer-divider" />
      
          <div className="footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            <div className="footer-column">
              <h4>Explore the Platform</h4>
              <ul className="footer-links">
                <li><a href="#why-choose">AI Course Builder</a></li>
                <li><a href="#why-choose">Verified Credentials</a></li>
                <li><a href="#why-choose">Skill Mapping</a></li>
                <li><a href="#faq">Platform Security</a></li>
              </ul>
            </div>
      
            <div className="footer-column">
              <h4>Our Solutions</h4>
              <ul className="footer-links">
                <li><a href="#scale-performance">Higher Education</a></li>
                <li><a href="#scale-performance">Corporate L&amp;D</a></li>
                <li><a href="#scale-performance">Vocational &amp; K-12</a></li>
              </ul>
            </div>
      
            <div className="footer-column">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Brevv</a></li>
                <li><a href="#about">The Foundary DNA</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#cta">Contact Us</a></li>
              </ul>
            </div>
      
            <div className="footer-column">
              <h4>Support &amp; Legal</h4>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">DPDP Compliance</a></li>
              </ul>
            </div>
      
            <div className="footer-column">
              <h4>Get In Touch</h4>
              <ul className="footer-links">
                <li>📧 <a href="mailto:hello@brevvlms.com">hello@brevvlms.com</a></li>
              
                <li style={{ color: 'rgba(255,255,255,0.65)' }}>📍 India Support Office<br />
                  <span style={{ marginLeft: '1.7rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>Serving Global
                    Clients</span>
                </li>
              </ul>
              <div className="social-links" style={{ marginTop: '1.25rem' }}>
                <a href="#" className="social-icon" title="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-icon" title="X / Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                    </path>
                  </svg>
                </a>
                <a href="#" className="social-icon" title="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z">
                    </path>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
      
          <hr className="footer-divider" />
      
          <div className="footer-bottom">
            <p>&copy;2026 Brevv Technologies. All Rights Reserved.</p>
            <p>Built by The Foundary — India</p>
          </div>
        </div>
      </footer>
      
        <div id="demo-modal" className="modal-overlay" style={{ display: 'none' }}>
          <div className="modal-card">
            <button className="modal-close-btn" id="modal-close-btn">&times;</button>
            <div id="modal-form-content">
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <span className="cta-tag-new"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Direct
                  Access</span>
                <h3
                  style={{ fontSize: 'clamp(1.4rem, 5vw, 1.8rem)', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem', fontFamily: 'var(--font-heading)' }}>
                  Book a Live Demo</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0', lineHeight: '1.4' }}>Schedule a personalized
                  walkthrough of the Brevv LXP and AI Tutor.</p>
              </div>
      
              <form id="modal-demo-form" className="modal-form">
                <div className="form-group-modal">
                  <label htmlFor="modal-name">Full Name</label>
                  <input type="text" id="modal-name" required placeholder="Dr. Sarah Jenkins" />
                </div>
      
                <div className="form-group-modal">
                  <label htmlFor="modal-email">Work Email</label>
                  <input type="email" id="modal-email" required placeholder="sarah@university.edu" />
                </div>
      
                <div className="form-group-modal">
                  <label htmlFor="modal-institution">Institution Type</label>
                  <select id="modal-institution" required>
                    <option value="" disabled selected>Select institution type</option>
                    <option value="university">Higher Education (University)</option>
                    <option value="corporate">Corporate L&D / Enterprise</option>
                    <option value="k12">K-12 School / District</option>
                    <option value="vocational">Vocational / Skill Academy</option>
                  </select>
                </div>
      
                <button type="submit" className="cta-btn-primary-new"
                  style={{ width: '100%', border: 'none', fontSize: '0.95rem', fontWeight: '700', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginTop: '1.5rem' }}>
                  <span>Request Demo Slot</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    style={{ marginLeft: '0.5rem' }}>
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </form>
            </div>
      
            <div id="modal-success-content" style={{ display: 'none', textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div
                style={{ width: '60px', height: '60px', backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="4">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3
                style={{ fontSize: 'clamp(1.3rem, 5vw, 1.6rem)', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Slot Requested!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>Thank you! Our integration
                team will reach out via email within 24 hours to schedule your custom walkthrough.</p>
            </div>
          </div>
        </div>
    </>
  );
}
