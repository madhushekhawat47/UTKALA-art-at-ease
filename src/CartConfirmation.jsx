import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// Assuming AddressPopup is a reusable component for address entry
import AddressPopup from "./common/Cart/AddressPopup"
import StripeCheckout from "react-stripe-checkout";
import CancelIcon from '@mui/icons-material/Cancel';



const CartConfirmation = () => {
  const { outerArray, totalPrice } = useLocation().state || {};
  const cartItems = outerArray?.find((item) => item.id === 'cart-items')?.data || [];
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [addressDetails, setAddressDetails] = useState({});
  const history = useHistory();

  const handleAddressSubmit = (data) => {
    setAddressDetails(data);
    setIsPopupOpen(false);
    data.preventDefault();
  };

  return (

    <div className="cart-confirmation">
      <button onClick={() => history.push("/cart")} className="cartconfirmation-button"><CancelIcon /></button>
      <h2>Order Confirmation</h2>

      {isPopupOpen && (
        <AddressPopup
          closePopup={() => setIsPopupOpen(false)} // Allow closing the popup
          onSubmit={handleAddressSubmit}

        />
      )}

      {/* Access the cart items from the outer array, assuming the structure */}
      <div className="orderr">
        <h4>Order Details</h4>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="productdetails">
                  <img src={item.cover} alt={item.name} className="cartconfirmationimg" />
                  <h3>{item.name}, <span><b>[quantity : {item.qty} ]</b> </span> </h3>
                </div>

              </li>

            ))}
          </ul>
        ) : (
          <div>No items in your cart.</div>
        )}

      </div>
      {addressDetails.email && ( // Render address details conditionally
        <div className="delivertodetails">
          <h4>Deliver To </h4>
          <p>{addressDetails.email}</p>
          <p> {addressDetails.firstName} {addressDetails.lastName}</p>
          <p>{addressDetails.address}</p>
          <p> {addressDetails.city} ,  {addressDetails.state}</p>
          <p></p>
          <p> {addressDetails.pincode}</p>
          <p>{addressDetails.phoneNumber}</p>
          {/* <p>Total: RS {totalPrice}.00</p>/ */}

        </div>

      )}



      <style jsx>{`
      .blur-background
      {
        background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity for desired transparency */
    filter: blur(5px); /* Adjust blur amount as needed */
      }
            .cart-confirmation {

  padding: 20px;
  max-width: 700px;
  margin:auto;
  margin-top:20px;
  margin-bottom:20px;
  background-color: #dfafaf;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.address-details {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
}

.address-details p {
  margin-bottom: 5px;
  color: #666;
}

.address-details label {
  font-weight: bold;
  color: #007bff;
}

.cartconfirmation-button {
    background:none;
     color: black;
  border: none;
 margin-top:20px;
  padding: 10px 20px;
  padding-top:2px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.cartconfirmation-button:hover {
 color:white;
}
p
{
    color:rgb(59, 59, 59);
}
.cartconfirmationimg
{
  width:70px;
  padding-top:10px;
}
.delivertodetails
{
  padding-bottom:15px;
}

.productdetails
{
  display:flex;
  gap:15px;
}
.orderr
{
  padding-bottom:10px;
}
h3
{
  font-size: 17px;
  padding-top:22px;
  font-weight: lighter;
}
h4
{
  padding-top:10px;
  padding-bottom:10px;
}
span
{
  color:black;
  
}



            `}</style>

      <div>
        <h4> Total Price : {totalPrice}.00</h4>
      </div>
      <div className="cartconfirmationbuttons">
        <div className="paynow">
          <StripeCheckout
            stripeKey="pk_test_51OlC5jSAVdx4M2gU21rqAZHBb2gNJiEPX6WbB98WGN2L9duAyoJNUHtxJgeQiZjQp37ArtxTTSL4pPNq5N6kYTyC00B6pH38VO"
            name=" Pay To Utkala"
            // amount={totalPrice * 100}
            label="Pay Now"
            // description={`Your payment amount is :  RS${totalPrice}.00`}
            //  token={payment}
            email=" " />
        </div>

      </div>

    </div>
  );
};

export default CartConfirmation;