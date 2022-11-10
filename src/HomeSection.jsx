import React from 'react';
import Standimage from './stand.png'
import "./HomeSection.css";

function HomeSection() {
  return (

    
    <section className='home'>
    <div className='standParent'>
      <img src={Standimage} className="stand" alt=""></img>
    </div>
      <img src="book1.jpg"  className="stand_book1" alt=""></img>

    </section>
  )
}

export default HomeSection;