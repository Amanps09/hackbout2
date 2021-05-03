import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Particles from 'react-particles-js';

import HackBout from '../../assets/HackBout.svg';
import './Landing.css';

const Landing = () => {
  useEffect(() => {
    if (window.innerWidth > 700) {
      const landImg = document.querySelector('.landing__logo');
      VanillaTilt.init(landImg, {
        glare: true,
        scale: 1.03,
      });
    }

    document.addEventListener('DOMContentLoaded', function () {
      let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'hackbout2',
      };

      let script = document.createElement('script');
      script.src = 'https://apply.devfolio.co';
      document.head.append(script);

      script.onload = function () {
        // eslint-disable-next-line no-undef
        new Devfolio(devfolioOptions);
      };

      script.onerror = function () {
        document
          .querySelector(devfolioOptions.buttonSelector)
          .addEventListener('click', function () {
            window.location.href =
              'https://devfolio.co/external-apply/' + devfolioOptions.key;
          });
      };
    });
  }, []);

  return (
    <section id="landing" className="landing">
      <Particles
        id="particles"
        params={{
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#6e6e6e',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: '#000',
              },
              polygon: {
                nb_sides: 10,
              },
              image: {
                src: '',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.10258919341219544,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 160,
              random: false,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: '#ffffff',
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 6.313181133058181,
              direction: 'top-right',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: false,
                mode: 'grab',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <article className="landing__container">
        <div className="landing__sub-1">
          <h1 className="landing__heading">HACKBOUT</h1>
          <h2 className="landing__sub-heading">
            A{' '}
            <strong>
              Hack Club <span className="green">NMIT's</span>
            </strong>{' '}
            Hackathon
          </h2>
          <h2 className="landing__sub-heading green">19th-20th June</h2>
          {/* <h4 className="landing__sub-heading-2">
            Registrations opening soon!
          </h4> */}
          <button id="devfolio-apply-now" className="devfolioApplyNow">
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 115.46 123.46"
              style={{ height: '24px', width: '24px', marginRight: '0px' }}
            >
              <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" />
              <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z" />
            </svg>
            Apply with Devfolio
          </button>
          {/* <a
            href="https://forms.gle/1bQ9b9TKh1hyX4F58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="landing__btn">Notify Me!</button>
          </a> */}
        </div>

        <div className="landing__sub-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hex__back-1"
            width={347}
            height={400}
            filter="drop-shadow(rgba(255,255,255,.5) 0 0 10px)"
          >
            <path
              fill="#1c905cd3"
              d="M158.483 8.5q14.722-8.5 29.445 0l143.76 83Q346.41 100 346.41 117v166q0 17-14.722 25.5l-143.76 83q-14.723 8.5-29.445 0l-143.76-83Q0 300 0 283V117q0-17 14.722-25.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={373}
            height={430}
            filter="drop-shadow(rgba(255,255,255,.5) 0 0 10px)"
            className="hex__back-2"
          >
            <path
              fill="#1c905c5e"
              d="M171.473 8.5q14.722-8.5 29.445 0L357.668 99q14.723 8.5 14.723 25.5v181q0 17-14.723 25.5l-156.75 90.5q-14.723 8.5-29.445 0L14.723 331Q0 322.5 0 305.5v-181q0-17 14.722-25.5z"
            />
          </svg>

          <div className="landing__sub-2">
            <img src={HackBout} alt="hackbout-logo" className="landing__logo" />
          </div>
        </div>
      </article>
      <div className="custom-shape-divider-bottom-1618824420">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Landing;
