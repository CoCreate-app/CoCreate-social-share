import { shareLists } from '../config/constants';

const delicious = (data) => {
    return  shareLists.delicious + data.provider + '&noui&jump=close&url=' + data.url + 
        '&title=' + data.title;
};

export default delicious;