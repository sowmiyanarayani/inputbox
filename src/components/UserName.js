import { React } from 'react';
const UserName = (context) => {
	const {
		state: { username },
		actions: { setUserName },
	} = context;

	return <div>
		<label>username:</label>
		<input
			type="text"
			placeholder="Enter your Full Name"
			value={ username }
			onChange={ (event) =>
				setUserName(event.target.value) }
		/>
	</div>;
};

export default UserName;
