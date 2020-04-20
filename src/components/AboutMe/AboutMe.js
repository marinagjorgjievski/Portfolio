import React from 'react';
import profile from './profile.png';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <section className="mw5 mw8-ns center pa3 ph5-ns br3 shadow-1 bg-light-gray o-90">
        <h1 className="mt2 mb0 baskerville i fw1 f1 black tl">About Me</h1>
        <article className="cf pt2">
          <div className="dib">
          <img className="br-100 dib grow" src={profile} alt="profile-img" />
          </div>
          <div className="dib b--transparent">
          <p className="lh-copy black">
            {`Freelance Web Developer based in Macedonia. 
            I am a developer who enjoys working in front-end development but also gets a kick out of back-end development.
            I create custom websites to help businesses do better online.
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.`}
          </p>
          <p className="lh-copy black">
            {`Тake a look at some of my projects below `}<i className="fa fa-arrow-down" aria-hidden="true"></i>
          </p>
          </div>
        </article>
      </section>
      <hr className="ba b--black-025"/>
    </div>
  );
}

export default AboutMe;