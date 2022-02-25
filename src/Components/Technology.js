import React, { Component } from 'react';
import axios from 'axios';
import img from '../assets/technology/image-launch-vehicle-portrait.jpg';

export default class Technology extends Component {
  constructor(){
    super();
    this.state = {
      technology: []
      
    }
  }
  componentDidMount(){
    axios
    .get('http://localhost:3005/technology')
    .then(response =>{
      this.setState({technology:response.data})
      console.log("technology array:",this.state.technology)
    })
  }

  render() {
    return (
      <div className='technology fill center'>
        <div className='container'>
          <div className='container left-side flow'>
            <h2 className='number-title'><span>03</span> Space launch 101</h2>
            <div className='flex'>

              <div className='number-indicators underline-indicators grid'>
                <button aria-selected='true'>1</button>
                <button aria-selected='false'>2</button>
                <button aria-selected='false'>3</button>
              </div>

              <div>
                <p className='text-accent fs-400'>The terminology...</p>
                <p className='text-white fs-700'>name</p>
                <p className='text-accent fs-400'>description</p>
              </div>
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
