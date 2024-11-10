import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <Image
          className="img"
          src="/hero.png"
          alt="about-img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend  <span>Developer</span> </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem optio quidem enim natus, iusto ea cumque eaque blanditiis nemo id delectus assumenda pariatur quas maiores? Magnam accusantium velit tempore enim provident blanditiis totam nisi ad natus at eveniet porro quis quisquam aperiam asperiores illum optio sapiente quae, ducimus repellendus illo nam explicabo amet earum. Beatae accusantium iste velit dolor, molestiae repellat, aliquid molestias, aperiam eaque praesentium illum culpa sed facere.
        </p>
      </div>
    </section>
  );
};

export default About;
