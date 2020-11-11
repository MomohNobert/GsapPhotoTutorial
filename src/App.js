import { useEffect, useRef } from 'react';
import './App.scss';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import gsap, { TimelineLite, Power2 } from 'gsap';

import Photo from './images/photo.jpg';

gsap.registerPlugin(CSSRulePlugin);

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.img-container:after');

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, {css: {visibility: 'visible'}, duration: 0})
    .to(imageReveal, {width: '0%', ease: Power2.easeInOut, duration: 1.4})
    .from(image, {scale: 1.6, duration: 1.6, ease: Power2.easeOut, delay: -1.6})
  })

  return (
    <section className="main">
      <div className="container" ref={el => container = el}>
        <>
          <div className="img-container">
            <img src={Photo} alt="people" ref={el => image = el} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
