const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setUserName = ({ data }) => ({ username: data });
const setPassword = ({ data }) => ({ password: data });
const setProfile = ({ state: { password }}) => ({ profileName: password });
const setLogin = ({ data }) => ({ login: data });
const actions = {
	increaseCount, setPassword, setUserName, setProfile,
	setLogin,

};

export default actions;
