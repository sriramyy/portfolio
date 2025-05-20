import React from 'react';

const Skills = () => {
    const skills = ['C++','C','JavaScript','TypeScript','HTML/CSS','Python','PyTorch', 'React','Flask','STM32 Microcontrollers','Arduino Platform'];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;