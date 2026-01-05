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

    const handleScrollDown = () => {
        setShowPortfolio(true);
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
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#involvement-ventures">Involvement &amp; Ventures</a></li>
                                <li><a href="#projects">Featured Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="sidebar-footer">
                            <a
                                className="sidebar-icons"
                                href="https://www.linkedin.com/in/sriram-yerramsetty/"
                                target="_blank"

                            >
                                <LinkedInIcon fontSize='large'/>
                            </a>
                            <a
                                className="sidebar-icons"
                                href="https://github.com/sriramyy"
                                target="_blank"

                            >
                                <GitHubIcon fontSize='large'/>
                            </a>
                            <a
                                className="sidebar-icons"
                                href="mailto:sriram.yerramsetty1@gmail.com"
                                target="_blank"
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