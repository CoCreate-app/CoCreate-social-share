const linkedIn = (data) => {
    return 'https://www.linkedin.com/shareArticle?mini=true&url=' + data.url + '&title=' + data.title + '&source=' + data.source;
};

export default linkedIn;