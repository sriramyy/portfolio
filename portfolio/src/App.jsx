import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
                    <aside className="sidebar">
                        <h1>Sriram Yerramsetty</h1>
                        <nav>
                            <ul>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
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