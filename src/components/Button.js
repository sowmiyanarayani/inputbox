import { React } from 'react';

const Button = (context) => {
	const {
		actions: { setLogin },
		state: { login },
	} = context;

	return <div>
		<button onClick={ () => (login === 'login'
			? setLogin('logout')
			: setLogin('login')) }
		>
			{ login }</button>
	</div>;
};

export default Button;
