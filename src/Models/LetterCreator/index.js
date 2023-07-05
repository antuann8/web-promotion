import Http from '../../Globals/Http';

const get		= async ()					    => await Http.getHtml(`creator/get`);

const getCountBlocks = async ()                 => await Http.get('creator/getCountBlocks');

const addBlock	= async (data)				    => await Http.requestJsonNotResponse(`creator/add`, data);

const clearAllBlocks = async ()                 => await Http.requestHtmlNotResponse(`creator/clear/all`);

const changeBackColor = async (data)            => await Http.requestJsonNotResponse(`creator/change/backgroundColor`, data);

const clearBlock = async (data)                => await Http.requestJsonGetHtml(`creator/clear/one`, data);

const changeFontFamily = async (data)          => await Http.requestJsonNotResponse(`creator/change/fontFamily`, data);

const changeFontSize = async (data)          => await Http.requestJsonNotResponse(`creator/change/fontSize`, data);




export {
    get,
    getCountBlocks,
    addBlock,
    clearAllBlocks,
    changeBackColor,
    clearBlock,
    changeFontFamily,
    changeFontSize,
}