/**
 * Helper 函数可以简化 Reducer 的创建过程
 * eg: reducers/application.js
 * @param initialState
 * @param actionHandlers
 * @returns {Function}
 */
export default function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    // 判断actionHandlers中是否对应的action
    const reduceFn = actionHandlers[action.type];
    if (!reduceFn) return state;
    return {...state, ...reduceFn(state, action)};
  };
};
