import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faDumbbell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import './HomePage.css';

function HomePage() {
    return (
        <div className="home-wrapper">
            <div className="centered-left">
                <section className="select-container">
                    <div className="row">
                        <Link to="/exercises" className="select-link">
                            <div className="select-box-container">
                                <div className="select-box">
                                    <FontAwesomeIcon icon={faRunning} className="select-icon" />
                                </div>
                                <div className="select-header-container">
                                    <h2 className="select-header">Exercises</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to="/create" className="select-link">
                            <div className="select-box-container">
                                <div className="select-box">
                                    <FontAwesomeIcon icon={faDumbbell} className="select-icon" />
                                </div>
                                <div className="select-header-container">
                                    <h2 className="select-header">New Workout</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to="/user" className="select-link">
                            <div className="select-box-container" id="select-box-right">
                                <div className="select-box">
                                    <FontAwesomeIcon icon={faUser} className="select-icon" />
                                </div>
                                <div className="select-header-container">
                                    <h2 className="select-header">Create User</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
                <section className="intro-container">
                    <div className="intro-left">
                        <div>
                            <div>
                                <h2 className="intro-header">What is <span className="intro-span-left">LIFE</span><span className="intro-span-right">Sports</span>?</h2>
                                <p className="intro-desc">LifeSports is a non-profit program in Charlotte, NC that combines education, mentorship, and sports to empower young kids to become the best they can be.</p>
                                <p className="intro-desc">This program includes both LifeHoops and LifeKicks. Learn more about them here:</p>
                            </div>
                            <div className="intro-button-group">
                                <button className="hoops-button"><a className="intro-button-link" href="https://lifesports.org/lifehoops/" target="_blank" aria-label="Visit Life Hoops">Life Hoops</a></button>
                                <button className="kicks-button"><a className="intro-button-link" href="https://lifesports.org/lifekicks/" target="_blank" aria-label="Visit Life Kicks">Life Kicks</a></button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="intro-right"></div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;