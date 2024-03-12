import { Container } from '@mui/material';
import React, { useContext } from 'react';
import codings from '../../../assets/lottie/coding.json';
import { ThemeContext } from '../../../contexts/theme-context';
import { aboutData } from '../../../data/aboutData';
import AnimationLottie from '../../helper/animation-lottie';
import './about.css';
import { Col } from 'react-bootstrap';

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.secondary }}>
            <Container className="about" id="about">
                <div className="line-styling">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className="about-body">
                    <div className="about-description">
                        <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                        {/* <p style={{ color: theme.tertiary }}>{aboutData.description1}<br /><br />{aboutData.description2}</p> */}
                        <Col md={8} className="home-about-description" style={{ color: theme.tertiary }}>
                            <p className="home-about-body">
                                I fell in love with programming and I have at least learnt
                                something, I think… 🤷‍♂️
                                <br />
                                <br />I am fluent in classics like
                                <i>
                                    <b className="purple" style={{color:"red"}}> C++, Javascript and SQL. </b>
                                </i>
                                <br />
                                <br />
                                My field of Interests are building new &nbsp;
                                <i>
                                    <b className="purple" style={{color:"red"}}>Web Technologies and Products </b> and
                                    also in areas related to{" "}
                                    <b className="purple" style={{color:"green"}}>
                                        Problem Solving(DSA).
                                    </b>
                                </i>
                                <br />
                                <br />
                                Whenever possible, I also apply my passion for developing products
                                with <b className="purple" style={{color:"red"}}>Node.js</b> and
                                <i>
                                    <b className="purple" style={{color:"red"}}>
                                        {" "}
                                        Modern Javascript Library and Frameworks
                                    </b>
                                </i>
                                &nbsp; like
                                <i>
                                    <b className="purple" style={{color:"red"}}> React.js and Next.js</b>
                                </i>
                            </p>
                        </Col>
                    </div>
                    <div className="about-animation">
                        <AnimationLottie animationPath={codings} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
