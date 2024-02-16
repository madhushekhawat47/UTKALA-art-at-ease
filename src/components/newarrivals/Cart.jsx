import React, { useState } from "react"
import Ndata from "./Ndata"
import CancelIcon from '@mui/icons-material/Cancel';
import "../../common/Cart/Cart.jsx";

const Cart = ({ addToCart }) => {

  const [details, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const [cart, setCart] = useState([]);
  const detailPage = (Cart) => {
    setDetail([{ ...Cart }])
    setClose(true)
  };
  const handleAddToCart = (Ndata) => {
    addToCart(Ndata); // Assuming addToCart is a function that updates the cart in the parent component
    setCart([...cart, Ndata]); // Update the cart state in the Cart component
  };



  return (
    <>
      {
        close ?
          <div className="detail_container">
            <div className="detail_contant">
              <button className="close" onClick={() => setClose(false)}><CancelIcon /></button>
              {
                details.map((Ndata) => {
                  return (
                    <>
                      <div className="detail_info">
                        <div className="img-box">
                          <img src={Ndata.cover} alt={Ndata.name}></img>
                        </div>
                        <div className="product_detail">
                          <h2>{Ndata.name}</h2>
                          <h3> RS {Ndata.price}</h3>
                          <p>{Ndata.Des}</p>
                          <button onClick={() => handleAddToCart(Ndata)}>
                            Add To Cart
                          </button>



                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div> : null
      }
      <div className='content grid product'>
        {Ndata.map((Ndata) => {
          return (
            <div className='box' key={Ndata}>
              <div className='img'>
                <img src={Ndata.cover} alt={Ndata.name} onClick={() => detailPage(Ndata)} />
              </div>
              <h4>{Ndata.name}</h4>
              <span>RS {Ndata.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
