import React from 'react';
import MinesweeperPreview from '../assets/images/preview_minesweeper.png'
import WikisixPreview from '../assets/images/preview_wikisix.png'
import MLPreview from '../assets/images/preview_ml.png'
import CSPreview from '../assets/images/preview_chipsplit.png'
import PortfolioPreview from '../assets/images/preview_portfolio.png'
import IDPreview from '../assets/images/preview_id.png'
import GeneticPongMLPreview from '../assets/images/geneticpong.png'


const Projects = () => {
    const projects = [
        {   id: '7',
            title: 'Genetic Pong ML',
            image: GeneticPongMLPreview,
            description: 'Developed an adaptive Pong agent using a genetic algorithm to optimize a perceptron model. The environment features real-time visualization and metric tracking for rapid model refinement',
            link: 'https://github.com/sriramyy/genetic-pong-ml'  
        },
        { id: '1', 
            title: 'WikiSix',
            image: WikisixPreview, 
            description: 'Implements a Wikipedia pathfinding tool using Dijkstra’s and BFS algorithms to find the shortest link path between two articles.', 
            link: 'https://wikisix.vercel.app/'
        },
        { id: '2', 
            title: 'SFML Minesweeper Clone', 
            image: MinesweeperPreview,
            description: 'Implements a fully functional Minesweeper game with a SFML graphical interface. Features include tile reveal, flag placement, win/lose state indicators, a flag counter, debug mode, and test board configurations.', 
            link: 'https://github.com/sriramyy/SFML-Minesweeper-Clone' 
        },
        { id: '5', 
            title: 'Portfolio', 
            image: PortfolioPreview,
            description: 'Created this portfolio using React, JavaScript, HTML/CSS, and Material UI elements.', 
            link: 'https://github.com/sriramyy/portfolio' 
        },
        { id: '3', 
            title: 'Comparative ML Research', 
            image: MLPreview,
            description: 'Implements and compares three machine learning models—Logistic Regression, SVM, and MLP—to predict next-day precipitation from real-world weather data, achieving up to 70% accuracy', 
            link: 'https://research-archive.org/index.php/rars/preprint/view/618' 
        },
        { id: '4', 
            title: 'ChipSplit',
            image: CSPreview, 
            description: 'Implements a post-game Poker settlement tool that uses recursion to minimize the number of money transfers between players with a user-friendly interface.', 
            link: 'https://github.com/sriramyy/ChipSplit-Poker' 
        },
        { id: '6', 
            title: 'ID AVL Tree', 
            image: IDPreview,
            description: 'Implements an AVL tree that stores user names and IDs, supporting efficient insert, remove, and search operations, along with multiple traversal and in-order position-based removal commands.', 
            link: 'https://github.com/sriramyy/ID-AVL-Tree' 
        },
    ];

    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <div className="tile-container projects">
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