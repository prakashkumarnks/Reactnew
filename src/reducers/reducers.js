const initialState = { ins : 10 };
//const firstreduce = (state = initialState, action) => { //es6 arrow function
export function firstreduce(state = initialState, action) {
	  switch (action.type) {
	    case 'a':
	    	console.log('reducer/12345');
	      return  {
	         data : 'ddd'
	    		}
	    
	      break;
	    case 'b':
	    	console.log('b');
	    	 return  {
	         data : 'ddd'
	    		}
	      /*return  {
	         data : initialState.ins  - action.text
	    		}*/
	    
	      break;
	    default:
	      return state
	  }
	}
//export default firstreduce;
