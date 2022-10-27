// 리듀서 = 전역공간에 초기 데이터를 전달해주거나 기존 데이터를 변경해주는 역할 (변경자)

import { combineReducers } from "redux";


const memberReducer = (state = {members: []}, action) => {
  switch (action.type) {
    case 'SET_MEMBERS':
      return {...state, members: action.payload}
    
    default:
      return state;
  }
}

const youtubeReducer = (state = { youtube: [] }, action) => {
  switch (action.type) {
    case 'SET_YOUTUBE':
      return {...state, youtube: action.payload}
    
    default:
      return state;
  }
}

// 전달된 각각의 reducer 데이터를 하나로 합쳐서 반환.
const reducers = combineReducers({ memberReducer, youtubeReducer });

export default reducers;