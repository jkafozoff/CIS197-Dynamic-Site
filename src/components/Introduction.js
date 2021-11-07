import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import IntroductionForm from './IntroductionForm'

const Introduction = () => {
  const [isEditing, setIsEditing] = useState(false)

  const introData = useSelector(state => state.intro)
  return (
    <div
      style={{
        padding: '3rem 10rem',
        background: 'rgba(246,247,247)',
      }}
    >
      <h1>
        Hey this is me!
        {!isEditing && (
          // eslint-disable-next-line react/button-has-type
          <button
            className="btn btn-warning float-right"
            onClick={() => setIsEditing(prevValue => !prevValue)}
          >
            Edit
          </button>
        )}
      </h1>

      {!isEditing && (
        <div className="row">
          <div className="col-8">
            {introData.img && (
              <img
                className="img-fluid"
                src={introData.img}
                style={{ height: '400px' }}
                alt="profile"
              />
            )}
          </div>
          <div className="col-4">
            <h3>{introData.description}</h3>
          </div>
        </div>
      )}

      {isEditing && <IntroductionForm setIsEditing={setIsEditing} />}
    </div>
  )
}

export default Introduction
