const CoCreateSocialShare = {
    
    //document_URL:'https://server.cocreate.app',
    
	init : function(selector){
	    console.log(this.document_URL)
	    selector = selector || 'a.share'
	    let elements = document.querySelectorAll(selector);
	    elements.forEach(el=>this.initElement(el))
	},
	
	initElement : function (el) {
	    var that = this;
	    el.addEventListener("click", function(event){ 
	        event.preventDefault();
	        let container = el.closest('.social_share');
			
	        let url = container.dataset['url'] || ''
	        if(url == '')
	        	url = el.dataset['url'] || ''
	        var document_URL    = encodeURIComponent((url=='') ? document.URL : url);
	        
	        let text = container.dataset['text'] || ''
	        if(text == '')
	        	text = el.dataset['text'] || ''
	        var text_URL = encodeURIComponent(text)
	        
	        let title = container.dataset['title'] || ''
	        if(title == '')
	        	title = el.dataset['title'] || ''
	        var title_URL    = encodeURIComponent((title=='') ? document.title : title);

	        let height = container.dataset['height'] || ''
	        if(height == '')
	        	height = el.dataset['height'] || ''
	        height    = parseInt((height=='') ? 600 : height);
	        
	        let width = container.dataset['width'] || ''
	        if(width == '')
	        	width = el.dataset['width'] || ''
	        width    = parseInt((width=='') ? 500 : width);
	        
	        let media = container.dataset['media'] || ''
	        if(media == '')
	        	media = el.dataset['media'] || ''
	        media    = encodeURIComponent((media=='') ? '' : media);

			let source = encodeURIComponent(document.URL);
			
    	    var network = {};
    	    switch (el.dataset['network']) {
    	        case 'facebook':
    	            network['url'] = 'https://www.facebook.com/sharer/sharer.php?display=popup&u='+document_URL+'&title='+title_URL
    	        break;
    	        case 'twitter':
    	            network['url'] = 'https://twitter.com/intent/tweet?text='+text_URL+'&url='+document_URL
    	        break;
    	        case 'google':
    	            network['url'] = 'https://plus.google.com/share?url='+document_URL
    	        break;
    	        case 'linkedin':
    	            network['url'] = 'https://www.linkedin.com/shareArticle?mini=true&url='+document_URL+'&title='+title_URL+'&source='+source;
    	        break;
    	        case 'pintrest':
    	            network['url'] = 'https://www.pinterest.com/pin/create/button/?description=' + title_URL + '&url=' + document_URL+'&media='+media+'&is_video=false'
    	       break;
    	    }
    	    network['height'] = height;
    	    network['width'] = width;
    	    that.popup(network)
	    });   
	},
	
	popup : function(network){
	    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
	    window.open(network["url"], '', options+'height='+network["height"]+',width='+network["width"]);
	}

}

CoCreateSocialShare.init();
