
const particlesConfig = {

    particles: {
      number: {
        value: 52,
        density: {
          enable: false,
          value_area: 710.2342786683108
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#a4a4a4"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.19728729963008632,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: true
        }
      },
      size: {
        value: 3.945745992601726,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 236.7447595561036,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 561.192534135037,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };

export default particlesConfig ;