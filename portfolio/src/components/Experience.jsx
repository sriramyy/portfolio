import React, { useState } from 'react';

import TEALabImage from '../assets/images/tea-lab.png';
import SolarGatorsImage from '../assets/images/Solar-Gators.png';
import CogniSureImage from '../assets/images/cognisure.jpg'
import OffshotImage from '../assets/images/offshot.png'

const Experience = () => {
    const [activeTile, setActiveTile] = useState(null);

    const experiences = [
        {
            id: 'experience0',
            date: 'AUG 2025 - PRESENT',
            title: 'Strategic AI Research Assistant',
            company: 'TEA Lab (Gainesville)',
            description: 'Engineering a defensive driving machine learning algorithm using Python and C++ to deter racing overtake attempts from adversarial agents utilizing a LIDAR-equipped F1/10 base and ROS2 Foxy middleware',
            image: TEALabImage,
            highlightColor: '#39cdd4ff',
        },
        {
            id: 'experience1',
            date: 'FEB 2025 - PRESENT',
            title: 'Electrical Systems Engineer',
            company: 'Solar Gators (Gainesville)',
            description: ' Co-designed electronic subsystems for a solar-powered race car alongside a 50+ member interdisciplinary team, contributing to the team’s qualification for the Formula Sun Grand Prix and American Solar Challenge',
            image: SolarGatorsImage, 
            highlightColor: '#eead4c',
        },
        {
            id: 'experience2',
            date: 'MAY 2024 - AUG 2024',
            title: 'Frontend Software Engineer Intern',
            company: 'CogniSure Solutions (Remote)',
            description: 'Worked on the mobile application development team using live agile environment tools and working on sign on components.',
            image: CogniSureImage, 
            highlightColor: '#4ceed3',
        },
        {
            id: 'experience3',
            date: 'DEC 2022 - OCT 2024',
            title: 'Data-Driven YouTube Content Strategist',
            company: 'Offshot Content (Remote)',
            description: 'Engineered a custom data-driven content strategy model using PyTorch to analyze viewer engagement, identify content trends, and automate content strategy, optimizing video topics and release times to target niche gaming audiences',
            image: OffshotImage,
            highlightColor: '#ee644c',
        },
    ];

    const toggleTile = (id) => {
        setActiveTile(activeTile === id ? null : id);
    };

    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="tile-container">
                {experiences.map((exp) => (
                    <div
                        key={exp.id}
                        className={`tile ${activeTile === exp.id ? 'active' : ''}`}
                        onClick={() => toggleTile(exp.id)}
                        style={{
                            backgroundColor: activeTile === exp.id ? exp.highlightColor : '#2a2a2a',
                        }}
                    >
                        <p id ="date">{exp.date}</p>
                        <img src={exp.image} alt={exp.company} />
                        <h3>{exp.title}</h3>
                        <p id="c-text">{exp.company}</p>
                    </div>
                ))}
            </div>
            {activeTile && (
                <div className="tile-content">
                    {experiences
                        .filter((exp) => exp.id === activeTile)
                        .map((exp) => (
                            <div key={exp.id}>
                                <h3>{exp.title}</h3>
                                <p><strong>Company:</strong> {exp.company}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                </div>
            )}
        </section>
    );
};

export default Experience;