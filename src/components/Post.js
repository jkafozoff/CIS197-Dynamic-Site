/* eslint-disable react/button-has-type */
import React from 'react'

const Post = ({
  id, title, img, description,
}) => (
  <div className="col-4">
    <div className="card">
      <img className="car-img-top" src={img} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">
          Post #
          {id}
          :
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-warning">Edit Post</button>
      </div>
    </div>
  </div>
)

export default Post
