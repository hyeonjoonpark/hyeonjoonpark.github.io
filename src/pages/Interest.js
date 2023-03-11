/* eslint-disable */

import React, { Component } from 'react';
import basketball from '../images/basketball.png';
import coding from '../images/code.webp';
import friend from '../images/friend.png';


class Interest extends Component {
    render() {
        return (
            <div className='interest-wrap'>
                <section id='interest-section'>
                    <div className='hobby'>
                        <img src={basketball} />
                        <p>I like playing basketball</p>
                        <p>My favorite player is Stephen Curry</p>
                        <p>Steph made me think about what I was good at</p>
                    </div>
                    <div className='hobby'>
                        <img src={coding} />
                        <p>I like writing code</p>
                        <p>I try to learn deeply</p>
                        <p>I try to be FullStack</p>
                    </div>
                    <div className='hobby'>
                        <img src={friend} />
                        <p>I like playing with my friends</p>
                        <p>I like to go restaurant with my friends</p>
                        <p>I like to Develope with my friends</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Interest;