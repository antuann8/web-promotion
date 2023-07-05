import Http from '../../Globals/Http';

const login		= async (username, password)	=> await Http.request('user/login', {username,password}, false);

const get		= async ()						=> await Http.request('users');
const getById	= async (id)					=> await Http.request(`user/${id}`);

const add		= async (data)					=> await Http.request('user/add', data);
const update	= async (id, data)				=> await Http.request(`user/update/${id}`, data);


export {
	login,
	get,
	getById,
	add,
	update
}