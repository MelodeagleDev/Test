import { 
  SET_SWITCH_COUNT
} from "./action-types";

export function setSwitchCountAction(count, name) {
  return dispatch => {
    dispatch({
      type: SET_SWITCH_COUNT,
      payload: {count, name}
    });
  }
}
