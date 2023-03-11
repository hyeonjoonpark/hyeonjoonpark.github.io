/* eslint-disable */
import React, { Component } from 'react';
import nodeLogo from '../images/node.png';
import springBootLogo from '../images/springboot.png';
import reactjsLogo from '../images/reactjs.webp';
import mysqlLogo from '../images/mysql.png';
import cLogo from '../images/c.png';
import pythonLogo from '../images/python.png';
import javaLogo from '../images/java.png';
import jsLogo from '../images/js.png';

class Tech extends Component {
    render() {
        return (
            <div className='tech-wrap'>
                <section id='tech-section'>
                    <span className='tech-title-wrap'>My Framework</span>
                    <p>Hover to see</p>
                    <div className='img-wrap'>
                        <div><img src={nodeLogo} /></div>
                        <div><img src={springBootLogo} /></div>
                        <div><img src={reactjsLogo} /></div>
                        <div><img src={mysqlLogo} /></div>
                    </div>
                    <br/>
                    <span className='study-title-wrap'>Language</span>
                    <p>Hover to see</p>
                    <div className='img-wrap'>
                        <div><img src={cLogo} /></div>
                        <div><img src={pythonLogo} /></div>
                        <div><img src={javaLogo} /></div>
                        <div><img src={jsLogo} /></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Tech;