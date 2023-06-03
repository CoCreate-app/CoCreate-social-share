import { shareLists } from '../config/constants';

const hackernews = (data) => {
    return  shareLists.hackernews + data.url + '&t=' + data.title;
};

export default hackernews;