import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js'

// Collection
import Business from './components/Business.js';
import Travel from './components/Travel.js';
import Tech from './components/Tech.js';
import Accessories from './components/Accessories.js';

import Journal from './components/Journal.js';
import Contact from './components/Contact.js';

import logo from './img/logo-transparent-medium.png'

import banner1 from './img/xpro028515.jpg'
import banner2 from './img/img_217714.jpg'
import banner3 from './img/xpro039314.jpg'

class App extends Component {

render() {

  const navFonts = {
    color: "black"
  }

  return (
    <div>
      <div className="container">
        <ul className="nav nav-pills nav-justified">
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Collection <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><Link to="/Business">Business</Link></li>
            <li><Link to="/Travel">Travel</Link></li>
            <li><Link to="/Tech">Tech</Link></li>
            <li><Link to="/Accessories">Accessories</Link></li>
          </ul>
        </li>
          <li><Link to="/About" style={navFonts}>Our Story</Link></li>
          <li><Link to="/Home"><img src={logo} /></Link></li>
          <li><Link to="/" style={navFonts}>Journal <span class="label label-danger">Coming Soon</span></Link></li>
          <li><Link to="/Contact" style={navFonts}>Contact</Link></li>
        </ul>

        <div>
            <Route path="/Business" component={Business}/>
            <Route path="/Travel" component={Travel}/>
            <Route path="/Tech" component={Tech}/>
            <Route path="/Accessories" component={Accessories}/>
            <Route path="/About" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Home" component={Home}/>
            <Route path="/" component={Journal}/>
            <Route path="/Contact" component={Contact}/>
        </div>
      </div>

      <div className="footer"> {/* Footer */}

        <div className="footer-menu">
            <div id="footer-menu-left">
                <ul>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/">Collection</Link></li>
                    <li><Link to="/">How to Order</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div id="footer-menu-right">
                <ul>
                    <li><Link to="/">Support</Link></li>
                    <li><Link to="/">Product Care</Link></li>
                    <li><Link to="/">Collaboration</Link></li>
                    <li><Link to="/">Custom & Promotional</Link></li>
                </ul>
            </div>
            <div className="newsletter">
                <p>Sign up to receive the latest news and offer from us.</p>
                <br />
                <input type="email" placeholder="Enter your email address" />
                <button type="button" class="btn">SUBMIT</button>
                <div class="social">
                    <a href="http://instagram.com/slimjogoods" target="_blank"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </div>

        <div className="copyright">
            <p>Copyright &copy; 2018 | Slim Jo</p>
        </div>

      </div> {/* End of Footer -*/}

    </div>

  )
}
}
export default App;