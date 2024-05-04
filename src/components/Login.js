import { React } from 'react';
import Button from './Button';
import Inputs from './Inputs';
const Login = (context) => {
	const { state: { profileName }} = context;

	return <div className="box">
		<h3>Login Form</h3>
		<Inputs { ...context }/>
		<Button { ...context }/>
		<div>hello { profileName }</div>
	</div>;
};

export default Login;
