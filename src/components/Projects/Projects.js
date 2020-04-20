import React from 'react';
import Tilt from 'react-tilt';
import praveko from './praveko.png';
import balkanBeauties from './balkan-beauties.png';
import finance from './finance.png';
import foodRecognition from './food-recognition.png';
import goodFood from './good-food.png';

const Projects = () => {
  return( 
    <div>
      <section className="mw5 mw8-ns center bg-light-gray o-90 shadow-1 pa3 ph5-ns br3">
        <article>
          <h1 className="mt2 mb0 baskerville i fw1 f1 black tl">Projects</h1>
          <div className="cf pt2">
            <div className="dib pa2">
              <a href="https://praveko.mk/" className="db link tc hide-child">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }}>
                  <div className="Tilt-inner"><img src={praveko} alt="Praveko" className="w-100 db outline black-10 br2"/></div>
                </Tilt>
                <dl className="mt2 f4 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">Praveko</dd>
                </dl>
              </a>
            </div>

            <div className="dib pa2">
              <a href="https://github.com/marinagjorgjievski/balkan-beauties" className="db link tc">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }}>
                  <div className="Tilt-inner"> <img src={balkanBeauties} alt="Balkan Beauties" className="w-100 db outline black-10"/></div>
                </Tilt>
                <dl className="mt2 f4 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">Balkan Beauties</dd>
                </dl>
              </a>
            </div>
            <div className="dib pa2">
              <a href="https://github.com/marinagjorgjievski/finance" className="db link tc">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }}>
                  <div className="Tilt-inner"> <img src={finance} alt="Finance" className="w-100 db outline black-10"/></div>
                </Tilt>
                <dl className="mt2 f4 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">Finance</dd>
                </dl>
              </a>
            </div>
            <div className="dib pa2">
              <a href="https://marinagjorgjievski.github.io/food-recognition/" className="db link tc">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }}> 
                  <div className="Tilt-inner"> <img src={foodRecognition} alt="Food Recognition" className="w-100 db outline black-10"/></div>
                </Tilt>
                <dl className="mt2 f4 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">Food Recognition</dd>
                </dl>
              </a>
            </div>
            <div className="dib pa2">
              <a href="https://github.com/marinagjorgjievski/goodfood" className="db link tc">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }}> 
                  <div className="Tilt-inner"> <img src={goodFood} alt="Good Food" className="w-100 db outline black-10"/></div>
                </Tilt>
                <dl className="mt2 f4 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100">Good Food</dd>
                </dl>
              </a>
            </div>
          </div>
        </article>
      </section>  
      <hr className='ba b--black-025'/>
    </div>
  );
}

export default Projects;