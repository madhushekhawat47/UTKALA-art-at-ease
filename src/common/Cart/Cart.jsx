import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
//import StripeCheckout from "react-stripe-checkout";
//import AddressPopup from "./AddressPopup";// Import the AddressPopup component


const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // const [isPopupOpen, setIsPopupOpen] = useState(true); // Pre-open the popup
  // const [addressDetails, setAddressDetails] = useState({});  // Initialize address state

  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);
  const history = useHistory();

  const handleCheckoutClick = (event) => {
    const cartData = {
      outerArray: [
        { id: 'cart-items', data: CartItem }, // Replace with actual structure
      ],
      totalPrice,
    };
    history.push("/CartConfirmation", cartData);
    event.preventDefault();
  };
  // const handleAddressSubmit = (data) => {
  //   setAddressDetails({ ...data }); // Update address state
  //   setIsPopupOpen(false); // Close the popup
  // };
  // const handleAddressSubmit = (data) => {
  //   setAddressDetails(data); // Store the submitted address details
  //   setIsPopupOpen(false); // Close the popup
  // };

  // const handlePayment = (token) => {
  //   // Implement payment logic using the token
  //   console.log("Payment processed:", token);
  // };


  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>


          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}


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
          {/* {isPopupOpen && (
            <AddressPopup
              closePopup={() => setIsPopupOpen(false)}
              onSubmit={handleAddressSubmit}
            />
          )} */}

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="c_flex">
              <h4>Total Price :</h4>
              <h3>RS {totalPrice}.00</h3>
            </div>
            <div className="d_flexx">
              <button className="proceedtocheckoutbutton" onClick={handleCheckoutClick}>
                Proceed to Checkout
              </button>
            </div>
            {/* {addressDetails.email && ( // Render address details on a new page
              <div>
                <h2>Order Confirmation</h2>
                <p>Email: {addressDetails.email}</p>
                <p> First Name: {addressDetails.firstName}</p>
                <p> Last Name: {addressDetails.lastName}</p>
                <p>Address: {addressDetails.address}</p>
                <p>City: {addressDetails.city}</p>
                <p>State: {addressDetails.state}</p>
                <p>Pin Code : {addressDetails.pincode}</p>
                <p>Phone Number : {addressDetails.phoneNumber}</p>
                <p>Total: RS {totalPrice}.00</p>
                <button onClick={() => history.push("/")}>Go Back</button>
              </div>
            )} */}

            {/* <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51OlC5jSAVdx4M2gU21rqAZHBb2gNJiEPX6WbB98WGN2L9duAyoJNUHtxJgeQiZjQp37ArtxTTSL4pPNq5N6kYTyC00B6pH38VO"
                name="Utkala"
                amount={totalPrice * 100}
                label="Pay Now"
                description={`Your payment amount is :  RS${totalPrice}.00`}
                //  token={payment}
                email=" " />
            </div> */}

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
