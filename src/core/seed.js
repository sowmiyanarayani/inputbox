import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	username: '',
	password: '123',
	profileName: '',
	login: 'login',
	click: '',

};

export default seed;
