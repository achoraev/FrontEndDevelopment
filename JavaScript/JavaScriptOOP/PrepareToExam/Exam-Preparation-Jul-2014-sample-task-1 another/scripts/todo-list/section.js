define(function() {
  'use strict';
  var Section;
  Section = (function() {
    function Section(title) {
		this._title = title;
		this._items = [];
    }
	
	Section.prototype.add = function(item){
		this._items.push(item);
	}
	
	Section.prototype.getData = function(){
		var result = [];
		for (var i = 0; i < this._items.length; i++){
			var item = this._items[i];
			result.push(item.getData());
		}
		
		return {
			title: this._title, 
			items: result
		}
	}
	
	return Section;
  }());
  return Section;
});