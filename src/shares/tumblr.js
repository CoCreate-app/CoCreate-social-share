import { shareLists } from '../config/constants';

const tumblr = (data) => {
    return  shareLists.tumblr + data.url + '&t=' + data.title;
};

export default tumblr;