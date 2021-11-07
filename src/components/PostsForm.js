/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/posts'

const PostsForm = () => {
  const [titleInput, setTitleInput] = useState('')
  const [imgInput, setImgInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(addPost(titleInput, imgInput, descriptionInput))
  }

  return (
    <div>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          placeholder="Enter the title of the post"
          value={titleInput}
          onChange={e => setTitleInput(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input
          className="form-control"
          placeholder="Enter image url"
          value={imgInput}
          onChange={e => setImgInput(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          className="form-control"
          placeholder="Enter description"
          value={descriptionInput}
          onChange={e => setDescriptionInput(e.target.value)}
        />
      </div>
      <button
        className="btn btn-success"
        data-dismiss="modal"
        onClick={onSubmit}
      >
        Save
      </button>
      <button
        className="btn btn-info"
        style={{ marginLeft: '1rem' }}
        data-dismiss="modal"
      >
        Cancel
      </button>
    </div>
  )
}

export default PostsForm
