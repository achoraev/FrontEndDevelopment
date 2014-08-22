define([], function() {
  'use strict';
  var Container;
  Container = (function() {
   function Container() {
   	  this.sections = [];
   }

   Container.prototype.add = function (section){
   		this.sections[section.title] = section;
   }

   Container.prototype.getData = function () {
	   	var result = [];
	   	for (var prop in this.sections)
	   	{
	   		result.push(this.sections[prop].getData());
	   	}

        return result;
    }


   return Container;
  }());
  return Container;
});