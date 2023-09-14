import Http from '../../Globals/Http';

const postLetterStr   = async (data)                    => await Http.requestJsonNotResponse(`template/create`, data);

const postLetterToEmail = async (data)                  => await Http.requestJsonNotResponse(`promotions`, data);

const postTemplateName = async (data)                   => await Http.requestJsonWithResponse(`template/name/add`, data);

const getTemplateNames = async ()                       => await Http.get(`template/names`);

const updateTemplateName = async (id, data)                 => await Http.request(`template/name/update/${id}`, data)

const getExampleUsers = async ()                        => await Http.get(`get/example/users`);

export {
    postLetterStr,
    postLetterToEmail,
    postTemplateName,
    getTemplateNames,
    getExampleUsers,
    updateTemplateName,
}