import { shareLists } from '../config/constants';

const reddit = (data) => {
    return  shareLists.reddit + data.url + '&title=' + data.title;
};

export default reddit;