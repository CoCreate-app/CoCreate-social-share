import { shareLists } from '../config/constants';

const facebook = (data) => {
    return  shareLists.facebook + data.title + '&amp;p[summary]=' + data.text + 
        '&amp;p[url]=' + data.url + '&amp;p[images[0]=' + data.media;
};

export default facebook;