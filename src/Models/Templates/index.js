import Http from '../../Globals/Http';

const postLetterStr   = async (data)                    => await Http.requestJsonNotResponse(`template/create`, data);

const postLetterToEmail = async (data)                  => await Http.requestJsonNotResponse(`promotions`, data);

const postTemplateName = async (data)                  => await Http.requestJsonWithResponse(`template/name/add`, data);

export {
    postLetterStr,
    postLetterToEmail,
    postTemplateName,
}