export const findUser = (name, users) => {
	const lowerName = name.toLowerCase()
	let i = users.length
	let user
	while (i-- && !user) {
		if (users[i].login.toLowerCase() === lowerName)	{
			user = { ...users[i] }
		}
	}
	return user
}
export const debounce = () => {
	let timeout = {}
	return (fn, delay) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			fn()
		}, delay)
	}
}
export const validateUserName = (name) => {
	const regex = new RegExp(/^(([^\W_]([a-zA-Z0-9]|[-])*[^\W_])|([a-zA-Z0-9]))$/, 'g')
	return regex.test(name)
}
