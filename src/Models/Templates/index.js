import Http from '../../Globals/Http';

// const get		= async ()					    => await Http.getHtml(`creator/get`);
//
// const getCountBlocks = async ()                 => await Http.get('creator/getCountBlocks');
//
// const addBlock	= async (data)				    => await Http.requestJsonNotResponse(`creator/add`, data);
//

const templatesParams = async (data)                => await Http.requestJsonNotResponse(`template/params`, data);

const get =             async ()                    => await Http.get('template/get');

const postLetterStr   = async (data)                    => await Http.requestJsonNotResponse(`template/create`, data);



export {
    // get,
    // getCountBlocks,
    // addBlock,
    templatesParams,
    get,
    postLetterStr,
}