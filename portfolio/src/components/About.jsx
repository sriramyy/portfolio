import React from 'react';
import HeadshotImage from '../assets/images/headshot.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-card">
                <img className="about-headshot" src={HeadshotImage} alt="Sriram Yerramsetty headshot" />
                <div className="about-content">
                    <p>
                        I'm Sriram Yerramsetty, a <b>Computer Engineering student at the University of Florida</b>, working to explore how software and hardware come together to solve real-world problems.
                    </p>
                    <p>
                        I’ve had the chance to contribute to projects ranging from embedded systems for a solar-powered race car to full-stack web applications and machine learning experiments. Along the way, I’ve picked up experience in C++, Python, and React, and I’m continuing to learn how to build things that are both efficient and practical.
                    </p>
                    <p>
                        I enjoy collaborating with others, learning from each project, and applying classroom concepts to hands-on work whenever I can.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;