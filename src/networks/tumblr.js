const tumblr = (data) => {
    return 'http://www.tumblr.com/share?s=&v=3&u=' + data.url + '&t=' + data.title;
};

export default tumblr;