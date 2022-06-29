import '../styles/scss/main.scss';

gsap.registerPlugin(DrawSVGPlugin);
gsap.from('.figure-1', { duration: 4, stagger: 0.1, drawSVG: 0 });
gsap.from('.figure-2', { duration: 4, stagger: 0.1, drawSVG: '50% 50%' });
gsap.from('.figure-3', { duration: 4, stagger: 0.1, drawSVG: 0 });
