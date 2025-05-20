import React, { useState } from 'react';
import MinesweeperPreview from '../assets/images/preview_minesweeper.png'
import WikisixPreview from '../assets/images/preview_wikisix.png'
import MLPreview from '../assets/images/preview_ml.png'
import CSPreview from '../assets/images/preview_chipsplit.png'
import PortfolioPreview from '../assets/images/preview_portfolio.png'


const Projects = () => {
    const [activeTile, setActiveTile] = useState(null);

    const projects = [
        { id: '1', 
            title: 'WikiSix',
            image: WikisixPreview, 
            description: 'Implements a Wikipedia pathfinding tool using Dijkstra’s and BFS algorithms to find the shortest link path between two articles.', 
            link: 'https://wikisix.vercel.app/'
        },
        { id: '2', 
            title: 'SFML Minesweeper Clone', 
            image: MinesweeperPreview,
            description: '.', 
            link: 'https://github.com/sriramyy/SFML-Minesweeper-Clone' 
        },
        { id: '5', 
            title: 'Portfolio', 
            image: PortfolioPreview,
            description: '.', 
            link: 'https://github.com/sriramyy/portfolio' 
        },
        { id: '3', 
            title: 'Comparative ML Research', 
            image: MLPreview,
            description: '', 
            link: 'https://research-archive.org/index.php/rars/preprint/view/618' 
        },
        { id: '4', 
            title: 'ChipSplit',
            image: CSPreview, 
            description: '.', 
            link: 'https://github.com/sriramyy/ChipSplit-Poker' 
        },
        { id: '6', 
            title: 'ID AVL Tree', 
            description: 'Implements an AVL tree that stores user names and IDs, supporting efficient insert, remove, and search operations, along with multiple traversal and in-order position-based removal commands.', 
            link: 'https://github.com/sriramyy/ID-AVL-Tree' 
        },
    ];

    const toggleTile = (id) => {
        setActiveTile(activeTile === id ? null : id);
    };

    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <div className="tile-container">
                {projects.map(proj => (
                    <a
                        key={proj.id}
                        className="project-tile"
                        href={proj.link}
                        target={proj.link}
                        rel="noopener noreferrer"
                    >
                        <h3>{proj.title}</h3>
                        {proj.image && (
                            <img
                                className = "project-preview-bg"
                                src= {proj.image}
                                alt= 'Preview'
                            />
                        )}
                        <p>{proj.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;