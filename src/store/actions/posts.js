let postId = 1

export const ADD_POST = 'ADD_POST'

export const addPost = (title, img, desc) => ({
  type: 'ADD_POST',
  title,
  img,
  desc,
  id: postId++,
})
