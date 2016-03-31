import * as constants from '../constants';
import createReducer from '../util/create-reducer';

const initialState = {
  user: {
    a: 0
  }
};

// 处理函数
const actionHandlers = {
  [constants.FETCH_USER_SUCCESS]: (state, action) => {
    state.user = action.user;
    return Object.assign({}, state);
  }
};

// 创建 Reducer
export default createReducer(initialState, actionHandlers);

