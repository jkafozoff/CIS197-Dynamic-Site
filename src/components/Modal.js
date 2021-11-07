import React from 'react'
import PostsForm from './PostsForm'

const Modal = () => (
  <div
    className="modal fade modal-dialog modal-dialog-centered"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            New Post
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <PostsForm />
        </div>
      </div>
    </div>
  </div>
)

export default Modal
