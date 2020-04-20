import React from 'react';
import html from './html5.png';
import css from './css.png';
import javascript from './javascript.png';
import bootstrap from './bootstrap.png';
import react from './react.png';
import nodejs from './nodejs.png';
import adonis from './adonis.png';
import ghost from './ghost.png';
import mysql from './mysql.png';
import github from './github.png';
import webstorm from './webstorm.png';
import microsoft from './microsoft.png';
import npm from './npm.png';
import json from './json.png';

const Skills = () => {
  return (
    <div>
      <section className="mw5 mw8-ns center bg-light-gray o-90 shadow-1 pa3 ph5-ns br3">
        <h1 className="mt2 mb0 baskerville i fw1 f1 black tl">Technology Stack</h1>
        <div className="cf pt4 flex justify-center flex-wrap">
          <div className="dib pa4-ns">
            <h2>Front-End</h2>
            <dl className="mt2 f4 lh-copy ">
              <dd className="ml0 black truncate w-100"><img src={html} alt='' className='w2'/> HTML5</dd>
              <dd className="ml0 black truncate w-100"><img src={css} alt='' className='w2'/> CSS3</dd>
              <dd className="ml0 black truncate w-100"><img src={javascript} alt='' className='w2'/> JavaScript</dd>
              <dd className="ml0 black truncate w-100"><img src={bootstrap} alt='' className='w2'/> Bootstrap</dd>
              <dd className="ml0 black truncate w-100"><img src={react} alt='' className='w2'/> React.js</dd>
            </dl>
          </div>
          <div className="dib pa4-ns">
            <h2>Back-End</h2>
            <dl className="mt2 f4 lh-copy ">
              <dd className="ml0 black truncate w-100"><img src={nodejs} alt='' className='w2'/> Node.js</dd>
              <dd className="ml0 black truncate w-100"><img src={adonis} alt='' className='w2'/> Adonis.js</dd>
              <dd className="ml0 black truncate w-100"><img src={ghost} alt='' className='w2'/> Ghost.js</dd>
            </dl>
          </div>
          <div className="dib pa4-ns">
            <h2>Databases</h2>
            <dl className="mt2 f4 lh-copy ">
              <dd className="ml0 black truncate w-100"><img src={mysql} alt='' className='w2'/> MySQL</dd>
            </dl>
          </div>
          <div className="dib pa4-ns">
            <h2>Other</h2>
            <dl className="mt2 f4 lh-copy ">
              <dd className="ml0 black truncate w-100"><img src={github} alt='' className='w2'/> Git & GitHub</dd>
              <dd className="ml0 black truncate w-100"><img src={webstorm} alt='' className='w2'/> WebStorm</dd>
              <dd className="ml0 black truncate w-100"><img src={microsoft} alt='' className='w2'/> Visual Studio Code</dd>
              <dd className="ml0 black truncate w-100"><img src={npm} alt='' className='w2'/> npm</dd>
              <dd className="ml0 black truncate w-100"><img src={json} alt='' className='w2'/> JSON</dd>
            </dl>
          </div>
        </div>
      </section>
      <hr className="ba b--black-025"/>
    </div>
  );
}

export default Skills;