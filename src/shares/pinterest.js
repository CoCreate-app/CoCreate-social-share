import { shareLists } from '../config/constants';

const pinterest = (data) => {
    return  shareLists.pinterest + data.text + '&url=' + data.url + '&media=' + 
        data.media + '&is_video=false';
};

export default pinterest;