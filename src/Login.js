import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
import ReactResizeDetector from 'react-resize-detector';
import Grid from '@material-ui/core/Grid';
import { Column } from 'simple-flexbox';
import imgLogin from './images/imgLogin.png';
import { Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    heightOfBrowser: window.innerHeight
  };
}
  onResize = () => {
    this.setState({
      heightOfBrowser: window.innerHeight
    })
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="Particles">
      <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
        <Particles height={this.state.heightOfBrowser}
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#000000"
              },
              "background-color": {
                value: "#ddbeed"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 112.2388442605866,
                color: "#000000",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 250,
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
          }}
          style={{
            background: `#e3f2fd`,
             position: 'absolute'
          }}
        />
      <Column flexGrow={1} style={{  position: 'absolute', background: '#ffffff', top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)", height: "60%", width: "45%", borderRadius: "15px"}}>

          <Row>
            <Col md={6}>md6
              </Col>
          <Col md={6}>
          md6</Col>
          </Row>

      </Column>
      </div>
    );
  }
}

export default Login;
