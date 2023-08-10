import Http from '../../Globals/Http';

const postLetterStr   = async (data)                    => await Http.requestJsonNotResponse(`template/create`, data);

export {
    postLetterStr,
}