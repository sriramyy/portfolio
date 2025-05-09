import React from 'react';

const Skills = () => {
    const skills = ['JavaScript', 'React', 'Python', 'Flask', 'HTML/CSS'];

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