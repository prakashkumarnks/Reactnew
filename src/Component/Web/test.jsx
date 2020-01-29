import React from 'react';
import {  Link } from "react-router-dom";
import Header from './Header/header';
import Footer from './Header/footer';


import { connect } from 'react-redux';
import { addTodo ,secondlevel } from "../../actions/actions";
import { bindActionCreators } from 'redux';
class Home extends React.Component {


    constructor( props ) {
        super( props );
       /// console.log(this.props);  
        this.state = { homesilder : '' };
    }

    
    
    
    render() {
        return (
            <div className="App" >
                     <Header></Header>
                        <button  onClick={() => this.props.addTodo(1)  } >Add a product</button>
                        <button  onClick={() => this.props.secondlevel(100)  } >Add a product</button>
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
    return    bindActionCreators({addTodo : addTodo , secondlevel : secondlevel }, dispatch)
 //  return   bindActionCreators(Object.assign({}, addTodo, secondlevel), dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home);
