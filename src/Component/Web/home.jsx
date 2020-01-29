import React from 'react';
import {  Link } from "react-router-dom";
//import { Button, FormGroup, FormControl } from 'react-bootstrap';
import Header from './Header/header';
import Footer from './Header/footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { httpverbspost, Fillddl } from '../Common';
import { connect } from 'react-redux';
import { addTodo } from "../../actions/actions";
import { bindActionCreators } from 'redux';
class Home extends React.Component {


    constructor( props ) {
        super( props );
       /// console.log(this.props);  
        this.state = { homesilder : '' };
    }

    componentDidMount()
    {
        httpverbspost('/bindmaster_state', null).then(data => {
            this.setState({ homesilder: data.bindmaster_state });
        })
        //Fillddl('SELECT DataId as value ,DataName  as label FROM bind_activestatus').then(res => {
        Fillddl('SELECT DataId ,DataName FROM bind_activestatus').then(res => {
              console.log(res.data);   
            this.setState({ homesilder: res.data });
        })
    }
    
    
    render() {
        return (
            <div className="App" >
                 <Header></Header>
                <button  onClick={() => this.props.addTodo(1)  } >Add a product</button>
                <button  onClick={() => this.props.addTodo(100)  } >Add a product</button>
                        <section className="first-slider container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-12 ">
                                    <div id="owl-demo" className="owl-carousel owl-theme">
                                           <div className="item"><Link to="topleadingcompany.php"><img src={require( '../Assets/Web/images/logo.png' )} alt="description of image" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                
                <div className="clearfix"></div>
                
                
                { /* ------ --------------------- Next Home start ---------------------------------- */ } 
                <div className="container-fluid">
                        <section id="top-categories" className="jumbotron">           
                        <div className="container">
                                    <h4 className="mb-4 titletext"> Top Business Type</h4>
                            <div className="row mb-5">    
                                   <div className="col-6 col-md-3 mb-2 wow bounceIn">
                                    <a >
                                        <div className="lp-top-categories-box p-3 text-center">
                                            <img src={require( '../Assets/Web/images/logo.png' )} alt="description of image"  />
                                            <div className="lp-top-categories-box--title">Rate Search</div>
                                        </div>
                                    </a>
                                </div>
                                            
                                            <div className="col-6 col-md-3 mb-2 wow bounceIn">
                                            <a >
                                                <div className="lp-top-categories-box p-3 text-center">
                                                    <img src={require( '../Assets/Web/images/logo.png' )}  alt="description of image" />
                                                    <div className="lp-top-categories-box--title">Rate Search</div>
                                                </div>
                                            </a>
                                        </div>        
                                </div>
                            </div>
                       
                    </section>
                </div>   
                
                    { /* ------ --------------------- Next Home start ---------------------------------- */ } 
                                                    
                                    <div className="clearfix"></div>
                                    <div className="add_1 mt-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div className="our_offers">
                                                        <h4 className="titletext "> Our Market Leaders </h4>
                                                        <div className=" mt-3 p-8 w-3">
                                                            <div id="owl-demo-offers" className="owl-carousel owl-theme">


                                                        <Carousel autoPlay showThumbs ="">
                                                        <div className="item">
                                                            <img  src={require( '../Assets/Web/images/hot-sales/CRIZOL.jpg' )} alt="description of image" />
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/PROMOTE.jpg' )} alt="description of image" />
                                                            
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/UNIVERSEL.jpg' )} alt="description of image" />
                                                           
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/india_hydralic.jpg' )} alt="description of image" />
                                                           
                                                        </div>
                                                        </Carousel>
                                                        
                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                        
                                                 { /* ------ --------------------- Next Home start ---------------------------------- */ } 
                                                        
                                                        
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                                    <h4 className=" mt-4 titletext "> Hot Sales </h4>
                                                   
                                                    <Carousel autoPlay showThumbs>
                                                        <div className="item">
                                                            <img  src={require( '../Assets/Web/images/hot-sales/CRIZOL.jpg' )} alt="description of image" />
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/PROMOTE.jpg' )} alt="description of image" />
                                                            
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/UNIVERSEL.jpg' )} alt="description of image" />
                                                           
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/india_hydralic.jpg' )} alt="description of image" />
                                                           
                                                        </div>
                                                        <div className="item">
                                                                    <img  src={require( '../Assets/Web/images/hot-sales/KL_RIG.jpg' )} alt="description of image" />
                                                            
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/Maha.jpg' )} alt="description of image" />
                                                    
                                                           
                                                        </div>
                                                        <div className="item">
                                                                <img  src={require( '../Assets/Web/images/hot-sales/ravi.jpg' )}  alt="description of image"/>
                                                           
                                                        </div>
                                                    
                                                    </Carousel>
                                                   
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>                            
                                         
                                       { /* ------ --------------------- Next Home start ---------------------------------- */ }                           
                                                        
                                      <div className="clearfix"></div> 
                                       <section className="events mb-4 bg-gray-1 p-1" id="147">
                                           <div className="container">
                                               <h4 className="mt-5 titletext text-center">News & Events</h4>
                                               <div className="row "> 
                                                  
                                                   <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                       <div id="owl-demo-news" className="owl-carousel owl-theme">
                                                           
                                               <Carousel autoPlay showThumbs ="">
                                               <div className="item">
                                                   <img  src={require( '../Assets/Web/images/hot-sales/CRIZOL.jpg' )} alt="description of image" />
                                               </div>
                                               <div className="item">
                                                       <img  src={require( '../Assets/Web/images/hot-sales/PROMOTE.jpg' )} alt="description of image" />
                                                   
                                               </div>
                                               </Carousel>
                                               
                                                       </div>
                                                   </div>

                                               </div>
                                           </div>
                                       </section>
                                      <div className="clearfix"></div> 
                                               <div className="clearfix"></div>         
                                 { /* ------ --------------------- Next Home start ---------------------------------- */ }            
                                                   
                                               
                                               <Footer></Footer>             
                                               
                                                    
            </div>

        );
    }
}

//export default Home;

const mapStateToProps = function(state) {
    return {
      profile: '11234568'
    }
  }
function  mapDispatchToProps(dispatch){
//const mapDispatchToProps = dispatch => ({
  //  toggleTodo: id => dispatch(addTodo(id))
    return    bindActionCreators({addTodo : addTodo }, dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home);
