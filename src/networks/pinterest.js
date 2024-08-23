const pinterest = (data) => {
    return 'https://www.pinterest.com/pin/create/button/?description=' + data.text + '&url=' + data.url + '&media=' +
        data.media + '&is_video=false';
};

export default pinterest;