import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import TEALabImage from '../assets/images/tea-lab.png';
import SolarGatorsImage from '../assets/images/Solar-Gators.png';
import CogniSureImage from '../assets/images/cognisure.jpg';
import OffshotImage from '../assets/images/offshot.png';
import KBImage from '../assets/images/kb.png';
import GARImage from '../assets/images/gar.png';

const Experience = () => {
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
            highlightColor: '#00bcd4',
        },
        {
            id: 'education0',
            date: 'Expected MAY 2027',
            title: 'B.S. Computer Engineering',
            company: 'University of Florida',
            gpa: '4.0',
            description: 'Dean\'s List. Relevant Courses: Data Structures & Algorithms, Computer Organization, Advanced C++ Programming, Embedded Systems, Operating Systems, Digital Logic, Software Engineering.',
            highlightColor: '#00bcd4',
        },
    ];

    const involvementVentures = [
        {
            id: 'involvement0',
            date: 'JAN 2026 - PRESENT',
            title: 'Lead Software Engineer',
            company: 'Gator Autonomous Racing',
            location: 'Gainesville, FL',
            description: 'Delivering technical lectures to 50+ students and providing hands-on mentorship in F1TENTH/Roboracer stack architecture, ROS framework development, and autonomous systems fundamentals. Showcasing real-time autonomous navigation demonstrations to 100+ campus event attendees and UF Leadership.',
            image: GARImage,
            highlightColor: '#3a7ed1',
        },
        {
            id: 'involvement1',
            date: 'FEB 2025 - PRESENT',
            title: 'Embedded Systems Engineer',
            company: 'Solar Gators',
            location: 'Gainesville, FL',
            description: 'Designed schematics and PCB routing for a custom steering wheel component using Altium Designer, integrating STM32 microprocessors for reliable vehicle control. Developing embedded C firmware to validate CAN bus decoding, ensuring the real-time visualization of over 20 critical data points for driver feedback',
            image: SolarGatorsImage,
            highlightColor: '#ffa51e',
        },
        {
            id: 'involvement2',
            date: 'DEC 2022 - OCT 2024',
            title: 'Data-Driven Creator',
            company: 'Offshot Content',
            location: 'Remote',
            description: 'Constructed a predictive PyTorch model to analyze historical performance data, utilizing multivariate regression to optimize content metadata and upload windows, driving 1.6 million views and 17k+ watch hours across 50+ countries, ranking in the top 30% of national channels.',
            image: OffshotImage,
            highlightColor: '#ee644c',
        },
    ];

    const researchPublications = [
        {
            id: 'research0',
            date: '2026',
            title: 'Drift Detection and Friction Estimation for Autonomous Racing',
            company: 'Peer-Reviewed Publication | IEEE ITSC 2026',
            description: 'Developed a model-free, computationally efficient approach using only IMU, LiDAR, and control actions to detect slip and estimate friction.',
            result: 'Achieved 94% peak accuracy (6.09% MRE) across diverse track surfaces.',
            links: [
                { label: 'Paper', url: 'https://arxiv.org/abs/2509.15423' },
                { label: 'GitHub', url: 'https://github.com/Trustworthy-Engineered-Autonomy-Lab/Online-Slip-Detection-Friction-Estimation' },
            ],
            highlightColor: '#5d8bc1',
        },
        {
            id: 'research1',
            date: '2023',
            title: 'Comparative Meteorological Machine Learning Research',
            company: 'Research Archive | Preprint',
            description: 'Engineered a Multilayer Perceptron (MLP) trained on 2,400+ features to identify non-linear meteorological patterns.',
            result: 'Achieved 70% accuracy; garnered 110+ downloads on a Research Archive.',
            links: [
                { label: 'Preprint Paper', url: 'https://research-archive.org/index.php/rars/preprint/view/618' },
            ],
            highlightColor: '#608f7f',
        },
    ];

    const renderTimelineSection = (sectionId, title, items) => {
        return (
            <section id={sectionId}>
                <h2>{title}</h2>
                <div className="experience-timeline">
                    {items.map((item) => (
                        <article key={item.id} className="timeline-item">
                            <span className="timeline-dot" style={{ backgroundColor: item.highlightColor }}></span>
                            <div className="timeline-content" style={{ borderLeft: `4px solid ${item.highlightColor}` }}>
                                <div className="timeline-header">
                                    {item.image && <img className="timeline-logo" src={item.image} alt={item.company} />}
                                    <div className="timeline-header-text">
                                        <p className="timeline-date">{item.date}</p>
                                        <h3 style={{ color: item.highlightColor }}>{item.title}</h3>
                                        <p className="timeline-company">{item.company}</p>
                                    </div>
                                </div>
                                {item.gpa && <p className="timeline-result"><strong>GPA:</strong> {item.gpa}</p>}
                                {item.location && (
                                    <div className="timeline-location">
                                        <LocationOnIcon style={{ fontSize: '16px', color: '#b8b8b8' }} />
                                        <span>{item.location}</span>
                                    </div>
                                )}
                                <p className="timeline-description">{item.description}</p>
                                {item.result && <p className="timeline-result"><strong>Result:</strong> {item.result}</p>}
                                {item.links && item.links.length > 0 && (
                                    <p className="timeline-links">
                                        <strong>Links:</strong>{' '}
                                        {item.links.map((link, index) => (
                                            <React.Fragment key={link.label}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                                {index < item.links.length - 1 ? ' | ' : ''}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        );
    };

    return (
        <>
            {renderTimelineSection('education', 'Education', education)}
            {renderTimelineSection('experience', 'Experience', professionalExperiences)}
            {renderTimelineSection('involvement-ventures', 'Involvement & Ventures', involvementVentures)}
            {renderTimelineSection('research-publications', 'Research & Publications', researchPublications)}
        </>
    );
};

export default Experience;