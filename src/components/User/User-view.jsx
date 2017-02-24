import React from 'react'

import './User-style.css'

const UserView = (props) => {
	const user = props.user ?
		(<div className="user">
  <img className="avatar" src={props.user.avatar_url} alt={`${props.user.name}'s avatar`} />
  <p className="name">{props.user.name}</p>
  <p>{props.user.company}</p>
  <p>{props.user.email}</p>
  <p>followers : {props.user.followers} following : {props.user.following}</p>
		</div>)
		: null
	return user
}
export default UserView
