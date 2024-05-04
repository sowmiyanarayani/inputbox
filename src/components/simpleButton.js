import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const SimpleButton = () =>
	<div
		onClick={ () => context.actions.increaseCount(config.increment) }
	>
		Clicked  Me
	</div>;

export default SimpleButton;
