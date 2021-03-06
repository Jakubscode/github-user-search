import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import App from './components/App/App-container'
import store from './store'
import './index.css'

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
)
