const facebook = (data) => {
    return 'https://www.facebook.com/sharer/sharer.php?display=popup&u=' + data.url + '&title=' + data.title;
};

export default facebook;