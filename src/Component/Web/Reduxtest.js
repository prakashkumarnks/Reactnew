//import React from 'react'
//import { createStore } from 'redux';
//import reducer from './reducers/reducer'




/*
const reducer = (state, action) => { //es6 arrow function
	
	/// console.log('redu');
   switch (action.type) {
      		case "ITEMS_REQUEST":
				  return {
					          ...state,
					          data: action.payload,
					          dataq: action.pa
					      }
			    break;
      		default:
      				return state;
   }
}



const store = createStore(reducer);
store.subscribe(()=>{ console.log(store.getState());});
//store.subscribe(()=>{ console.log(store.getState());});
store.dispatch({  type: "ITEMS_REQUEST", payload : '10000' , pa : 1111 });
store.dispatch({  type: "ITEMS_REQUEST", payload : '10001' , pa : 1111 });
store.dispatch({  type: "ITEMS_REQUEST", payload : '10002' , pa : 1111 });
//console.log(store.getState());

//export default reducer;
export default reducer;
*/

 //const F = 'S';




 
 const initialState = { ins : 10 };
 
 const reducer = (state = initialState, action) => { //es6 arrow function
//function todoApp(state, action) {
	  switch (action.type) {
	    case 'F':
	    			console.log('reducer');
	      return  {
	         data : 'ddd'
	    		}
	    
	      break;
	    case 'S':
	    	 return  {
	         data : 'ddd'
	    		}
	      return  {
	         data : initialState.ins  - action.text
	    		}
	    
	      break;
	    default:
	      return state
	  }
	}
//const store = createStore(reducer);
export default reducer;
//store.dispatch(addTodo('150'));
//store.dispatch(addTodo(1));
//store.dispatch(addTodo(1));