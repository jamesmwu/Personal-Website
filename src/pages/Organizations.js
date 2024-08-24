import React from 'react';
import '../styles/Organizations.css';
import InternshipCard from '../components/InternshipCard';
// import OrganizationCard from '../components/OrganizationCard';

const orgs = [
  {
    title: 'Association of Computing Machinery - Hack',
    description:
      'At Hack, we seek to empower our community by providing tools and knowledge to build great products. We primarily focus on web and mobile development, but also host workshops and events on a variety of things related to coding, including one of the biggest campus-wide hackathons "Hack on the Hill", and coding puzzle hunt games such as "Bruin Quest" and "Bruin Odyssey". As an officer, I help manage and coordinate events, designing curriculums for technical workshops and providing mentorship to attendees.',
    points: [
      'Directed an 8-week project-based series “HackSpace”, overseeing 100+ people and guiding teams in app, web, and game development, resulting in 7 completed products by the conclusion.',
      'Maintained the ACM Hack and HOTH websites with a team of 10 other developers using the Gatsby framework, updating the Hack Archive and Event pages with past/current workshops and HOTH gallery page with submissions.',
      'Developed curriculum and taught beginner-friendly workshops on Swift and React Native for a mobile development series (Hack Sprint) and a hackathon (Hack on the Hill) for UCLA students.',
      'Built login/sign up page, puzzle page, themes, and assets for the “Bruin Odyssey” puzzle series using Next.js and Material UI.'
    ],
    website: 'https://hack.uclaacm.com/'
  },
  {
    title: 'DevX',
    description:
      'DevX is UCLA\'s premier software project club, where groups are formed and guided in student-led software projects to improve the livelihoods of others and contribute towards various problems. Here, real-world applications of development practices are employed and members are given valuable experiences that directly translate to skills in industry.',
    points: [
      'Promoted greater connectivity and club outreach, increasing individual group retention substantially',
      'Worked on projects with a focus on writing clean, scalable code',
      'Implemented AGILE methodologies within groups in order to boost overall productivity, resulting in project on track to finish 3 months ahead of schedule',
      'Collaborated with engineering managers and product developers in order to create realistic timelines and establish healthy cultures conscious of burnout'
    ],
    website: 'https://github.com/ucladevx'
  }
];

function Organizations() {
  return (
    <div className='org'>
      <h1>Organizations</h1>
      <div className='list'>
        {orgs.map(org => {
          return (
            <div className='orgCard'>
              <InternshipCard
                title={org.title}
                desc={org.description}
                website={org.website}
                points={org.points}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Organizations;
