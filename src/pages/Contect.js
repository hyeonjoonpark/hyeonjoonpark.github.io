/* eslint-disable */
import React, { Component } from 'react';
import githubLogo from '../images/github.png';
import instaLogo from '../images/instagram.png';
import emailLogo from '../images/email.png';

class Contect extends Component {
    render() {
        return (
            <div className="contect-wrap">
                <section id='contect-section'>
                    <div className='link'>
                        <div><img src={githubLogo} /><a href="https://github.com/hyeonjoonpark">Go to Github</a></div>
                    </div>
                    <div className='link'>
                        <div><img src={instaLogo} /><a href="https://instagram.com/jjoon1379">Go to Instagram</a></div>
                    </div>
                    <div className='link'>
                        <div><img src={emailLogo} /><a href="#">pjjoon1379@gmail.com</a></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contect;