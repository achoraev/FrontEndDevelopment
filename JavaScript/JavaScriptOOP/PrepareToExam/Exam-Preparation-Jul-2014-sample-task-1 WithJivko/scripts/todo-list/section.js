define(function() {
  'use strict';
  var Section;
  Section = (function() {
    function Section(title) {
	     this.title = title;
       this.items = [];
    }

    Section.prototype.add = function (item) {
        this.items.push( item );
        return this;
    }
	
    Section.prototype.getData = function () {
      var result = [];
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        result.push(item.getData());
      }
        //    this.items.forEach(function(item) {
        //     result.push(item.getMyData());
        // });
         var ret = {};
         ret['title'] = this.title;
         ret['items'] = result;
        return ret;
    }
	return Section;
  }());
  return Section;
});