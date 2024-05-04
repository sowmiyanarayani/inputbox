import { React } from 'react';
import UserName from './UserName';
import Password from './Password';
import Button from './Button';
const Login = (context) => {
	const { state: { profileName }} = context;

	return <div className="box">
		<h3>Login Form</h3>
		<UserName { ...context }/>
		<Password { ...context }/>
		<Button { ...context }/>
		<div>hello { profileName }</div>
	</div>;
};

export default Login;
