import Http from '../../Globals/Http';

const updateCron = async ()                                  => await Http.get(`cron`);

export {
    updateCron,
}