import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contacter-moi</h1>
                    <ul>
                        <li>
                            <i className="fa fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0624037104">
                                <span
                                    className="clickInput"
                                    onClick={() => {alert('Telephone copie !');}}>06 24 03 71 04</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="solykim@gmail.com">
                                <span
                                    className="clickInput"
                                    onClick={() => {alert('Email copie !');}}>solykim@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNtework">
                    <ul>
                        <a href="https:www.linkdin.fr" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="http://www.github.com" taget="_blank"
                            rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.twitter.com" taaget="_blank"
                        rel="noopener noreferrer">
                            <h4>twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.codepen.fr" target="_blank"
                        rel="noopener noreferrer">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;