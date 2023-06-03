import { shareLists } from '../config/constants';

const twitter = (data) => {
    return  shareLists.twitter + data.text + '&url=' + data.url;
};

export default twitter;