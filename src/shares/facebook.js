import { shareLists } from '../config/constants';

const facebook = (data) => {
    return  shareLists.facebook + data.url + '&title=' + data.title;
};

export default facebook;