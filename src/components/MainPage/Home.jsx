import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>

          <SliderHome />
        </div>
        <div>
          <Categories />
        </div>
      </section>
    </>
  )
}

export default Home
