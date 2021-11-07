import React from 'react'
import ReactDOM from 'react-dom'
import './src/index.css'
import App from './src/App'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import introReducer from './src/store/reducers/intro'
import postsReducer from './src/store/reducers/posts'

const rootReducer = combineReducers({
  intro: introReducer,
  posts: postsReducer,
})

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
