import React, { useState } from 'react';
import SolarGatorsImage from '../assets/images/Solar-Gators.png';
import CogniSureImage from '../assets/images/cognisure.jpg'
import OffshotImage from '../assets/images/offshot.png'

const Experience = () => {
    const [activeTile, setActiveTile] = useState(null);

    const experiences = [
        {
            id: 'experience1',
            date: 'FEB 2025 - PRESENT',
            title: 'Electrical Systems Engineer',
            company: 'Solar Gators (Gainesville)',
            description: 'description',
            image: SolarGatorsImage, 
            highlightColor: '#eead4c',
        },
        {
            id: 'experience2',
            date: 'MAY 2024 - AUG 2024',
            title: 'Frontend Software Engineer Intern',
            company: 'CogniSure Solutions (Remote)',
            description: 'description',
            image: CogniSureImage, 
            highlightColor: '#4ceed3',
        },
        {
            id: 'experience3',
            date: 'DEC 2022 - OCT 2024',
            title: 'YouTube Channel Owner',
            company: 'Offshot Content (Remote)',
            description: 'description',
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
                            backgroundColor: activeTile == exp.id ? exp.highlightColor : '#2a2a2a',
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