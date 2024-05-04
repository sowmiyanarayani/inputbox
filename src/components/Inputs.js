import { React } from 'react';
import TextBox from './TextBox';
const Inputs = (context) => {
	const { config: { textBoxes }} = context;

	return textBoxes.map((params, key) =>
		<TextBox key={ key } { ...{ ...context, data: { ...params }} }/>);
};

export default Inputs;
