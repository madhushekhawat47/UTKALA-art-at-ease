import React from "react"


const ShopByMaterial = () => {
    const data = [
        {
            cateImg: "./images/category/mug.png",
            cateName: "Coffee Mugs",
        },
        {
            cateImg: "./images/category/oilbottel.png",
            cateName: "Oil Bottles",
        },
        {
            cateImg: "./images/category/planterhanging.png",
            cateName: "Hanging Planters",
        },
        {
            cateImg: "./images/category/wallhanging.png",
            cateName: "Wall Hanging",
        },
        {
            cateImg: "./images/category/show.png",
            cateName: "Showpeices",
        },
        {
            cateImg: "./images/category/spices.png",
            cateName: "Spice Boxes",
        },

    ]

    return (
        <>
            <div className='cat'>
                <h2>Shop By Material</h2>
            </div>
            <div className='category'>
                {data.map((value, index) => {
                    return (<>
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    </>
                    )
                })}
            </div>
        </>
    )
}

export default ShopByMaterial