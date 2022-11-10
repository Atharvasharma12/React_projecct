import React from 'react';
import Standimage from './stand.png'
import "./HomeSection.css";

function HomeSection() {
  return (

    
    <section className='home'>
    <div className='standParent'>

      <img src={Standimage} className="stand" alt=""></img>
    </div>

    </section>
  )
}

export default HomeSection;