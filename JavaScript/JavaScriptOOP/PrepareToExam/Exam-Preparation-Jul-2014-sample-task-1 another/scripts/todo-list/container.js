define(function() {
  'use strict';
  var Container;
  Container = (function() {
   function Container() {
		//this.container = container;
		this._array = [];
   }
   
   Container.prototype.add = function(section){
		this._array.push(section);
   }
   
   Container.prototype.getData = function(){
		var i, section, dataSections, len;

			dataSections = [];

			for (i = 0, len = this._array.length; i < len; i += 1) {
				section = this._array[i];
				dataSections.push(section.getData());
			}
			return dataSections;
		// return this._sections.map(function(section){
          // return section.getData();
      // });
   }
   
   return Container;
  }());
  return Container;
});