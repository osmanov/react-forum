const CREATE_MESSAGE='react-forum/message/CREATE_MESSAGE';

const initialState = {isFetching:false};

export function create(message){
  return {
    type: CREATE_MESSAGE,
    message
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return Object.assign({},action.message);
    default:
      return state;
  }
}