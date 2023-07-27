import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="about-parent">
            <h2 className="about-header">About</h2>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <p>
            We build cooperative, caring relationships with pet owners through
            timely communication, client education, and a team approach to each
            pet's health, including the veterinarian, our support staff and the
            pet's family. Our goal is to support each pet throughout a long,
            fulfilling life with his or her family.
          </p>
          <ul>
            <li>
              <strong style={{ textDecoration: 'underline' }}>
                Dream Big:
              </strong>
              <p>
                This is not the place to constrain yourself. If you think you
                can easily achieve it in a couple years, aim higher.
              </p>
            </li>
            <li>
              <strong style={{ textDecoration: 'underline' }}>
                Your north star:
              </strong>
              <p>
                Ultimately everything including your values, actions, and
                mission ladder up to your vision. Use your vision to select your
                destination and point yourself in the right direction. The
                entire team should be aligned towards achieving this ideal.
              </p>
            </li>
            <li>
              <strong style={{ textDecoration: 'underline' }}>
                Exciting language:
              </strong>

              <p>
                Because unless you’re writing a dystopian sci-fi novel, your
                vision of the future should be something you look forward to!
              </p>
            </li>
            <li>
              <strong style={{ textDecoration: 'underline' }}>
                Simple as possible:
              </strong>
              <p>
                But not any simpler. Convey the idea as succinct as possible
                while still getting the point across.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
