const CoCreateSocialShare = {
    
    //document_URL:'https://server.cocreate.app',
    
	init : function(selector){
	    console.log(this.document_URL)
	    selector = selector || 'a.share'
	    let elements = document.querySelectorAll(selector);
	    elements.forEach(el=>this.initElement(el))
	},
	
	initElement : function (el) {
	    //console.log(el)
	    var that = this;
	    el.addEventListener("click", function(event){ 
	        event.preventDefault();
	        var document_URL    = encodeURIComponent(document.URL);
    	    var network = {};
    	    switch (el.dataset['network']) {
    	        case 'facebook':
    	            network['url'] = 'https://www.facebook.com/sharer/sharer.php?display=popup&u='+document_URL
    	        break;
    	        case 'twitter':
    	            network['url'] = 'https://twitter.com/intent/tweet?text='+encodeURIComponent('Build your business #cocreate.app ')+'&url='+document_URL
    	        break;
    	        case 'google':
    	            network['url'] = 'https://plus.google.com/share?url='+document_URL
    	        break;
    	        case 'linkedin':
    	            network['url'] = 'https://plus.google.com/share?url='+document_URL
    	        break;
    	        case 'pintrest':
    	            var title   = encodeURIComponent(document.title);
    	            network['url'] = 'https://www.pinterest.com/pin/create/button/?description=' + that.document_URL + '&title=' + title
    	       break;
    	    }
    	    network['height'] = el.dataset['height'] || 600
    	    network['width'] = el.dataset['width'] || 500
    	    console.log(network)
    	    that.popup(network)
	    });   
	},
	
	popup : function(network){
	    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
	    window.open(network["url"], '', options+'height='+network["height"]+',width='+network["width"]);
	}

}

CoCreateSocialShare.init();

/*
		$(document).ready(function(){



			$('a.share').click(function(e){

			e.preventDefault();

			var $link   = $(this);

			var href    = encodeURIComponent(document.URL);

			var title   = encodeURIComponent(document.title);

			var href    = 'https://cocreate.app';

			var network = $link.attr('data-network');



			var networks = {

			    facebook : { url : 'https://www.facebook.com/sharer/sharer.php?display=popup&u='+href, width : 600, height : 500 },

			    twitter  : { url : 'https://twitter.com/intent/tweet?text='+encodeURIComponent('Build your business #cocreate.app ')+'&url='+href ,width : 600, height : 500 },

			    google   : { url : 'https://plus.google.com/share?url='+href, width : 600, height : 500 },

			    linkedin : { url : 'http://www.linkedin.com/shareArticle?mini=true&url=' + href + '&title=' + title,  width : 600, height : 500 },

			    pintrest : { url : 'https://www.pinterest.com/pin/create/button/?description=' + href + '&title=' + title,  width : 600, height : 500 },

			};


			var popup = function(network){

			    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';

			    window.open(networks[network].url, '', options+'height='+networks[network].height+',width='+networks[network].width);

			}

			popup(network);

			});

	});

*/