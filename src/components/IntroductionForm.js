/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { modifyIntro } from '../store/actions/intro'

const IntroductionForm = ({ setIsEditing }) => {
  const [imgInput, setImgInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(modifyIntro(imgInput, descriptionInput))
    setIsEditing(false)
  }

  return (
    <div>
      <div className="form-group">
        <label>Image</label>
        <input
          className="form-control"
          placeholder="Enter image url"
          onChange={e => setImgInput(e.target.value)}
          value={imgInput}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          className="form-control"
          placeholder="Enter Description"
          onChange={e => setDescriptionInput(e.target.value)}
          value={descriptionInput}
        />
      </div>
      <button className="btn btn-success" onClick={onSubmit}>
        Save
      </button>
      <button
        className="btn btn-info"
        style={{ marginLeft: '1rem' }}
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </div>
  )
}

export default IntroductionForm
