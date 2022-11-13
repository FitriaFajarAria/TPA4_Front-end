import React from 'react'
import '../styles/Home.css'


const Home = (props) => {
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, My Name is {props.name}</h2>
    </div>
  </div>
  )
}

export default Home