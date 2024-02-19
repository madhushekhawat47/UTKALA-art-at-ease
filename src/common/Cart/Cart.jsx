import React from "react"
import "./style.css"
import { useHistory } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"



const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
  const history = useHistory();

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      RS {item.price}.00 * {item.qty}
                      <span>RS {productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className='c_flex'>
              <h4>Total Price :</h4>
              <h3>RS {totalPrice}.00</h3>



            </div>
            <div className="d_flexx" >
              <button className="proceedtocheckoutbutton" onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
                   {
                // payNow &&
                 <div className="w-full mt-6 flex items-center justify-center">
                  <StripeCheckout 
                    stripeKey="pk_test_51OlC5jSAVdx4M2gU21rqAZHBb2gNJiEPX6WbB98WGN2L9duAyoJNUHtxJgeQiZjQp37ArtxTTSL4pPNq5N6kYTyC00B6pH38VO"
                    name="Utkala"
                    amount={totalPrice*100}
                    label="Pay Now"
                    description={`Your payment amount is :  RS${totalPrice}.00`}
                    //  token={payment}
                    email="bankakhushi123@gmail.com"

                 />
                  </div>
              }
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
