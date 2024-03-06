
import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import Typed from 'react-typed';
import { headerData } from '../../../data/headerData';
import './landing.css';
import photo from '../../../assets/svg/photo.jpg'

import {
    FaGithub, FaLinkedin, FaInstagram 
} from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { contactsData } from '../../../data/contactsData';
import { useNavigate } from 'react-router-dom';

function LandingUI({ theme, drawerOpen, classes }) {
    const navigate = useNavigate();

    return (
        <div className='landing' style={{ backgroundColor: theme.quaternary }}>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className='lcl--content'>
                        {contactsData.linkedIn && (
                            <a
                                href={contactsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social linkedin-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {contactsData.github && (
                            <a
                                href={contactsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {contactsData.instagram && (
                            <a
                                href={contactsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram 
                                    className='landing--social twitter-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {contactsData.leetcode && (
                            <a
                                href={contactsData.leetcode}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <TbBrandLeetcode
                                    className='landing--social facebook-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                        {contactsData.gfg && (
                            <a
                                href={contactsData.gfg}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <SiGeeksforgeeks
                                    className='landing--social facebook-icon'
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={photo}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.primary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                        <h1>{headerData.name}</h1>
                        <Typed
                            strings={[
                                'Backend Developer',
                                'Frontend Developer',
                                'Fullstack Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-header"
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {/* {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                </a>
                            )} */}
                            <button className={classes.resumeBtn} onClick={() => navigate('/resume')}>
                                View CV
                            </button>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <button className={classes.contactBtn}>
                                    Contact
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LandingUI;