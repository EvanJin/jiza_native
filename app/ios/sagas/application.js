'use strict';
import {FETCH_USER, FETCH_USER_SUCCESS} from '../constants';
import * as actions from '../actions/application';
import { take, put, call, fork, select } from 'redux-saga/effects'

function* fetchUserList() {
  while(yield take(FETCH_USER)) {
    let user = yield select(state => state.application.user);
    yield put(actions.fetchUserSuccess({a: ++user.a}));
  }
}

export default function* root(getState) {
  yield [
    fork(fetchUserList)
  ]
};
