import React, { Component } from 'react';
import axios from 'axios';
import img from '../assets/destination/image-moon.png';

export default class Destination extends Component {
  constructor(){
    super();
    this.state = {
      destinations: [{}],
      planetInfo: {
          "id": 1,
          "name": "Moon",
          "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
          },
          "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          "distance": "384,400 km",
          "travel": "3 days"
      }
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:3005/destinations')
    .then(response =>{
      this.setState({destinations:response.data})
    })
    .catch(err => console.log('Error'))
    
  }
  
  getPlanet=(id)=>{
    const {destinations, planetInfo} = this.state
    
    let planet = destinations.find((destination)=> {
      return destination.id === id + 1;
    })
    
    this.setState({planetInfo: planet})
    console.log('planetInfo:', planetInfo)
  }
  
  render() {
    const {planetInfo, destinations} = this.state;

    const mappedDestinations = destinations.map((destination, id) =>(
      <button 
        onClick={()=> this.getPlanet(id)}
        key={id}
        className='uppercase ff-sans-cond text-accent bg-dark letter-spacing-2'>
          {destination.name}
      </button>
    ))

    return (
      <div className='destination fill center'>

        <div className='container'>
          <div className='left-side'>
            <h2 className='number-title'><span>01</span> Pick your destination</h2>
            <img src={img} />
          </div>

          <div className='right-side'>
            <div className='flow'>
              <div className='tab-list underline-indicators flex'>
                {mappedDestinations}
              </div>

              <p className='fs-800 ff-serif uppercase'>{planetInfo.name}</p>
              <p className='text-accent'>{planetInfo.description}</p>
            </div>
            
            <div className='flex'>
              <div>
                <p className='text-accent'>Avg. distance: </p>
                <p className='text-white fs-600'>{planetInfo.distance}</p>
              </div>
              <div>
                <p className='text-accent'>Est. travel time: </p>
                <p className='text-white fs-600'>{planetInfo.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}