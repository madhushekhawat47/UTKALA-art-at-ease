import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CancelIcon from '@mui/icons-material/Cancel';
// import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const [details, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const detailPage = (FlashCard) => {
    setDetail([{ ...FlashCard }])
    setClose(true)
  }


  return (
    <>
      {
        close ?
          <div className="detail_container">
            <div className="detail_contant">
              <button className="close" onClick={() => setClose(false)}><CancelIcon /></button>
              {
                details.map((x) => {
                  return (
                    <>
                      <div className="detail_info">
                        <div className="img-box">
                          <img src={x.cover} alt={x.name}></img>
                        </div>
                        <div className="product_detail">
                          <h2>{x.name}</h2>
                          <h3> RS {x.price}</h3>
                          <p>{x.Des}</p>

                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div> : null
      }
      {/* <div className="detail_container">
        <div className="detail_contant">
          <button className="close" onClick={()=> setClose(false)}><CancelIcon /></button>
          {
            details.map((x) => {
              return (
                <>
                  <div className="detail_info">
                    <div className="img-box">
                      <img src={x.cover} alt={x.name}></img>
                    </div>
                    <div className="product_detail">
                      <h2>{x.name}</h2>
                      <h3> RS {x.price}</h3>
                      <p>{x.Des}</p>

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div> */}

      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount} % Off</span>
                  <img src={productItems.cover} alt='' height="180px" width="220px" onClick={() => detailPage(productItems)} />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>RS{productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>

                    </button>


                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
