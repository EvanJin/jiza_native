import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
}
from '../constants/';

export function fetchUser() {
  return {
    type: FETCH_USER,
    user: {a: 0}
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
};
