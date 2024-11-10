'use client';
import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      imageSrc: '/interior.png',
      title: 'PearlVista',
      description: 'The Interior Design Portfolio showcases a collection of residential and commercial projects, focusing on creating aesthetically pleasing, functional spaces',
      link: 'https://interior-design-uneeza-ismails-projects.vercel.app/'
    },
    {
      id: 2,
      imageSrc: '/resume.png',
      title: 'Resume Builder',
      description: 'Whether youre in tech, finance, or any other industry, our platform makes creating a professional resume quick and easy. Just fill in your details and youre ready to impress.',
      link: 'https://shareable-resume-generator.vercel.app/'
    },
    {
      id: 3,
      imageSrc: '/coffee.png',
      title: 'Coffee Blog',
      description: ' The blog features a variety of articles discussing coffee beans, brewing techniques, product reviews, and stories from the coffee world.',
      link: 'https://coffee-blog-page.vercel.app/'
    },
  ];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-image">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <button className="project-button"><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
