import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const AddressPopup = ({ closePopup, onSubmit }) => {


    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email,
            firstName,
            lastName,
            address,
            city,
            state,
            pincode,
            phoneNumber,
        });
        history.push("/CartConfirmation");
        closePopup();
    };

    return (
        <div className="popup">
            <h2> Please Enter your address details !</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        className="input-field"
                        required
                    />
                </div>
                <div className='first-last-name'>
                    <div className="form-group1">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className='fulladdress'>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}

                            className="input-field" required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pincode">Pin Code:</label>
                        <input
                            type="number"
                            id="pincode"
                            maxLength={6} // Enforces maximum length
                            pattern="[0-9]{1,6}" // Accepts exactly 6 digits
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        pattern="[0-9]{10,12}"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}

                        className="input-field" required
                    />
                </div>
                <div className='submit-close'>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>

                    <button onClick={closePopup} className="close-button">
                        Close
                    </button>

                </div>
            </form>
            <style jsx>{`
            .popup {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              z-index: 10;
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(0, 0, 0, 0.9); /* Inner and outer shadow */
            }
        
            
    
            h2 {
              text-align: center;
              margin-bottom: 20px;
              color:#E94560;
            }
    
            .input-field {
              display: block;
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              margin-bottom: 15px;
              font-size: 16px;
            }
            .form-group1{
                width: 280px
            }
    
            .first-last-name{
                display: flex;
                width: 100%;
                gap: 30px;
                {/* justify-content: space-evenly; */}
            }
    
            .fulladdress{
                display: flex;
                gap: 10px;
            }
    
            .submit-close{
                display: flex;
                gap: 65px
            }
            .submit-button,
            .close-button {
              display: inline-block;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              display:flex;
             
            }
    
            .submit-button {
              background-color: #ff3333;
              color: #fff;
              margin-left: 20px;
              margin-left: 170px;
            }
    
            .close-button {
              background-color: #ffcccc;
              color: #000;
              {/* margin-right: 150px; */}
            }
          `}</style>
        </div>
    );
};

export default AddressPopup;


