import Http from '../../Globals/Http';

const getMailingConditions = async ()                                  => await Http.get(`get/mailing/conditions`);

const changeMailingConditionStatus = async (code, data)                => await Http.request(`change/mailing/conditions/${code}`, data)

export {
    getMailingConditions,
    changeMailingConditionStatus,
}