const initialState = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          title: action.title,
          description: action.desc,
          id: action.id,
          img: action.img,
        },
      ]
    default:
      return state
  }
}

export default postsReducer
