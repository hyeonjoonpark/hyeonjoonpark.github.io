import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="home-wrap">
                <span id='item-section'>
                    <section className='item-wrap'>
                        <span className='home-title-wrap'>hyeonjoonpark</span>
                        <p className='sub-title-wrap'>SW Developer Who likes Basketball 🏀</p>
                    </section>
                </span>
            </div>
        );
    }
}

export default Item;