// main
const fadeVariant = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  },
};

const fadeTransition = {
  duration: 0.75
};

const springVariant = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '-100vH'
  },
};

const springTransition = {
  duration: 0.25,
  type: 'spring',
  stiffness: 40
};

const bSpringVariant = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '100vH'
  },
};

const bSpringTransition = {
  duration: 0.25,
  type: 'spring',
  stiffness: 40
};

const slideVariant = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0.5,
    x: '-8vH'
  },
};

const slideTransition = {
  duration: 0.5
};

export { fadeVariant, fadeTransition, springTransition, springVariant, bSpringTransition, bSpringVariant, slideTransition, slideVariant};
