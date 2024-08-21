const getData = (el, document, container) => {

    let url = el.getAttribute('share-url') || '';
    if (url == '') url = container.getAttribute('share-url') || '';
    // url = encodeURIComponent((url == '') ? document.URL : url);

    const urlObj = new URL(url || document.URL);
    url = encodeURIComponent(urlObj.origin) + urlObj.pathname + urlObj.search + urlObj.hash;

    let text = el.getAttribute('share-text') || '';
    if (text == '') text = container.getAttribute('share-text') || '';
    text = encodeURIComponent(text);

    let title = el.getAttribute('share-title') || '';
    if (title == '') title = container.getAttribute('share-title') || '';
    title = encodeURIComponent((title == '') ? document.title : title);

    let height = el.getAttribute('share-height') || '';
    if (height == '') height = container.getAttribute('share-height') || '';
    height = parseInt((height == '') ? 600 : height);

    let width = el.getAttribute('share-width') || '';
    if (width == '') width = container.getAttribute('share-width') || '';
    width = parseInt((width == '') ? 500 : width);

    let media = el.getAttribute('share-media') || '';
    if (media == '') media = container.getAttribute('share-media') || '';
    media = encodeURIComponent((media == '') ? '' : media);

    return {
        width,
        height,
        url,
        text,
        title,
        media,
        source: url
    }
};

export default getData;