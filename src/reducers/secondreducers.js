/*const initialState = { ins : 10 };
 //const secondreducers = (state = initialState, action) => { //es6 arrow function
export function secondreducers(state = initialState, action) {
	  switch (action.type) {
	    case 'c':
	    	console.log('reducer/zzzzzzzzzzzz');
	      return  {
	         data : 'zzzzzzzzzz'
	    		}
	    
	      break;
	    case 'd':
	    	 return  {
	         data : 'zzzzzzzzzz'
	    		}
	      return  {
	         data : initialState
	    		}
	    
	      break;
	    default:
	      return state
	  }
	}
//export default secondreducers;
*/

const initialState = { ins : 10 };
export  const secondreducers = (state = initialState, action) => { //es6 arrow function
	  switch (action.type) {
	    case 'c':
	    	console.log('reducer/zzzzzzzzzzzz');
	      return  {
	         data : 'zzzzzzzzzz'
	    		}
	    
	      break;
	    case 'd':
	    	 return  {
	         data : 'zzzzzzzzzz'
	    		}
	      return  {
	         data : initialState
	    		}
	    
	      break;
	    default:
	      return state
	  }
}

