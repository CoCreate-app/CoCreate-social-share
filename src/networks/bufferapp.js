const bufferapp = (data) => {
    return 'http://bufferapp.com/add?text=' + data.text + '&url=' + data.url;
};

export default bufferapp;