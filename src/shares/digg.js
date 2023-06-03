import { shareLists } from '../config/constants';

const digg = (data) => {
    return  shareLists.digg + data.url + '&title=' + data.title;
};

export default digg;