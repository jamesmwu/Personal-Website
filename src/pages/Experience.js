import React from 'react';
import ProjectCard from '../components/ProjectCard';

const internships = [
  {
    title: 'Hussle',
    description: 'TBD (Resume)',
    website: 'https://www.hussle.us/',
    tech: ['React Native']
  },
  {
    title: 'Sike',
    description: 'TBD (Resume)',
    tech: ['React Native', 'Firebase', 'TensorFlow']
  }
];

const projects = [
  {
    title: 'UCLA ACM Hack Website',
    description:
      'Maintained the ACM Hack website with a team of 10 other developers. This includes updating the Hack Archive and Event pages with past / current workshops, fixing bugs detected (e.g format issues on mobile), and more.',
    github: 'https://github.com/uclaacm/hack.uclaacm.com',
    website: 'https://hack.uclaacm.com/',
    tech: ['React.js', 'Gatsby']
  },
  {
    title: 'UCLA ACM HOTH Website',
    description:
      'Maintained the ACM HOTH website with a team of 10 other developers. This website relates to Hack on the Hill, an annual hackathon ACM Hack hosts. This includes updating the gallery page, banner, and other bug fixes as well.',
    github: 'https://github.com/uclaacm/hoth.uclaacm.com',
    website: 'https://hoth.uclaacm.com/',
    tech: ['React.js', 'Gatsby']
  },
  {
    title: 'Computer Numerical Control Machine Monitor',
    description:
      'This was a project based on Industry 4.0, which seeks to equip factory machines with sensors that report data about themselves. The goal of this site was to monitor machines in shop and display data in an easy to understand way such that one could see the production status of the machine.',
    github: 'To be grouped',
    tech: ['React.js', 'ASP.NET', 'MySQL']
  },
  {
    title: 'Autonomous Pathfinding Rover',
    description:
      'This was a team engineering project where I helped CAD, wire, 3D print, and code a self driving autonomous Rover. We utilized Arduino and ultrasound sensors to run and navigate the rover. By the end, it was able to successfully navigate around blocks in a small obstacle course, identify a target block, and then capture it with built-in claws.',
    github: 'To be created',
    website:
      'https://drive.google.com/file/d/1xpaB1gpdHcrj2WzBDVi211XRWmGpyxal/view',
    tech: ['Arduino', 'SolidWorks']
  }
];

function Experience() {
  return (
    <div>
      <h1>Internships</h1>
      {internships.map(internship => {
        return <p>BYE</p>;
      })}
      <h1>Projects</h1>
      {projects.map(project => {
        return (
          <div style={{ marginBottom: '3rem' }}>
            <ProjectCard
              title={project.title}
              desc={project.description}
              github={project.github}
              website={project.website}
              tech={project.tech}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
