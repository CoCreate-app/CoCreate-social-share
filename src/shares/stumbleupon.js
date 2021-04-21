import { shareLists } from '../config/constants';

const stumbleupon = (data) => {
    return  shareLists.stumbleupon + data.url + '&title=' + data.title;
};

export default stumbleupon;