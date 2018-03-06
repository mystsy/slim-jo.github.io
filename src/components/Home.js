import React, { Component } from 'react';
import products from './Data/product-data-travel.json';

import banner1 from '../img/banner1.png'
import banner2 from '../img/banner2.png'
import banner3 from '../img/banner3.png'

import newArrival1 from '../img/Z1165CH-ANGLE.jpg'
import newArrival2 from '../img/Korchmar_021017_0020_1729eab2-70ae-4394-82cf-81d010da810d.jpg'
import newArrival3 from '../img/Z1068TN-ANGLE.jpg'
import newArrival4 from '../img/R1249WA-TOP.jpg'

import feature1 from '../img/xpro040011.jpg'
import feature2 from '../img/img_161912.jpg'
import feature3 from '../img/xpro044511.jpg'

class Home extends Component {

    render() {
        
        const item = products.map((item, index) =>
        <div key={index}>
            <li>
                <div className="product-item">
                    <a href="#"><img src={item.img} alt="" className="img-responsive" />
                        <div className="product-detail">
                            <p className="product-name">{item.name}</p>
                            <p className="product-desc">{item.description}</p>
                            <p className="price">${item.price}</p>
                        </div>
                    </a>
                </div>
            </li>
        </div>
      );

        return (
            <div>
                <div className="carousel slide" id="iniCarousel" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#iniCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#iniCarousel" data-slide-to="1"></li>
                        <li data-target="#iniCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div class="item active">
                            <img src={banner1} alt=""/>
                        </div>
                        <div class="item">
                            <img src={banner2} alt=""/>
                        </div>
                        <div class="item">
                            <img src={banner3} />
                        </div>
                    </div>

                    <a href="#iniCarousel" class="left carousel-control" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a href="#iniCarousel" class="right carousel-control" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>

                <div class="new-arrival"> {/* Today's Pick Product Display */}
                    <center>
                        <h2>Today's Pick</h2>
                    </center>
                    <div class="product-new-arrival">
                        {item}
                    </div> 
                    
                    {/* <button type="button" className="btn">
                        Shop Now
                    </button> */}
                </div>  {/* End of Today's Pick Product Display -*/}

                <div class="features"> {/* Features -*/}
                    <div class="features-img">
                        <img src={feature1} alt="" className="img-responsive" />
                    </div>
                    <div class="features-desc">
                        <div class="features-content">
                            <h2>Feature #1</h2>
                            <br />
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                <br /><br />
                                <a href="#" class="read-more">READ MORE</a>
                            </p>
                        </div>
                    </div>

                    <div class="features-desc">
                        <div class="features-content">
                            <h2>Feature #2</h2>
                            <br />
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
                                <br /><br />
                                <a href="#" class="read-more">READ MORE</a>
                            </p>
                        </div>
                    </div>
                    <div class="features-img">
                        <img src={feature2} alt="" className="img-responsive" />
                    </div>

                    <div class="features-img">
                        <img src={feature3} alt="" className="img-responsive" />
                    </div>
                    <div class="features-desc">
                        <div class="features-content">
                            <h2>Feature #3</h2>
                            <br />
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                <br /><br />
                                <a href="#" class="read-more">READ MORE</a>
                            </p>
                        </div>
                    </div>
                </div> {/*} End of Featues */}

            </div>
        )
    }

}

export default Home;
