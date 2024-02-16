import React from 'react'
import Productdata from './Productdata'
import Footer from "./common/footer/Footer"


const ProductListingPage = () => {
    console.log(Productdata);
    const listItems = Productdata.map((items) =>
        <div className='utkalamaincontentcard' key={items.id}>
            <div className='utkalamaincontentcardimg'>
                <img src={items.thumb} alt='' width="370px" height="320px"></img>
            </div>
            <div className='utkalamaincontentcardheader'>
                <h2>{items.product_name}</h2>
                <p>{items.desc}</p>
                <p className='utkalamaincontentprice'>{items.cur} <span>{items.price}</span></p>
                <div className='utkalamaincontentbtn' >Add to Cart</div>
            </div>


        </div>

    );
    return (
        <>
            <div className='utkalamaincontentheader'>
                <h2> More Products</h2>
                <p>A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by one's hand or by using only simple, non-automated related tools like scissors, carving implements, or hooks. </p>
                <hr></hr>

            </div>
            <div className="utkalamaincontentproduct">
                {listItems}
            </div>

            {/* <div className='utkalamaincontentfooter'>
                &copy; copyright @ 2024 by <span>UTKALA</span> | all rights reserved!
            </div> */}
            <Footer />
        </>
    )
}

export default ProductListingPage
