import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <div className='header-wrap'>
                    <span className='header-title'>
                        <a href="/">hyeonjoonpark</a>
                    </span>
                    <div className='navigation-wrap'>
                        <span className='navigation-title'><a href="#item-section">About</a></span>
                        <span className='navigation-title'><a href="#tech-section">My Tech</a></span>
                        <span className='navigation-title'><a href="#interest-section">Interest</a></span>
                        <span className='navigation-title'><a href="#contect-section">Contect</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;