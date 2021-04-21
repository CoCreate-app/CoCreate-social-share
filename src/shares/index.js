import facebook from "./facebook";
import google from "./google";
import linkedIn from "./linkedIn";
import twitter from "./twitter";
import pinterest from "./pinterest";
import tumblr from "./tumblr";
import reddit from "./reddit";
import hackernews from "./hackernews";
import bufferapp from "./bufferapp";
import digg from "./digg";
import stumbleupon from "./stumbleupon";
import delicious from "./delicious";

const share = (el, data) => {
    var network = {};
    switch (el.dataset['network']) {
        case 'facebook': network['url'] = facebook(data); break;
        case 'twitter': network['url'] = twitter(data); break;
        case 'google': network['url'] = google(data); break;
        case 'linkedin': network['url'] = linkedIn(data); break;
        case 'pintrest': network['url'] = pinterest(data); break;
        case 'tumblr': network['url'] = tumblr(data); break;
        case 'reddit': network['url'] = reddit(data); break;
        case 'hackernews': network['url'] = hackernews(data); break;
        case 'bufferapp': network['url'] = bufferapp(data); break;
        case 'digg': network['url'] = digg(data); break;
        case 'stumbleupon': network['url'] = stumbleupon(data); break;
        case 'delicious': network['url'] = delicious(data); break;
    }
    network['height'] = data.height;
    network['width'] = data.width;

    return network;
};

export default share;