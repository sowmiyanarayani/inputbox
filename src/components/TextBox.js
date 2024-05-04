import { React } from 'react';
const TextBox = (context) => {
	const { actions, state, data: { label, event, value, name }} = context;

	return <div>
		<label>{ label }</label>
		<input
			type="text"
			placeholder={ name }
			value={ state[value] }
			onChange={ (e) => actions[event](e.target.value) }
		/>
	</div>;
};

export default TextBox;
