const getData = (el, document, container) => {

    // Get url from "share-url" attribute
    let url = el.getAttribute('share-url') || '';
    if(url == '') url = container.getAttribute('share-url') || '';
    var document_URL    = encodeURIComponent((url=='') ? document.URL : url);
    
    // Get url from "share-text" attribute
    let text = el.getAttribute('share-text') || '';
    if(text == '') text = container.getAttribute('share-text') || '';
    var text_URL = encodeURIComponent(text);
    
    // Get url from "share-title" attribute
    let title = el.getAttribute('share-title') || '';
    if(title == '') title = container.getAttribute('share-title') || '';
    var title_URL = encodeURIComponent((title=='') ? document.title : title);

    // Get url from "share-height" attribute
    let height = el.getAttribute('share-height') || '';
    if(height == '') height = container.getAttribute('share-height') || '';
    height = parseInt((height=='') ? 600 : height);
    
    // Get url from "share-width" attribute
    let width = el.getAttribute('share-width') || '';
    if(width == '') width = container.getAttribute('share-width') || '';
    width = parseInt((width=='') ? 500 : width);
    
    // Get url from "share-media" attribute
    let media = el.getAttribute('share-media') || '';
    if(media == '') media = container.getAttribute('share-media') || '';
    media = encodeURIComponent((media=='') ? '' : media);

    // Get url from "share-provider" attribute
    let provider = el.getAttribute('share-provider') || '';
    if(provider == '') provider = container.getAttribute('share-provider') || '';
    provider = encodeURIComponent((provider=='') ? '' : provider);

    // Get url from "data-url" attribute
    let source = encodeURIComponent(document.URL);

    return {
        width: width,
        height: height,
        url: document_URL,
        text: text_URL,
        title: title_URL,
        media: media,
        provider: provider,
        source: source
    }
};

export default getData;