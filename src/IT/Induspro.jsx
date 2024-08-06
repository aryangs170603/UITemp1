import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Induspro.css';
import aiLogo from '../Logos/Relatedgifs/artificial-intelligence (1).gif';
import clLogo from '../Logos/Relatedgifs/cloud--network.gif';
import codeLogo from '../Logos/Relatedgifs/coding.gif';
import compLogo from '../Logos/Relatedgifs/computer.gif';
import exchLogo from '../Logos/Relatedgifs/exchange.gif';
import javaLogo from '../Logos/Relatedgifs/java (1).gif';
import pieLogo from '../Logos/Relatedgifs/pie-chart.gif';
import setLogo from '../Logos/Relatedgifs/setting.gif';
import sciLogo from '../Logos/Relatedgifs/science.gif';
import phyLogo from '../Logos/Relatedgifs/physics.gif';

const Indusprocourses = [
  { name: 'Revealing the Power of Data', description: 'Here, in Excel, you need to find the vital stats of the departments such as weak spots and bottlenecks in the processes, and find ways to scale them up.', icon: aiLogo },
  { name: 'Human Resource Management System', description: 'This application helps the student complete their HR toolkit with the secure management of tracking and delivering HR documents, organizing personal records, payroll data, etc.', icon: pieLogo },
  { name: 'Vehicle Sales Analysis', description: 'The idea behind introducing this project in our Data Science & Analytics with AI Certification course is to understand how to analyze and generate Vehicle Sales Report and dive into the data of ‘total vehicles sold’, ‘total revenue generated’, seasonality of the revenue and so on.', icon: sciLogo },
  { name: 'Supply Chain & Logistics Analysis', description: 'In the Data Science & Analytics with Al,students will have a project where they will have to evaluate every stage of a supply chain starting from the time the business acquires raw materials or supplies from its suppliers to the delivery of the final product to the consumers.', icon: clLogo },
  { name: 'Face Detection', description: 'This is probably the most popular application of the computer version. Therefore, in our Data Science & Analytics with Al Course, we teach the technology that finds applications in various industries, such as security and social media. Thus, we are building a face detection project through OpenCV.', icon: compLogo },
  { name: 'Full-Stack Python', description: 'Full-stack development with Python', icon: codeLogo },
  { name: 'Full-Stack Java', description: 'Full-stack development with Java', icon: javaLogo },
  { name: 'PowerBI', description: 'Business intelligence with PowerBI', icon: setLogo },
  { name: 'Google Cloud Platform', description: 'Learn GCP from experts', icon: exchLogo },
  { name: 'Reactjs Framework', description: 'Learn Reactjs from Industry Experts', icon: phyLogo },
];

const Induspro = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <div className="induspro-container text-center">
      <div className="induspro-title">
        <h2>INDUSTRY PROJECT</h2>
      </div>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={handleSelect}
        interval={3000} // 3 seconds interval for automatic sliding
        indicators={false}
        controls={false}
        pause="hover" // Pause the carousel on hover
      >
        <Carousel.Item>
          <div className="induspro-grid">
            {Indusprocourses.slice(0, 5).map((induscourse, index) => (
              <div key={index} className="induspro-card">
                <div className="induspro-container">
                  <img src={induscourse.icon} alt={`${induscourse.name} icon`} className="induspro-icon" />
                </div>
                <h3>{induscourse.name}</h3>
                <p>{induscourse.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="induspro-grid">
            {Indusprocourses.slice(5, 10).map((induscourse, index) => (
              <div key={index} className="induspro-card">
                <div className="induspro-container">
                  <img src={induscourse.icon} alt={`${induscourse.name} icon`} className="induspro-icon" />
                </div>
                <h3>{induscourse.name}</h3>
                <p>{induscourse.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="induspro-radio-buttons">
        <input
          type="radio"
          name="carousel-radio"
          checked={carouselIndex === 0}
          onChange={() => handleSelect(0)}
        />
        <input
          type="radio"
          name="carousel-radio"
          checked={carouselIndex === 1}
          onChange={() => handleSelect(1)}
        />
      </div>
    </div>
  );
};

export default Induspro;