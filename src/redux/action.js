// 인수로 전달된 값을 type이 SET_MEMBERS인 액션객체에 담아 리턴하는 함수

/**
 * 이것이 액션 객체이다. 
action = {
  type: 'SET_MEMBERS',
  payload: 전달될 값
}
*/

export const setMembers = (member) => {
  return{
    type: 'SET_MEMBERS',
    payload: member
  }
}