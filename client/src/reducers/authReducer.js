import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  console.log(state);
  console.log(action);
  // returns null when waiting on actions
  // returns payload when successfully fetched users
  // returns false if there's no payload
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
