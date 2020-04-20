import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="mw5 mw8-ns center bg-light-gray o-90 shadow-1 pa3 ph5-ns br3">
        <h1 className="mt2 mb0 baskerville i fw1 f1 black tl">Contact</h1>
        <div className="text-center pt4">
        <p className="light-black">{`marina.gjorgjievski@outlook.com`}</p>
        </div>
        <hr />
        <div className="ma3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="f2 fw6 black link hover-dark-red grow"
            href="mailto:marina.gjorgjievski@outlook.com"
            >Call to Action
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;