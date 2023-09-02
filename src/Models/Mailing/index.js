import Http from '../../Globals/Http';

const getMailingConditions = async ()                        => await Http.get(`get/mailing/conditions`);

const changeMailingConditionStatus = async (id, data)                => await Http.request(`change/mailing/conditions/${id}`, data)

export {
    getMailingConditions,
    changeMailingConditionStatus,
}