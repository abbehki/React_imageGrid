import ACTION from "../action_constants";

function landing_reducer(state = { navindex: 1 }, action) {
  let tempState = Object.assign({}, state);
  if (action.type === ACTION.COMMON.NAVINDEX) {
    tempState.navindex = action.data;
    return tempState;
  }
  return state;
}
export default landing_reducer;
