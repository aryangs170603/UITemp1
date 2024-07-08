import React from 'react';
import './Training2P.css'; // Make sure to create this CSS file or include styles in a CSS-in-JS approach

const Card = ({ number, title, description }) => {
  return (
      <div className={`card card-${number}`}>
          <div className="card-number">{number}</div>
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
      </div>
  );
};

const Cards = () => {
  const cardData = [
      {
          number: '01',
          title: 'Career Advice',
          description: 'A dedicated career expert will guide you by putting light on which course to select based on your interests and qualifications. At Itvedant, we provide our students with an interesting syllabus for our IT Courses.'
      },
      {
          number: '02',
          title: 'Enrollment',
          description: 'Once you enroll in the course, a dedicated Relationships Manager will be provided to support you throughout the course completion period.'
      },
      {
          number: '03',
          title: 'Follow 3A',
          description: '3A (Attendance, Assignment & Assessment) is a learning model designed by us where students have to score minimum 90%.'
      },
      {
          number: '04',
          title: 'Projects',
          description: 'Being one of the most desired IT Training Institutes, we provide our students with 30+ Industry oriented projects and case studies to make our students industry-ready professionals.'
      },
      {
          number: '05',
          title: 'Interviews',
          description: 'A total of 150+ mocks are planned for each student to prepare them for technical interviews.'
      },
      {
          number: '06',
          title: 'Job',
          description: 'Itvedant being a trustworthy Software Training Institute, starts working on the interviews for the students’ placements soon after their course completion.'
      }
  ];

  return (
      <div className="cards-container">
          {cardData.map(card => (
              <Card 
                  key={card.number}
                  number={card.number}
                  title={card.title}
                  description={card.description}
              />
          ))}
      </div>
  );
};

export default Cards;