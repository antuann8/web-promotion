import Http from '../../Globals/Http';

const updateCron = async (id, data)                                  => await Http.request(`cron/update/${id}`, data);

export {
    updateCron,
}