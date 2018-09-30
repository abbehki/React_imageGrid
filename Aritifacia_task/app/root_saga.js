import { takeEvery } from 'redux-saga/effects';
import ACTION from './action_constants';
import {image_detail} from './LandingPage/landing_saga';


export default function* rootSaga() {
  yield takeEvery(ACTION.CHECK.LOAD, image_detail);
}