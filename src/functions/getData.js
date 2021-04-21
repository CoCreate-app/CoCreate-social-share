const getData = (el, document, container) => {

    // Get url from "data-share_url" attribute
    let url = el.dataset['share_url'] || ''
    if(url == '') url = container.dataset['share_url'] || ''
    var document_URL    = encodeURIComponent((url=='') ? document.URL : url);
    
    // Get url from "data-share_text" attribute
    let text = el.dataset['share_text'] || ''
    if(text == '') text = container.dataset['share_text'] || ''
    var text_URL = encodeURIComponent(text)
    
    // Get url from "data-share_title" attribute
    let title = el.dataset['share_title'] || ''
    if(title == '') title = container.dataset['share_title'] || ''
    var title_URL = encodeURIComponent((title=='') ? document.title : title);

    // Get url from "data-share_height" attribute
    let height = el.dataset['share_height'] || ''
    if(height == '') height = container.dataset['share_height'] || ''
    height = parseInt((height=='') ? 600 : height);
    
    // Get url from "data-share_width" attribute
    let width = el.dataset['share_width'] || ''
    if(width == '') width = container.dataset['share_width'] || ''
    width = parseInt((width=='') ? 500 : width);
    
    // Get url from "data-share_media" attribute
    let media = el.dataset['share_media'] || ''
    if(media == '') media = container.dataset['share_media'] || ''
    media = encodeURIComponent((media=='') ? '' : media);

    // Get url from "data-share_provider" attribute
    let provider = el.dataset['share_provider'] || ''
    if(provider == '') provider = container.dataset['share_provider'] || ''
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