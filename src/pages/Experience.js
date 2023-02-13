import React from 'react';
import '../styles/Experience.css';
import ProjectCard from '../components/ProjectCard';
import InternshipCard from '../components/InternshipCard';
import Hack from '../img/Hack.png';
import CNCMachineMonitor from '../img/CNC_Machine_Monitor.png';
import Hoth from '../img/HOTH.png';
import BruinOdyssey from '../img/Bruin_Odyssey.png';
import Rover from '../img/Rover.png';

const internships = [
  {
    title: 'Hussle',
    description:
      "Hussle is a startup founded at UCLA. It seeks to provide a platform for students to exchange goods and services with one another, acting as an intermediary for those who'd like to maintain side hustles and customers who'd prefer cheaper alternatives to expensive services targeted at college students. As a front-end development intern, I built several screens and features of the Hussle app listed below. The app is currently published and downloadable for iOS on the app store.",
    points: [
      'Constructed and implemented several screens and features of Hussle, an online student marketplace app, using React Native.',
      'Built user authentication, saved post functionality, navigation, and a user feed displaying all services and products offered by the community.',
      'Collaborated with graphic designers, application testers, and product management to launch the application on the iOS store within 4 months.',
      'Integrated and applied over 15 unique and reusable components for front-end elements.'
    ],
    website: 'https://www.hussle.us/',
    tech: ['React Native']
  },
  {
    title: 'Sike',
    description:
      'As part of Sike, I am a mobile software developer working on a wellness app that seeks to promote mental health and positivity through the gamification of journaling, done through visual UI changes based on user sentiment analysis. As a developer, I take on a full-stack role on this team, and have built out several screens, components, and features of the app. Currently, I am helping develop a machine learning model to conduct a sentiment analysis and also helping to properly maintain our database.',

    points: [
      'Spearheaded the design and implementation of Sike, a wellness app that gamifies journaling using user sentiment analysis.',
      'Led the front-end development using React Native and built Home, Journal Entry, and Settings pages.',
      'Explored methods for natural language processing and currently corresponding with four engineers to develop a machine learning model that analyzes and quantifies the sentiment of a given text using TensorFlow.'
    ],
    tech: ['React Native', 'Firebase', 'TensorFlow']
  }
];

const projects = [
  {
    title: 'Computer Numerical Control Machine Monitor',
    description:
      'This was a project based on Industry 4.0, which seeks to equip factory machines with sensors that report data about themselves. The goal of this site was to monitor machines in shop and display data in an easy to understand way such that one could see the production status of the machine.',
    github: 'To be grouped',
    tech: ['React.js', 'ASP.NET', 'MySQL'],
    image: CNCMachineMonitor
  },
  {
    title: 'UCLA ACM Hack Website',
    description:
      'Maintained the ACM Hack website with a team of 10 other developers. This includes updating the Hack Archive and Event pages with past / current workshops, fixing bugs detected (e.g format issues on mobile), and more.',
    github: 'https://github.com/uclaacm/hack.uclaacm.com',
    website: 'https://hack.uclaacm.com/',
    tech: ['React.js', 'Gatsby'],
    image: Hack
  },
  {
    title: 'UCLA ACM HOTH Website',
    description:
      'Maintained the ACM HOTH website with a team of 10 other developers. This website relates to Hack on the Hill, an annual hackathon ACM Hack hosts. This includes updating the gallery page, banner, and other bug fixes as well.',
    github: 'https://github.com/uclaacm/hoth.uclaacm.com',
    website: 'https://hoth.uclaacm.com/',
    tech: ['React.js', 'Gatsby'],
    image: Hoth
  },
  {
    title: 'Bruin Odyssey',
    description: 'TBD',
    website: 'https://bruinodyssey.uclaacm.com/',
    tech: ['React.js', 'Next.js', 'TypeScript', 'MongoDB'],
    image: BruinOdyssey
  },
  {
    title: 'Autonomous Pathfinding Rover',
    description:
      'This was a team engineering project where I helped CAD, wire, 3D print, and code a self driving autonomous Rover. We utilized Arduino and ultrasound sensors to run and navigate the rover. By the end, it was able to successfully navigate around blocks in a small obstacle course, identify a target block, and then capture it with built-in claws.',
    github: 'To be created',
    website:
      'https://drive.google.com/file/d/1xpaB1gpdHcrj2WzBDVi211XRWmGpyxal/view',
    tech: ['Arduino', 'SolidWorks'],
    image: Rover
  }
];

function Experience() {
  return (
    <div className='exp'>
      <h1>Internships</h1>
      {internships.map(internship => {
        return (
          <div style={{ marginBottom: '3rem' }}>
            <InternshipCard
              title={internship.title}
              desc={internship.description}
              website={internship.website}
              points={internship.points}
              tech={internship.tech}
            />
          </div>
        );
      })}
      <hr className='lineBreak' />
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
              image={project.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
