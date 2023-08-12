import Http from '../../Globals/Http';

const postLetterStr   = async (data)                    => await Http.requestJsonNotResponse(`template/create`, data);

const postLetterToEmail = async (data)                  => await Http.requestJsonNotResponse(`promotions`, data);

export {
    postLetterStr,
    postLetterToEmail,
}