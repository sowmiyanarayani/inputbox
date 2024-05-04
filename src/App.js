import { React } from 'react';
import './App.scss';
import Login from './components/Login';
import SimpleButton from './components/simpleButton';
import context from './core/context';

const App = ({ state: { count, refreshID }}) =>
	<div className="App">
		<div>Count: { count }</div>
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { refreshID }</div>
		<Login { ...context }/>

	</div>;

export default App;
