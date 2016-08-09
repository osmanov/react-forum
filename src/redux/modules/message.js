const CREATE_MESSAGE='react-forum/message/CREATE_MESSAGE';

const initialState = {isFetching:false};

export function createMessage(content){
  return {
    type: CREATE_MESSAGE,
    content
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return Object.assign({},state,{content:action.content});
    default:
      return state;
  }
}