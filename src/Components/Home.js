import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='home fill center'>
        {/* LEFT DESCRIPTION */}
        <div className='container'>
          <div className='left-side'>
            <h1 className='text-accent  fs-500 ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to</h1>
            <p className='fs-900 ff-serif text-white uppercase'>Space</p>
            <p className='text-accent'>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className='center right-side'>
            <a href='https://www.youtube.com/watch?v=_HGQZlK08gQ' target="_blank" className='large-button uppercase ff-serif fs-600 text-dark bg-white'>Explore</a>
          </div>
        </div>
      </div>
    )
  }
}
