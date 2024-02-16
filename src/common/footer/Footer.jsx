import React from "react"
import "./style.css"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>UTKALA</h1>
            {/* <p> UTKALA is inspired by a generation that is highly connected with its roots. Hence, we have crafted this platform that connects you to the artisans of India and showcases their work by providing you with the best handicraft items online.</p> */}
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <Link to="/Utkalateam"><li>Utkala Team</li> </Link>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Kukas,Jaipur Rajasthan</li>
              <li>Email: utkala.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
