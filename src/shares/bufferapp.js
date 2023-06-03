import { shareLists } from '../config/constants';

const bufferapp = (data) => {
    return  shareLists.bufferapp + data.text + '&url=' + data.url;
};

export default bufferapp;