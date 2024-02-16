import React from 'react'
import "./AboutUs.css"
import { Link } from 'react-router-dom';
import Image1 from "./img/aboutus1.png"
import Image2 from "./img/aboutus2.png";
import Image3 from "./img/aboutus3.png"
import Banner from "./img/Artisans.jpg"
import Banner1 from "./img/banner2.png"

function AboutUs() {
    return (
        <>
            <div className='aboutus_header'>
                <h3>
                    Unwrap moments of delight with every click. Discover handcrafted treasures made with love, where tradition meets innovation. <span>  Empowering Artisans</span>, enriching lives, one unique piece at a time.
                </h3>



            </div>
            <img src={Banner} alt="" className='aboutus_banner' />

            <div className='aboutus_divider'>
                <h6 className='aboutus_dividerss'>UTKALA</h6>
            </div>




            <div className='aboutus_maincontent'>
                <div>
                    <img src={Image1} alt=""></img>
                </div>
                {/* <div className='aboutus_headers'>
                    <h2> Who We Are </h2>
                </div> */}
                <div className='aboutus_rightcontent'>

                    <h2> Who We Are </h2>

                    <h5> we're not just selling handicrafts; we're sharing generations-old stories woven into every stitch, bead, and brushstroke. Each piece you see here is a labor of love, meticulously crafted by the skilled hands of artisans from vibrant communities across India.preserving the rich tapestry of Indian craftsmanship. What started as a small collection of handwoven scarves has blossomed into a haven for ethically sourced, handcrafted treasures. Every item you browse reflects the heritage and cultural nuances of its region. From the intricate embroidery of Gujarat to the vibrant block prints of Rajasthan, each piece embodies the unique skills and traditions passed down through generations.More than just aesthetics, our handicrafts are imbued with meaning. They carry the blessings of the artisans who poured their hearts and souls into creating them, and the whispers of the stories they hold dear.You're not just buying a product; you're supporting the livelihood of these communities and embracing their timeless cultural legacy.

                        We invite you to explore our collections, discover the stories behind each piece, and bring a touch of handcrafted magic into your life. Join us on this journey of celebrating cultural heritage, one stitch, bead, and brushstroke at a time.

                        <br />
                        <br />
                    </h5>
                    <h4>
                        Want to meet the talented artisans behind your favorite pieces? Visit our "Meet the Makers" page to learn their stories and see their craft come to life!
                    </h4>
                </div>

            </div>
            <div className='aboutus_divider'>
                <h6 className='aboutus_dividerss'>UTKALA</h6>
            </div>

            <div className='aboutus_maincontent'>

                <div className='aboutus_rightcontent'>
                    <h2>Women Empowerment</h2>

                    <h5>Each handcrafted treasure you see here is more than just a beautiful object; it's a testament to the skill, resilience, and entrepreneurial spirit of the women who created it. We partner with talented artisans from diverse communities, providing them with a platform to showcase their talent and earn a sustainable income.

                        By choosing <span>UTKALA</span>, you're not just buying a handcrafted item; you're making a powerful statement in support of women's empowerment. You're investing in their dreams, their families, and their communities.
                    </h5>
                    <h4>
                        Join us on this journey of empowerment, one beautiful creation at a time.
                    </h4>
                </div>

                <div>
                    <img src={Image2} alt='' />
                </div>


            </div>
            <div className='aboutus_divider'>
                <h6 className='aboutus_dividerss'>UTKALA</h6>
            </div>

            <div className='aboutus_maincontent'>

                <div>
                    <img src={Image3} alt='' />
                </div>
                <div className='aboutus_rightcontent'>

                    <h2>Made In INDIA</h2>

                    <h5>
                        Certainly! Here's the text condensed into a single paragraph:

                        Immerse yourself in the magic of India with handcrafted treasures made with love. Choose our Made in India collection and embrace authenticity - each piece is meticulously crafted by hand, carrying the stories and traditions of generations. Discover unique textiles, dazzling jewelry, and exquisite home decor, all reflecting India's diverse cultural tapestry. More than products, these are heirlooms for generations, empowering artisans and preserving heritage. Shop Made in India today and celebrate craftsmanship, bring warmth to your home, and make a conscious choice that makes a difference.
                    </h5>
                    <h4>
                        It's more than just shopping; it's an experience. Bring India Home and discover the magic for yourself.
                    </h4>
                </div>
            </div>
            <div className='aboutus_divider'>
                <h6 className='aboutus_dividerss'>UTKALA</h6>
            </div>
            <div className='aboutus_visionmission'>
                <img src={Banner1} alt='' />
                <div className='aboutus_visionmissioncontent'>
                    <div className='vision'>
                        <h3 className='aboutus_visionmissionheader'>Vision</h3>
                        <p>To be the leading online destination for exquisite, authentic Indian handicrafts, empowering artisans and preserving cultural heritage while connecting craft lovers worldwide.</p>
                    </div>
                    <div className='mission'>
                        <h3 className='aboutus_visionmissionheader'>Mission</h3>
                        <p>Empowering artisans, preserving heritage, delivering handcrafted magic: Tradition meets modernity in every exquisite creation.</p>
                    </div>


                </div>
            </div>
            <div className='aboutus_exploremore'>
                <Link to="/">Explore More </Link>
            </div>


        </>
    )
}

export default AboutUs;
