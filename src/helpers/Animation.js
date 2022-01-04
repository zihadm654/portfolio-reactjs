import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const screenAnimation = (el) => {
  gsap.from(el, {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: Power3.easeOut,
  });
};
export const VerticalScroll = (el) => {
  gsap.from(el, 0.8, {
    delay: 0.1,
    opacity: 0,
    y: 40,
    ease: Power3.easeOut,
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      end: 'bottom center',
    },
    stagger: {
      amount: 0.4,
    },
  });
};
export const HorizontalScroll = (el) => {
  gsap.fromTo(
    el,
    1,
    {
      width: '0%',
      delay: 0.1,
      ease: Power3.easeOut,
    },
    {
      ease: Power3.easeOut,
      width: '100%',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'bottom center',
      },
    }
  );
};
export const textIntro = (el) => {
  gsap.from(el, 0.8, {
    opacity: 0,
    y: 45,
    delay: 0.3,
    ease: Power3.easeOut,
    stagger: {
      amount: 0.6,
    },
  });
};
export const fadeIn = (el) => {
  gsap.from(el, 0.8, {
    opacity: 0,
    delay: 0.1,
    y: 63,
    ease: Power3.inOut,
    stagger: {
      amount: 0.4,
    },
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      end: 'bottom center',
    },
  });
};
export const Links = (el) => {
  gsap.from(el, 0.7, {
    opacity: 0,
    delay: 0.7,
    y: 60,
    ease: Power3.easeOut,
    stagger: { amount: 0.1 },
  });
};
export const cardAni = (el) => {
  gsap.from(el, 1, {
    opacity: 0,
    x: 50,
    ease: Power3.easeOut,
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      end: 'bottom center',
    },
    stagger: { amount: 0.7 },
  });
};
// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.easeOut',
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: 'power3.easeOut',
    transformOrigin: 'right top',
    stagger: {
      amount: 0.1,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: Power3.easeOut,
    stagger: {
      amount: 0.3,
    },
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: 'power3.inOut',
  });
};

// work windmill
export const loaderAni = (el) => {
  gsap.to(el, 1, {
    delay: 0.2,
    opacity: 0,
    y: -60,
    ease: Power3.easeOut,
    stagger: {
      amount: 0.8,
    },
  });
};
export const blink = (el) => {
  gsap.fromTo(
    el,
    1,
    {
      delay: 0.3,
      opacity: 1,
      ease: 'power3.easeOut',
      stagger: {
        amount: 0.8,
      },
    },
    {
      delay: 0.3,
      ease: 'power3.easeOut',
      opacity: 0,
      stagger: {
        amount: 0.8,
      },
    }
  );
};
export const up = (el) => {
  gsap.to(el, 1, {
    ease: 'power3.easeOut',
    opacity: 1,
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      end: 'bottom center',
      triggerAction: 'play none none none',
      scrub: 0.5,
    },
  });
};
