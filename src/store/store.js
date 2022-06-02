import {createStore} from 'redux';

const reducer = (info = {data: null, additionalData: null, todos: [], modalWindowVisible: false,},
  action) => {

  if (action.type === 'SET') {
    return {
      ...info,
      data: action.payload
    }
  }

  if (action.type === 'ADD_INFO') {
    return {
      ...info,
      additionalData: action.payload,
    }
  }

  if (action.type === 'ADD_TODO') {
    return {
      ...info,
      todos: [...info.todos, action.payload]
    }
  }

  if (action.type === 'EXTRACT_TODO') {
    return {
      ...info,
      todos: [...info.todos, ...action.payload]
    }
  }

  if (action.type === 'TOGGLE') {
    return {
      ...info,
      modalWindowVisible: action.payload 
    }
  }

  return info;
}

export const store = createStore(reducer);