import Http from '../../Globals/Http';

const get		= async ()						=> await Http.get('requisite/all');

const update	= async (id, data)				=> await Http.request(`requisite/${id}`, data);

const add	= async (data)				        => await Http.request(`requisite/add`, data);

export {
    get,
    update,
    add,
}