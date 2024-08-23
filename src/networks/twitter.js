const twitter = (data) => {
    return 'https://twitter.com/intent/tweet?text=' + data.text + '&url=' + data.url;
};

export default twitter;