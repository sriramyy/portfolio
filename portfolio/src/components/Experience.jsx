import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import TEALabImage from '../assets/images/tea-lab.png';
import SolarGatorsImage from '../assets/images/Solar-Gators.png';
import CogniSureImage from '../assets/images/cognisure.jpg';
import OffshotImage from '../assets/images/offshot.png';
import KBImage from '../assets/images/kb.png';

const Experience = () => {
    const [activeTile, setActiveTile] = useState(null);

    const professionalExperiences = [
        {
            id: 'experience00',
            date: 'MAY 2026 - AUGUST 2026',
            title: 'Software Engineer Intern',
            company: 'Knorr-Bremse Signaling',
            location: 'Melbourne, FL',
            description: 'Incoming for Summer 2026',
            image: KBImage,
            highlightColor: '#6ab0ff',
        },
        {
            id: 'experience0',
            date: 'AUGUST 2025 - PRESENT',
            title: 'Autonomous Systems Research Assistant',
            company: 'Trustworthy Engineered Autonomy Lab',
            location: 'Gainesville, FL',
            description: 'Engineered a defensive Machine Learning agent using Python and ROS2 Foxy to process LIDAR point clouds and autonomously reject adversarial overtaking attempts. Spearheaded the Sim-to-Real deployment on an NVIDIA Jetson, achieving a high simulation fidelity through rigorous track-side parameter tuning and model optimization.',
            image: TEALabImage,
            highlightColor: '#39cdd4',
        },
        {
            id: 'experience2',
            date: 'MAY 2024 - AUGUST 2024',
            title: 'Software Engineer Intern',
            company: 'CogniSure Solutions',
            location: 'Remote',
            description: 'Collaborated with mobile application team to develop page UI elements and other elements utilizing React and TypeScript. Also worked on backend RESTful API routers and validation logic, gaining hands on experience in an agile work environment.',
            image: CogniSureImage,
            highlightColor: '#4ceed3',
        },
    ];

    const education = [
        {
            id: 'education1',
            date: 'Expected DECEMBER 2028',
            title: 'M.S. Computer Engineering (Combined Degree Program)',
            company: 'University of Florida',
            gpa: 'N/A, Starting Spring 2026',
            description: 'Specialization in Machine Learning, advancing expertise in deep learning architectures, optimization algorithms, and practical deployment of machine learning systems.',
            highlightColor: '#5ba3e0',
        },
        {
            id: 'education0',
            date: 'Expected MAY 2027',
            title: 'B.S. Computer Engineering',
            company: 'University of Florida',
            gpa: '4.0',
            description: 'Dean\'s List. Relevant Courses: Data Structures & Algorithms, Computer Organization, Advanced C++ Programming, Embedded Systems, Operating Systems, Digital Logic, Software Engineering.',
            highlightColor: '#7fc4ff',
        },
    ];

    const involvementVentures = [
        {
            id: 'involvement0',
            date: 'FEB 2025 - PRESENT',
            title: 'Embedded Systems Engineer',
            company: 'Solar Gators',
            location: 'Gainesville, FL',
            description: 'Designed schematics and PCB routing for a custom steering wheel component using Altium Designer, integrating STM32 microprocessors for reliable vehicle control. Developing embedded C firmware to validate CAN bus decoding, ensuring the real-time visualization of over 20 critical data points for driver feedback',
            image: SolarGatorsImage,
            highlightColor: '#eead4c',
        },
        {
            id: 'involvement1',
            date: 'DEC 2022 - OCT 2024',
            title: 'Data-Driven Creator',
            company: 'Offshot Content',
            location: 'Remote',
            description: 'Constructed a predictive PyTorch model to analyze historical performance data, utilizing multivariate regression to optimize content metadata and upload windows, driving 1.6 million views and 17k+ watch hours across 50+ countries, ranking in the top 30% of national channels.',
            image: OffshotImage,
            highlightColor: '#ee644c',
        },
    ];

    const toggleTile = (id) => {
        setActiveTile(activeTile === id ? null : id);
    };

    const renderSection = (sectionId, title, items) => {
        const activeItem = items.find((item) => item.id === activeTile);

        return (
            <section id={sectionId}>
                <h2>{title}</h2>
                <div className="tile-container">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`tile ${activeTile === item.id ? 'active' : ''}`}
                            onClick={() => toggleTile(item.id)}
                            style={{
                                backgroundColor: activeTile === item.id ? item.highlightColor : '#2a2a2a',
                            }}
                        >
                            <p id="date">{item.date}</p>
                            {item.image && <img src={item.image} alt={item.company} />}
                            <h3>{item.title}</h3>
                            <p id="c-text">{item.company}</p>
                            {item.location && (
                                <div className="location-row">
                                    <LocationOnIcon style={{ fontSize: '16px', color: '#ffffff' }} />
                                    <span>{item.location}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {activeItem && (
                    <div className="tile-content">
                        <h3>{activeItem.title}</h3>
                        <p><strong>{activeItem.company}</strong></p>
                        {activeItem.gpa && <p><strong>GPA:</strong> {activeItem.gpa}</p>}
                        <p>{activeItem.description}</p>
                    </div>
                )}
            </section>
        );
    };

    return (
        <>
            {renderSection('experience', 'Experience', professionalExperiences)}
            {renderSection('education', 'Education', education)}
            {renderSection('involvement-ventures', 'Involvement & Ventures', involvementVentures)}
        </>
    );
};

export default Experience;