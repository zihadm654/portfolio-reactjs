import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const screenAnimation = (el) => {
  gsap.to(el, 1.3, {
    delay: 1,
    y: "-100%",
  });
};
export const staggerText = (el) => {
  gsap.from(el, 0.6, {
    delay: 0.1,
    opacity: 0,
    y: "-100%",
    stagger: {
      amount: 0.4,
    },
  });
};

export const VerticalScroll = (el) => {
  gsap.from(el, 0.8, {
    delay: 0.1,
    opacity: 0,
    y: 22,
    ease: Power3.easeOut,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      end: "bottom center",
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
      width: "0%",
      delay: 0.1,
      ease: Power3.easeOut,
    },
    {
      ease: Power3.easeOut,
      width: "100%",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "bottom center",
      },
    }
  );
};
export const textIntro = (el) => {
  gsap.from(el, 0.8, {
    opacity: 0,
    y: 45,
    delay: 0.2,
    ease: Power3.easeOut,
    stagger: {
      amount: 0.6,
    },
  });
};
export const fadeIn = (el) => {
  gsap.from(el, 0.8, {
    opacity: 0,
    delay: 0.2,
    y: 63,
    ease: Power3.inOut,
    stagger: {
      amount: 0.4,
    },
    scrollTrigger: {
      trigger: el,
      start: "center 85%",
      end: "bottom center",
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
      start: "top 90%",
      end: "bottom center",
    },
    stagger: { amount: 0.7 },
  });
};
// OPEN MENU
export const staggerReveal = (el) => {
  gsap.from(el, {
    duration: 0.8,
    height: 0,
    skewY: 2,
    transformOrigin: "right top",
    ease: "power3.easeOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
export const staggerRevealClose = (el) => {
  gsap.to(el, {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
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
    ease: "power3.inOut",
  });
};

export const up = (el) => {
  gsap.to(el, 1, {
    ease: "power3.easeOut",
    opacity: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      end: "bottom center",
      triggerAction: "play none none none",
      scrub: 0.5,
    },
  });
};
