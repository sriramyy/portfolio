import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Pages/Sections
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Styles
import './assets/css/styles.css';

const App = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    const middleSectionIds = ['education', 'experience', 'involvement-ventures', 'research-publications', 'projects', 'skills'];

    const handleScrollDown = () => {
        setShowPortfolio(true);
    };

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.deltaY > 0 && !showPortfolio) {
                handleScrollDown();
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, [showPortfolio]);

    useEffect(() => {
        if (!showPortfolio) {
            return;
        }

        const contentRoot = document.querySelector('.content');

        const updateEdgeSectionState = () => {
            if (!contentRoot) {
                return false;
            }

            const atTop = contentRoot.scrollTop <= 8;
            const atBottom = contentRoot.scrollTop + contentRoot.clientHeight >= contentRoot.scrollHeight - 8;

            if (atTop) {
                setActiveSection('about');
                return true;
            }

            if (atBottom) {
                setActiveSection('contact');
                return true;
            }

            return false;
        };

        const handleContentScroll = () => {
            updateEdgeSectionState();
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (updateEdgeSectionState()) {
                    return;
                }

                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) => Math.abs(first.boundingClientRect.top) - Math.abs(second.boundingClientRect.top));

                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                root: contentRoot || null,
                threshold: [0.1, 0.25, 0.5, 0.75],
                rootMargin: '-12% 0px -45% 0px',
            }
        );

        const sectionElements = middleSectionIds
            .map((sectionId) => document.getElementById(sectionId))
            .filter(Boolean);

        sectionElements.forEach((sectionElement) => observer.observe(sectionElement));
        contentRoot?.addEventListener('scroll', handleContentScroll);
        updateEdgeSectionState();

        return () => {
            observer.disconnect();
            contentRoot?.removeEventListener('scroll', handleContentScroll);
        };
    }, [showPortfolio]);

    useEffect(() => {
        if (!showPortfolio) {
            return;
        }

        const sections = Array.from(document.querySelectorAll('.content section[id]'));
        sections.forEach((sectionElement) => {
            sectionElement.classList.toggle('active-section', sectionElement.id === activeSection);
        });
    }, [showPortfolio, activeSection]);

    return (
        <div className="app-container">
            <AnimatePresence>
                { /* Landing Page */ }
                {!showPortfolio && (
                    <motion.div
                        className="landing-screen"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: '-100%' }} 
                        transition={{ duration: 0.8 }}
                    >
                        <Box
                            sx={{
                                height: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#121212',
                                color: '#e0e0e0',
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold', color: '#00bcd4', marginBottom: '0px' }}
                            >
                                Sriram Yerramsetty's
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: 'bold', color: '#00bcd4', marginBottom: '20px' }}
                            >
                                Portfolio.
                            </Typography>
                            <motion.div
                                className="down-arrow"
                                initial={{ y: 0 }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: 'easeInOut',
                                }}
                                onClick={handleScrollDown}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '2rem',
                                    color: '#00bcd4',
                                }}
                            >
                                ↓
                            </motion.div>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            {showPortfolio && (
                <motion.div
                    className="portfolio-section"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8 }}
                >
                    { /* Portfolio Sidebar */ }
                    <aside className="sidebar">
                        <h1>Sriram Yerramsetty</h1>
                        <nav>
                            <ul>
                                <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About Me</a></li>
                                <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => handleNavClick('education')}>Education</a></li>
                                <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>Experience</a></li>
                                <li><a href="#involvement-ventures" className={activeSection === 'involvement-ventures' ? 'active' : ''} onClick={() => handleNavClick('involvement-ventures')}>Involvement &amp; Ventures</a></li>
                                <li><a href="#research-publications" className={activeSection === 'research-publications' ? 'active' : ''} onClick={() => handleNavClick('research-publications')}>Research &amp; Publications</a></li>
                                <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Featured Projects</a></li>
                                <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</a></li>
                                <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a></li>
                            </ul>
                        </nav>
                        <div className="sidebar-footer">
                            <a
                                className="sidebar-icons"
                                href="https://www.linkedin.com/in/sriram-yerramsetty/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon fontSize='large'/>
                            </a>
                            <a
                                className="sidebar-icons"
                                href="https://github.com/sriramyy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubIcon fontSize='large'/>
                            </a>
                            <a
                                className="sidebar-icons"
                                href="mailto:sriram.yerramsetty1@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <EmailIcon fontSize='large'/>
                            </a>
                        </div>
                    </aside>
                    <main className="content">
                        <About />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                        <Footer />
                    </main>
                </motion.div>
            )}
        </div>
    );
};

export default App;