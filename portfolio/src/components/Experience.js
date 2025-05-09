import React, { useState } from 'react';

const Experience = () => {
    const [activeTile, setActiveTile] = useState(null);

    const experiences = [
        {
            id: 'experience1',
            title: 'Electrical Systems Engineer',
            company: 'Solar Gators (Gainesville)',
            description: 'description',
            image: '/images/solar-gators.png', 
        },
        {
            id: 'experience2',
            title: 'Frontend Software Engineer Intern',
            company: 'CogniSure Solutions (Remote)',
            description: 'description',
            image: '/images/cognisure.png', 
        },
        {
            id: 'experience3',
            title: 'YouTube Channel Owner',
            company: 'Offshot Content (Remote)',
            description: 'description',
            image: '/images/offshot-content.png', 
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
                    >
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