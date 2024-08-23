const hackernews = (data) => {
    return 'http://news.ycombinator.com/submitlink?u=' + data.url + '&t=' + data.title;
};

export default hackernews;