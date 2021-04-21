// import constants
import { selectorClick, selectorDiv, options } from './config/constants';

// import functions
import getData from './functions/getData';
import share from './shares/index';

const CoCreateSocialShare = {
    
    //document_URL:'https://server.cocreate.app',
    
	init : function(){
	    let elements = document.querySelectorAll(selectorClick);
	    elements.forEach(el=>this.initElement(el));
	},
	
	initElement : function (el) {
	    var that = this;
	    el.addEventListener("click", function(event){ 

			// Select Div element with dataset to share
			event.preventDefault()
			let container = el.closest(selectorDiv)

			// Get data to share from attributes
			const data = getData(el, document, container);

			// Get general url to share from data
			const network = share(el, data);

			// Popup sub-window to share data
    	    that.popup(network)
	    });   
	},
	
	popup : function(network){
	    window.open(network["url"], '', options+'height='+network["height"]+',width='+network["width"]);
	}

}

CoCreateSocialShare.init();
export default CoCreateSocialShare;