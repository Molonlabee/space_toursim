import React, { Component } from 'react';
import axios from 'axios';
import img from '../assets/crew/image-douglas-hurley.png';

export default class Crew extends Component {
  constructor(){
    super();
    this.state = {
      crew:[{}],
      staffInfo:{
        "name": "Douglas Hurley",
        "images": {
          "png": "./assets/crew/image-douglas-hurley.png",
          "webp": "./assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      }   
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:3005/crew')
    .then(response =>{
      this.setState({crew:response.data})
    })
    .catch(err => console.log('Error'))
  }

  getCrew=(id)=>{
    const {crew, staffInfo} = this.state;

    let staff = crew.find((staff)=>{
      return staff.id === id + 1;
    })
    this.setState({staffInfo: staff})
    console.log('staffInfo: ', staffInfo);
  }
  
  
  render() {
    const {staffInfo, crew} = this.state;

    const mappedCrew = crew.map((staff, id) =>(
      <button
      onClick={()=> this.getCrew(id)}
      key={id}>
        <span className='sr-only'>Slide title{crew.name}</span>
      </button>
    ))

    return (
      <div className='crew fill center'>
        <div className='container'>
          <div className='container left-side flow'>
            <div className='grid'>
              <h2 className='number-title'><span>02</span> Meet your crew</h2>
              <p className='text-accent fs-400'>{staffInfo.role}</p>
              <p className='text-white fs-700'>{staffInfo.name}</p>
              <p className='text-accent fs-400'>{staffInfo.bio}</p>

            </div>

            <div className='dot-indicators underline-indicators flex'>
              {mappedCrew}
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
