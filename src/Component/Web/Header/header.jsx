import React from 'react';
import {  Link } from "react-router-dom";
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import   '../../Assets/Web/css/bootstrap.min.css';
import   '../../Assets/Web/css/hover-min.css';
import   '../../Assets/Web/css/animate.min.css';
import   '../../Assets/Web/css/owl.theme.default.min.css';
import   '../../Assets/Web/css/style.css';
import   '../../Assets/Web/css/main.css';
import   '../../Assets/Web/css/media.css';
import   '../../Assets/Web/css/imagehover.css';
import   '../../Assets/Web/css/jquery-ui.css';
import   '../../Assets/Web/css/bootstrap-datetimepicker.min.css';


class Header extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className="App" >
                    <div className='thetop'></div>
                    <div className='scrolltop'>
                        <div className='scroll icon'>
                            <i className="fa fa-4x fa-angle-up"></i>
                        </div>
                    </div>
                    <div className="top-bar sticky-top p-3">
                        <div className="row">
                            <div className="col-8 col-lg-2 mt-2">
                                <Link className="navbar-brand" to="index.php"><img
                                    src={require( '../../Assets/Web/images/logo.png' )} className="img-fluid" /></Link>
                            </div>
                            <div className="col-4 d-none d-md-block d-lg-none d-block d-sm-none">
                                <nav className="navbar navbar-expand-lg navbar-light ">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarTogglerDemo03"
                                        aria-controls="navbarTogglerDemo03" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </nav>
                            </div>
                            <div className="col-lg-8 mt-2 pb-2 ">
                                <form action="#" method="post" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-2 col-6 p-1">
                                                    <select className="form-control search-slt" id="SessionWebState"
                                                        name="SessionWebState">
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-6 p-1">
                                                    <select className="form-control search-slt" id="SessionWebDistrict"
                                                        name="SessionWebDistrict">

                                                    </select>
                                                </div>
                                                <div className="col-lg-5 col-10 p-1">
                                                    <input type="text" id="Searchhere"
                                                        className="form-control search-slt" placeholder="Search here..." />
                                                </div>
                                                <div className="col-lg-1 col-2 p-1">
                                                    <button type="button" className="btn btn-danger wrn-btn img-fluid">

                                                        GO
                                                              </button>
                                                </div>
                                                <div className="col-lg-2 col-12 p-1">
                                                    <select className="form-control search-slt" id="language_code" name="language_code">

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-2 mt-3 d-none d-sm-block d-md-none d-lg-block ">

                                                        <Link to="../Cms/login.php"><img src={require( '../../Assets/Web/images/icon/profile-avatar.png' )} />123456</Link>
                                                        <Link to="../Cms/logout.php"><img src={require( '../../Assets/Web/images/icon/logout.png' )} /> Logout</Link>

                            </div>


                        </div>

                    </div>


                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-justified w-100">
                                <li className="nav-item active"><Link className="nav-link" to="Home">Home
                    <span className="sr-only">(current)</span>
                                </Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="Categores.php?business=1">Drilling Proprietors</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="topleadingcompany.php">Top Companies</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="Categores.php?business=2">Manufactures</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="Categores.php?business=3">Sellers</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="Categores.php?business=4">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="Categores.php?business=7">Dealers</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="services_center.php?business=14">Service Center</Link></li>
                                <li className="nav-item"><Link className="nav-link"
                                    to="newsandeventdetails.php">News & Events</Link></li>
                                <li className="nav-item d-none d-md-block d-lg-none d-block d-sm-none">
                                    <Link target="_blank" className="nav-link"
                                        to="../Cms/MemberRegistration.php" target="_blank">Registration</Link>
                                </li>
                                <li className="nav-item d-none d-md-block d-lg-none d-block d-sm-none">
                                    <Link target="_blank" className="nav-link" to="../Cms/login.php"
                                        target="_blank">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
               
                <div className="preloaders"></div>


               
            </div>

        );
    }
}

export default Header;