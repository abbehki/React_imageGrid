import ACTION from '../action_constants';

function landing_reducer(state = {},action){
  let tempState = Object.assign({}, state);
  if(action.type === ACTION.LANDING.PROFILEINFO) {
    tempState.profileinfo = action.data;
    return tempState;
  }
  return state;
}
export default landing_reducer;
