const initialState = {
  img: '',
  description: '',
}

const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MODIFY_INTRO':
      return {
        img: action.img,
        description: action.desc,
      }
    default:
      return state
  }
}

export default introReducer
