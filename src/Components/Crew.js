import React, { Component } from 'react';
import axios from 'axios';
import img from '../assets/crew/image-douglas-hurley.png';

export default class Crew extends Component {
  constructor(){
    super();
    this.state = {
      crew:[{}]    
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:3005/crew')
    .then(response =>{
      this.setState({crew:response.data})
      console.log("crew array:",this.state.crew)
    })
  }
  
  
  render() {
    return (
      <div className='crew fill center'>
        <div className='container'>
          <div className='container left-side flow'>
            <div className='grid'>
              <h2 className='number-title'><span>02</span> Meet your crew</h2>
              <p className='text-accent fs-400'>role</p>
              <p className='text-white fs-700'>name</p>
              <p className='text-accent fs-400'>bio</p>

            </div>

            <div className='dot-indicators underline-indicators flex'>
                <button aria-selected='true'><span className='sr-only'>Slide title</span></button>
                <button aria-selected='false'><span className='sr-only'>Slide title</span></button>
                <button aria-selected='false'><span className='sr-only'>Slide title</span></button>
                <button aria-selected='false'><span className='sr-only'>Slide title</span></button>
            </div>
          </div>

          <div className='container right-side'>
            <img src={img} />
          </div>
        </div>
      </div>
    )
  }
}
