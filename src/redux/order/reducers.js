import { 
  SET_SWITCH_COUNT, 
} from './action-types';

const initialState = {
  switchCount: 0,
  declareName: '',
};

export function orderReducer(state = initialState, action) {
  switch (action.type) {

    case SET_SWITCH_COUNT: {
      
      const {count, name} = action.payload;

      let { switchCount } = { ...state };
      let { declareName } = { ...state };

      console.log("reducer", count);
      console.log("name", name);
      
      switchCount = count;
      declareName = name;

      return { switchCount, declareName };
    }
    

    default:
      return { ...state };
  }
}
