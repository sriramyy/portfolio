import React from 'react';
import { Chip, Box } from '@mui/material';
import { 
    SiCplusplus, SiPython, SiJavascript, SiHtml5, SiTypescript,
    SiGit, SiGithub, SiAndroidstudio,
    SiReact, SiPytorch, SiTensorflow, SiFlask, SiFastapi, SiNumpy, SiRos, SiLinux,
    SiArduino, SiNvidia
} from 'react-icons/si';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MemoryIcon from '@mui/icons-material/Memory';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Languages',
            skills: [
                { name: 'C/C++', icon: <SiCplusplus /> },
                { name: 'Python', icon: <SiPython /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'HTML/CSS', icon: <SiHtml5 /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
            ],
        },
        {
            category: 'Developer Tools',
            skills: [
                { name: 'Git', icon: <SiGit /> },
                { name: 'GitHub', icon: <SiGithub /> },
                { name: 'STM32CubeIDE', icon: <MemoryIcon /> },
                { name: 'Altium', icon: <DeveloperBoardIcon /> },
                { name: 'Android Studio', icon: <SiAndroidstudio /> },
                { name: 'Simulation Software', icon: <CodeIcon /> },
            ],
        },
        {
            category: 'Libraries/Frameworks',
            skills: [
                { name: 'React', icon: <SiReact /> },
                { name: 'PyTorch', icon: <SiPytorch /> },
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'Flask', icon: <SiFlask /> },
                { name: 'FastAPI', icon: <SiFastapi /> },
                { name: 'NumPy', icon: <SiNumpy /> },
                { name: 'ROS/ROS2', icon: <SiRos /> },
                { name: 'UNIX/Linux CLI', icon: <SiLinux /> },
            ],
        },
        {
            category: 'Hardware',
            skills: [
                { name: 'STM32 Microcontroller', icon: <MemoryIcon /> },
                { name: 'Arduino', icon: <SiArduino /> },
                { name: 'NVIDIA Jetson', icon: <SiNvidia /> },
                { name: 'LIDAR', icon: <CodeIcon /> },
                { name: 'DE-10 (FPGA)', icon: <DeveloperBoardIcon /> },
                { name: 'PCB Design', icon: <DeveloperBoardIcon /> },
            ],
        },
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            {skillCategories.map((categoryGroup) => (
                <Box key={categoryGroup.category} sx={{ marginBottom: '24px' }}>
                    <h3 style={{ color: '#e0e0e0', fontSize: '1.3em', marginBottom: '12px' }}>
                        {categoryGroup.category}
                    </h3>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {categoryGroup.skills.map((skill) => (
                            <Chip
                                key={skill.name}
                                icon={<span style={{ color: '#e0e0e0', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>}
                                label={skill.name}
                                sx={{
                                    backgroundColor: '#2a2a2a',
                                    color: '#e0e0e0',
                                    fontSize: '0.95em',
                                    padding: '4px 8px',
                                    '& .MuiChip-icon': {
                                        color: '#e0e0e0',
                                        marginLeft: '8px',
                                    },
                                    '&:hover': {
                                        backgroundColor: '#3a3a3a',
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            ))}
        </section>
    );
};

export default Skills;