import React from 'react';
import { Chip, Box } from '@mui/material';
import { 
    SiCplusplus, SiPython, SiTypescript,
    SiGit, SiReact, SiPytorch, SiTensorflow, SiFastapi, SiNumpy, SiRos, SiLinux,
    SiArduino, SiNvidia, SiEspressif
} from 'react-icons/si';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MemoryIcon from '@mui/icons-material/Memory';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Languages/Tools',
            accentColor: '#6ab0ff',
            skills: [
                { name: 'C/C++', icon: <SiCplusplus /> },
                { name: 'Python', icon: <SiPython /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'ROS2', icon: <SiRos /> },
                { name: 'Git', icon: <SiGit /> },
                { name: 'Altium', icon: <DeveloperBoardIcon /> },
                { name: 'STM32CubeIDE', icon: <MemoryIcon /> },
                { name: 'FreeRTOS', icon: <CodeIcon /> },
                { name: 'NVIDIA Jetson', icon: <SiNvidia /> },
                { name: 'VHDL', icon: <CodeIcon /> },
                { name: 'Verilog', icon: <CodeIcon /> },
            ],
        },
        {
            category: 'AI & Frameworks',
            accentColor: '#39cdd4',
            skills: [
                { name: 'PyTorch', icon: <SiPytorch /> },
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'React', icon: <SiReact /> },
                { name: 'FastAPI', icon: <SiFastapi /> },
                { name: 'NumPy', icon: <SiNumpy /> },
                { name: 'LiDAR Processing', icon: <CodeIcon /> },
                { name: 'UNIX/Linux CLI', icon: <SiLinux /> },
            ],
        },
        {
            category: 'Hardware',
            accentColor: '#eead4c',
            skills: [
                { name: 'STM32', icon: <MemoryIcon /> },
                { name: 'Arduino', icon: <SiArduino /> },
                { name: 'ESP32', icon: <SiEspressif /> },
                { name: 'DE-10 (FPGA)', icon: <DeveloperBoardIcon /> },
                { name: 'PCB Design (Schematics/Routing)', icon: <DeveloperBoardIcon /> },
                { name: 'CAN Bus', icon: <CodeIcon /> },
                { name: 'Signal Testing', icon: <CodeIcon /> },
            ],
        },
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            {skillCategories.map((categoryGroup) => (
                <Box
                    key={categoryGroup.category}
                    className="skills-category-card"
                    sx={{ marginBottom: '24px', borderLeft: `4px solid ${categoryGroup.accentColor}` }}
                >
                    <h3 style={{ color: categoryGroup.accentColor, fontSize: '1.3em', marginBottom: '12px' }}>
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