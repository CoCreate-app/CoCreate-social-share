const delicious = (data) => {
    return 'https://delicious.com/save?v=5&provider=' + data.provider + '&noui&jump=close&url=' + data.url +
        '&title=' + data.title;
};

export default delicious;