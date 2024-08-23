
import networks from './networks/index';

const CoCreateSocialShare = {

    init: function () {
        const selectorClick = '[share-network]';

        let elements = document.querySelectorAll(selectorClick);
        elements.forEach(el => this.initElement(el));
    },

    initElement: function (el) {
        const self = this;
        el.addEventListener("click", function (event) {

            // Select Div element with dataset to share
            event.preventDefault()
            const selectorDiv = '[share-url], [share-title], [share-text], [share-height], [share-width] [share-media]';
            const container = el.closest(selectorDiv)

            // Get data to share from attributes
            const data = self.getData(el, document, container);

            // Generate share url from data
            const network = networks(el, data);

            // Popup sub-window to share data
            self.popup(network)
        });
    },

    getData: function (el, document, container) {

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
    },

    popup: function (network) {
        const options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
        window.open(network["url"], '', options + 'height=' + network["height"] + ',width=' + network["width"]);
    }

}

CoCreateSocialShare.init();
export default CoCreateSocialShare;