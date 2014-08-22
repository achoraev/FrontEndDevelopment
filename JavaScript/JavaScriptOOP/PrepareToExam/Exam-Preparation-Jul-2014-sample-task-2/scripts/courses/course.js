define(['courses/student'], function () {
  'use strict';
  var Course;
  Course = (function () {
    function Course(courseName, scoreFormula) {
        this._courseName = courseName;
        this._scoreFormula = scoreFormula;
        this._students = [];
    }

    Course.prototype = {
      addStudent: function(student){
          this._students.push(student);
      },
      calculateResults: function(){
            var self = this;
            this._students.forEach(function(student){
                student.totalResult = self._scoreFormula(student);
            });
      }, 
      getTopStudentsByExam: function(count){           
            this._students.sort(function(first, second){
                return second.exam - first.exam;
            })
            return this._students.slice(0, count);
      }, 
      getTopStudentsByTotalScore: function(count){
            this._students.sort(function(first, second){
                return second.totalResult - first.totalResult;
            })
            return this._students.slice(0, count);
      }
    };

    return Course;
  }());
  return Course;
});