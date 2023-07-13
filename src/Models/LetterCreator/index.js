import Http from '../../Globals/Http';

const get		= async ()					    => await Http.getHtml(`creator/get`);

const getCountBlocks = async ()                 => await Http.get('creator/getCountBlocks');

const addBlock	= async (data)				    => await Http.requestJsonNotResponse(`creator/add`, data);

const addArrowBlock = async (data)              => await Http.requestJsonNotResponse(`creator/addArrowBlock`, data);

const addImageBlock = async (data)              => await Http.requestJsonNotResponse(`creator/addImageBlock`, data);

const clearAllBlocks = async ()                 => await Http.requestHtmlNotResponse(`creator/clear/all`);

const clearOneBlock = async (data)              => await Http.requestJsonNotResponse(`creator/clear/one`, data);

const changeParams = async (data)               => await Http.requestJsonNotResponse(`creator/change/params`, data);




export {
    get,
    getCountBlocks,
    addBlock,
    clearAllBlocks,
    clearOneBlock,
    changeParams,
    addArrowBlock,
    addImageBlock,
}