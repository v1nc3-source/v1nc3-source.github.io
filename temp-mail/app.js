tsParticles.load("tsparticles", {
    "background": {
      "color": {
        "value": "#5372f0"
      },
      "image": "url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gi')",
      "position": "0 3%",
      "repeat": "no-repeat",
      "size": "36%",
      
    },
    "fullScreen": {
      "enable": false,
      "zIndex": 1
    },
    "detectRetina": false,
    "fpsLimit": 5,
    "interactivity": {
      "events": {
        "onClick": {
          "enable": false,
          "mode": "repulse"
        },
        "onHover": {
          "mode": "grab",
          "parallax": {
            "enable": false,
            "smooth": 90
          }
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 8,
          "size": 40
        },
        "grab": {
          "distance": 200
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "direction": "left",
        "enable": true,
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 6,
        "spin": {},
        "straight": true
      },
      "opacity": {
        "value": 0.5,
        "animation": {
          "speed": 1,
          "minimumValue": 0.1
        }
      },
      "shape": {
        "options": {
          "star": {
            "sides": 5
          },
          "polygon": {
            "sides": 5
          }
        },
        "type": "star"
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 4
        },
        "animation": {
          "speed": 40,
          "minimumValue": 0.1
        }
      }
    }
  });