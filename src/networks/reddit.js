const reddit = (data) => {
    return 'http://www.reddit.com/submit?url=' + data.url + '&title=' + data.title;
};

export default reddit;