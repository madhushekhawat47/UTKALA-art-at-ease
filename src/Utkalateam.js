/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AboutUs.css"
import Abhilasha from "./Abhilasha.jpeg"
import Palak from "./Palak.jpeg"
import Khushi from "./Khushi.jpeg"
import Madhu from "./Madhu.jpeg"

function Utkalateam() {
    let message = "IT IS AN E-COMMERCE WEBSITE BASED ON HANDICRAFT ITEMS. HERE WE WANT TO CONNECT LOCAL ARTISTS AND INCREASE THE MARKET BY CONNECTING THEM TO MILLIONS OF PEOPLE. HERE MY MAIN MOTO IS TO PROVIDE UNPOPULAR HANDICRAFT ITEMS TO EVERY CORNER. \n TAG LINE: HANDICRAFT STORIES, DELIVERED TO YOUR DOOR.";
    return (
        <section class="section-white">

            <div class="containers">


                <div class="col-md-12 text-center">

                    <h2 class="section-title">The Team Behind Utkala</h2>

                    <p class="section-subtitle">{message}</p>

                </div>

                <div class="rows">



                    <div class="team-intro">

                        <div class="team-item">

                            <img src={Madhu} class="team-img" alt="pic" />
                            <h3>Madhu Shekhawat</h3>
                            <div class="team-info"><p>Frontent Developer</p></div>
                            <p>Johnathan is our  co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

                            <ul class="team-icon">

                                <li><a href="#" class="twitter">
                                    <i class="fa fa-twitter"></i>
                                </a></li>

                                <li><a href="#" class="pinterest">
                                    <i class="fa fa-pinterest"></i>
                                </a></li>

                                <li><a href="#" class="facebook">
                                    <i class="fa fa-facebook"></i>
                                </a></li>

                                <li><a href="#" class="dribble">
                                    <i class="fa fa-dribbble"></i>
                                </a></li>

                            </ul>


                        </div>
                    </div>

                    <div class="team-intro">

                        <div class="team-item">

                            <img src={Palak} class="team-img" alt="pic" />

                            <h3>Palak Agarwal</h3>

                            <div class="team-info"><p>Frontent Developer</p></div>

                            <p>Graduating with a degree in and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency. our palakour palakt4uy6tuu5</p>

                            <ul class="team-icon">

                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>

                                <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>

                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>

                                <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>

                            </ul>

                        </div>

                    </div>
                    <div class="team-intro">

                        <div class="team-item">

                            <img src={Khushi} class="team-img" alt="pic" />

                            <h3>Khushi Banka</h3>

                            <div class="team-info"><p>Backend Developer</p></div>

                            <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

                            <ul class="team-icon">

                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>

                                <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>

                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>

                                <li><a href="#" class="dribble">
                                    <i class="fa fa-dribbble"></i>
                                </a></li>

                            </ul>

                        </div>



                    </div>
                    <div class="team-intro">

                        <div class="team-item">

                            <img src={Abhilasha} class="team-img" alt="pic" />

                            <h3>Abhilasha Nehra</h3>

                            <div class="team-info"><p>Researching Manager</p></div>

                            <p>Elisa first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>

                            <ul class="team-icon">

                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>

                                <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>

                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>

                                <li><a href="#" class="dribble">
                                    <i class="fa fa-dribbble"></i>
                                </a></li>

                            </ul>

                        </div>



                    </div>

                </div>

            </div>

        </section>
    )
}

export default Utkalateam;