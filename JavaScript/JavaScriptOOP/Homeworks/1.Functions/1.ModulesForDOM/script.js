// 1. Create a module for working with DOM. The module should have the following functionality
// Add DOM element to parent element given by selector
// Remove element from the DOM  by given selector
// Attach event to given selector by given event type and event hander
// Add elements to buffer, which appends them to the DOM when their count for some selector becomes 100
// The buffer contains elements for each selector it gets
// Get elements by CSS selector
// The module should reveal only the methods

var domModule = function (){

	var buffer = {},  
		BUFFER_SIZE = 100;
	
	var appendChildToDom = function (element, selector){
		var selected = document.querySelector(selector);
		var elementCreated = document.createElement(element);
		selected.appendChild(elementCreated);
	};
	
	var removeChild = function (parent, child){
		var selected = document.querySelector(parent);		
		var child = selected.querySelector(child);
		selected.removeChild(child);
	};
	
	var addHandler = function (selector, eventType, handler){
		var selected = document.querySelector(selector);
		selected.addEventListener(eventType, handler);
	};
	
	var appendToBuffer = function (selector, element){
		var selected = document.querySelector(selector);
		if (!buffer[selector]) {
			buffer[selector] = document.createDocumentFragment();
		}
		buffer[selector].appendChild(element);
		if (buffer[selector].childNodes.length === BUFFER_SIZE){
			selected.appendChild(buffer[selector]);
			buffer[selector] = null;
		}
	};
	
	var cssSelector = function (selector) { 
		return document.querySelectorAll(selector);   
	}	
	
	return {
		appendChildToDom: appendChildToDom,
		removeChild: removeChild,
		addHandler: addHandler,
		appendToBuffer: appendToBuffer,
		cssSelector: cssSelector
	}
}();