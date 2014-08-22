(function () {
    var $errorMessage,
        $successMessage,
        addStudent,
        reloadStudents,
        resourceUrl;

    resourceUrl = 'http://localhost:3000/students';

    $successMessage = $('.messages .success');

    $errorMessage = $('.messages .error');

    addStudent = function (data) {
        return $.ajax({
            url: resourceUrl,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (data) {
                $successMessage.html('' + data.name + ' student added').show();
                reloadStudents();
            },
            error: function (err) {
                $errorMessage.html("Error happened: " + err).show();
            }
        });
    };

    reloadStudents = function () {
        $.ajax({
            url: resourceUrl,
            type: 'GET',
            contentType: 'application/json',
            success: function (data) {
                var student,
                    $studentsList,
                    len = data.students.length,
                    i;
                $studentsList = $('<ul/>').addClass('students-list');
                for (i = 0; i < len; i++) {
                    student = data.students[i];
                    $('<li />')
                      .addClass('student-item')
                      .append($('<strong /> ').html(student.name))
                      .append($('<span />').html(student.grade))
                      .appendTo($studentsList);
                }
                $('#students-container').html($studentsList);
            },
            error: function (err) {
                $errorMessage.html("Error happened: " + err).show();
            }
        });
    };

    $(function () {
        reloadStudents();
        $('#btn-add-student').on('click', function () {
            var student = {
                name: $('#tb-name').val(),
                grade: $('#tb-grade').val()
            };
            addStudent(student);
        });
    });

}());