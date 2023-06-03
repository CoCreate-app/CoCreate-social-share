import { shareLists } from '../config/constants';

const google = (data) => {
    return  shareLists.google + data.url;
};

export default google;