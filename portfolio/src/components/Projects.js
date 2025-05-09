import React, { useState } from 'react';

const Projects = () => {
    const [activeTile, setActiveTile] = useState(null);

    const projects = [
        { id: 'project1', title: 'WikiSix', description: '.' },
        { id: 'project2', title: 'SFML Minesweeper Clone', description: '.' },
        { id: 'project3', title: 'Comparative ML Model Research', description: '' },
        { id: 'project4', title: 'ChipSplit', description: '.' },
        { id: 'project5', title: 'p5', description: '.' },
        { id: 'project6', title: 'p6', description: '.' }
    ];

    const toggleTile = (id) => {
        setActiveTile(activeTile === id ? null : id);
    };

    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <div className="tile-container">
                {projects.map(proj => (
                    <div
                        key={proj.id}
                        className={`tile ${activeTile === proj.id ? 'active' : ''}`}
                        onClick={() => toggleTile(proj.id)}
                    >
                        <h3>{proj.title}</h3>
                        {activeTile === proj.id && <p>{proj.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;