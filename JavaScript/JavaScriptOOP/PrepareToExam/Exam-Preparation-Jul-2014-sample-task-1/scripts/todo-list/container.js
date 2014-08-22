define(function() {
  'use strict';
  var Container;
  Container = (function() {
   function Container() {   		
   		this._sections = [];
   }

   Container.prototype.add = function(section){
      this._sections.push(section);
   		//this._sections[section.title] = section;
   };

   Container.prototype.getData = function(){   		
      return this._sections.map(function(section){
          return section.getData();
      });
      // var result = [];
   		// for (var prop in this._sections)
	   	// {
	   	// 	result.push(this._sections[prop].getData());
	   	// }

   		// return result;
   };
   return Container;
  }());
  return Container;
});