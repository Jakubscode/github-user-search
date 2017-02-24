import React from 'react'
import UserView from '../User/User-view.jsx'

const AppView = (props) => {
	let errorInfo = props.fetchSuccess ? '' : 'user doesn\'t exist'
	if (!props.isInputValid) {
		errorInfo = 'invalid input'
	}
	const inputClass = `input${!props.fetchSuccess || !props.isInputValid ? ' invalid' : ''}`
	return (
    <div className="App">
      <div className="App-header">
        <div>
          <input
            className={inputClass}
            value={props.input}
            onChange={props.handleInput}
            placeholder="Type user name..."
          />
          <span className="errorInfo">{errorInfo}</span>
        </div>
      </div>
      <div className="App-content">
        <UserView user={props.user} />
      </div>
    </div>
	)
}
AppView.propTypes = {
	fetchSuccess: React.PropTypes.bool,
	isInputValid: React.PropTypes.bool,
	input: React.PropTypes.string,
	handleInput: React.PropTypes.func,
	user: React.PropTypes.shape({
		name: React.PropTypes.string,
		avatar_url: React.PropTypes.string,
		email: React.PropTypes.string,
		company: React.PropTypes.string,
		followers: React.PropTypes.number,
		following: React.PropTypes.number,
	}),
}
AppView.defaultProps = {
	fetchSuccess: true,
	isInputValid: true,
	input: '',
	handleInput: () => {},
	user: undefined,
}
export default AppView
