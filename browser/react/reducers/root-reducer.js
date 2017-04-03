import {SET_LYRICS} from '../constants.js';

const initialState = { text: '' };

function reducer (state = initialState, action) {
  
  const newState = Object.assign({}, state);

  switch(action.type) {

	case SET_LYRICS:
		newState.text = action.type;
		break;  	


  	default:
  		return state;
  }
}

export default reducer; 
