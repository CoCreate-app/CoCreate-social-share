const stumbleupon = (data) => {
    return 'http://www.stumbleupon.com/submit?url=' + data.url + '&title=' + data.title;
};

export default stumbleupon;