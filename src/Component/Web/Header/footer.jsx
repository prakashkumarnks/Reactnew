import React from 'react';
import {  Link } from "react-router-dom";
import { Button, FormGroup, FormControl } from 'react-bootstrap';


class Footer extends React.Component {


    constructor( props ) {
        super( props );

        this.state = {
            username: "",
            password: "",
            sess: ""
        };
    }

    render() {
        return (
            <div className="App" >
                <section className="footer mt-2">
                <div className="container">
                    <div className="row">
                            <div className="col-sm-2">
                                    <div>
                                        <h5>ABOUT</h5>
                                        <ul>
                                            <li><i className="fas fa fa-check"></i><a href="index.php"> Top Categories</a></li>
                                            <li><i className="fas fa fa-check"></i><a > Careers</a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="col-sm-2">
                                    <div>
                                        <h5>HELP</h5>
                                        <ul>
                                            <li><i className = "fas fa fa-check"></i><a > Payments </a></li>
                                            <li><i className = "fas fa fa-check"></i><a > Returns </a></li>
                                            <li><i className = "fas fa fa-check"></i><a > FAQ </a></li>
                                        </ul>
                                    </div>
                            </div>
                            <div className="col-sm-2">
                                    <div>
                                        <h5>POLICY</h5>
                    <ul>
                        <li><i className="fas fa fa-check"></i><a > Return Policy </a></li>
                        <li><i className="fas fa fa-check"></i><a > Terms Of Use</a></li>
                        <li><i className="fas fa fa-check"></i><a href="privacy.php"> Privacy</a></li>
                        <li><i className="fas fa fa-check"></i><a > Site Map</a></li>
                    </ul>
                                    </div>
                            </div>
                            <div className="col-sm-2">
                                    <div>
                                        <h5>SOCIAL</h5>
                                        <ul>
                                            <li><i className="fa fa-facebook"></i><a href="https://www.facebook.com/groups/382862895776933/" target="_blank"> Facebook</a></li>
                                            <li><i className="fab fa fa-youtube"></i><a href="https://www.youtube.com/channel/UCbAyCeyAnk8lhcbiwe63U0g" target="_blank"> YouTube </a></li>
                                            <li><i className="fa fa-google-plus"></i><a  target="_blank"> Google Plus </a></li>
                                            <li><i className="fa fa-twitter"></i><a  target="_blank"> Twitter </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div>
                                        <h5>CONTACT</h5>
                                        <ul>
                                            <li>
                                                <p>
                                                 <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                Rigsindia 24*7,  No. 37/102, Akilmedu 4th Street,Sait Colony,Erode- 638001.Tamil Nadu. </p>
                                                <p><i className="fa fa-phone" aria-hidden="true"></i>
                                                7448611111, 7448711111 </p>
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                <a >info@rigsindia24.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                
                    <div className="clearfix"></div>
            </section>
                                                
                                                
                                            <div className="container-fluid">
                                                <div className="row footer-bottom pt-4">
                                                        <div className="col-10 col-lg-10">
                                                            <div className="row">
                                                                            <div className="col-6 col-lg-2 col-sm-2">
                                                                                <a>
                                                                                    <p><i className='fas fa fa-briefcase'></i> Sell on Rigindia24*7</p>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-6 col-lg-2 col-sm-2">
                                                                                    <Link to="../Cms/login.php">
                                                                                        <p><img  src={require( '../../Assets/Web/images/icon/register.png' )}   className="img-thumbnail img-fluid" /> Register</p>
                                                                                    </Link>
                                                                            </div>
                                                                            <div className="col-6 col-lg-2 col-sm-2">
                                                                                        <Link to="../Cms/login.php">
                                                                                        <p><img src={require( '../../Assets/Web/images/icon/star-button.png' )}  className="img-thumbnail img-fluid" /> Advertise</p>
                                                                                        </Link>
                                                                            </div>
                                                                            <div className="col-6 col-lg-2 col-sm-2">
                                                                                        <Link to="../Cms/login.php">
                                                                                    <p><img src={require( '../../Assets/Web/images/icon/help.png' )}  className="img-thumbnail img-fluid" /> Help Center</p>
                                                                                    </Link>
                                                                            </div>
                                                                            <div className="col-12 col-lg-4 col-sm-4">
                                                                                    <Link to="../Cms/login.php">
                                                                                    <img  src={require( '../../Assets/Web/images/icon/google-play-badge.png' )}  className="img-fluid" />
                                                                                    </Link>
                                                                            </div>
                                                            </div>
                                                        </div>
                                                   
                                              </div> 
                                           </div>             
                                                
                                                
 </div>
        );
    }
}

export default Footer;