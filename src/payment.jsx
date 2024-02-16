import React from 'react'
import "./payment.css"


const payment = ({ CartItem, addToCart, decreaseQty }) => {
    // Stpe: 7   calucate total of items


    return (


        < div className='payment' >
            <div className='payment__container'>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Deliver To</h3>
                    </div>
                    <div className='payment__address'>
                        <p>Madhu</p>
                        <p>Arya College of Engineering & IT </p>
                        <p>Kukas,Rajasthan,302028,India</p>
                        <p>Phone number : 8302073445</p>

                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className='payment__items'>

                    </div>
                </div>
                <div className='payment__section'>

                </div>
            </div>
        </div >

    )

}

export default payment
