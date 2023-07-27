import React from 'react';
const Contact = () => {
  return (
    <section id="contact">
      <h1 className="srv-h">Contact Information</h1>
      <p className="about-txt">Feel free to reach us!</p>
      <ul>
        <li>
          <span className="about-txt table-txt">
            Address: xxx/xx, Kirpal Nagar, Rohtak
          </span>
        </li>
        <li>
          <span className="about-txt table-txt">
            Phone number: +91 1234-5678-90, +91 1234-5678-90
          </span>
        </li>
      </ul>
      <p className="about-txt">Do follow us on:</p>
      <ul>
        <li>
          <a href="https://www.facebook.com" className="about-txt table-txt">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" className="about-txt table-txt">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="about-txt table-txt">
            Instagram
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
