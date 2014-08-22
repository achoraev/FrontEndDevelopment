define(function() {
  'use strict';
  var Section;
  Section = (function() {
    function Section(title) {
	     this.title = title;
       this._items = [];
    }
	
  Section.prototype.add = function(item){
      this._items.push(item);
      //return this;
  };

  Section.prototype.getData = function(){
      var result = [];
      // fast way without loop
      // var result = this._items.map = function() {
      //       return item.getData();
      // };

      for (var i = 0; i < this._items.length; i++) {
          var item = this._items[i];
          result.push(item.getData());
      };

      return {
          title: this.title,
          items: result
      }
  };

	return Section;
  }());
  return Section;
});