define(['jquery', 'userInterface'], function ($, userInterface) {
    'use strict';

    var resourceUrl = 'http://localhost:3000/students/';

    function addStudent(name, grade) {
        var student = {
            name: name,
            grade: grade
        };
        return $.post(resourceUrl, student)
        .done(successAddStudent)
        .done(reloadStudents)
        .fail(userInterface.showError)
    };

    function removeStudent(id) {
        return $.ajax({
            url: resourceUrl + id,
            type: 'POST',
            data: {
                _method: 'delete'
            }
        })
        .done(successRemoveStudent)
        .done(reloadStudents)
        .fail(userInterface.showError)
    };

    function reloadStudents() {
        return $.get(resourceUrl)
            .done(userInterface.showStudents)
            .fail(userInterface.showError)
    };

    function successAddStudent(data) {
        var msg = '' + data.name + ' succesfully added!!!';
        userInterface.showSuccessMessage(msg);
    };

    function successRemoveStudent(data) {
        userInterface.showSuccessMessage('Student succesfully remove!!!');
    };

    return {
        addStudent: addStudent,
        removeStudent: removeStudent,
        reloadStudents: reloadStudents
    }
});