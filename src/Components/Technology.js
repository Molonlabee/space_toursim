import React, { Component } from 'react';
import axios from 'axios';
import img from '../assets/technology/image-launch-vehicle-portrait.jpg';

export default class Technology extends Component {
  constructor(){
    super();
    this.state = {
      technology: [],
      techInfo: {
        "id": 1,
        "name": "Launch vehicle",
        "images": {
          "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
          "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      }
      
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

  getTech = (id) => {
    const {technology, techInfo} = this.state;

    let tech = technology.find((tech) => {
      return tech.id === id + 1;
    })
    this.setState({techInfo: tech})
    console.log('techInfo: ', techInfo)
  }

  render() {
    const {technology, techInfo} = this.state;

    const mappedTech = technology.map((tech, id) =>(
      <button
      onClick={()=> this.getTech(id)}
      key={id}>
        {techInfo.id}
      </button>
    ))

    return (
      <div className='technology fill center'>
        <div className='container'>
          <div className='container left-side flow'>
            <h2 className='number-title'><span>03</span> Space launch 101</h2>
            <div className='flex'>

              <div className='number-indicators underline-indicators grid'>
                {mappedTech}
                {/* <button aria-selected='true'>1</button>
                <button aria-selected='false'>2</button>
                <button aria-selected='false'>3</button> */}
              </div>

              <div>
                <p className='text-accent fs-400'>The terminology...</p>
                <p className='text-white fs-700'>{techInfo.name}</p>
                <p className='text-accent fs-400'>{techInfo.description}</p>
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
