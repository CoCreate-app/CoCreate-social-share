import { shareLists } from '../config/constants';

const linkedIn = (data) => {
    return  shareLists.linkedIn + data.url + '&title=' + data.title + '&source='+ data.source;
};

export default linkedIn;