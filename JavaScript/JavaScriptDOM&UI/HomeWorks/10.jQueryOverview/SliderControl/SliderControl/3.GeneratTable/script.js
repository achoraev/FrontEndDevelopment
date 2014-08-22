var students = [
                { fname: 'Peter', lname: 'Ivanov', grade: '3' },
                { fname: 'Milena', lname: 'Grigorova', grade: '6' },
                { fname: 'Gergana', lname: 'Borisova', grade: '12' },
                //{ fname: 'Ivana', lname: 'Borisova', grade: '8' }, 
                //{ fname: 'Penka', lname: 'Borisova', grade: '10' },
                { fname: 'Boyko', lname: 'Petrov', grade: '7' }
];

window.onload = function generateTable() {
    $table = $('<table>');
    $table.append('<tr><th>' + 'First name' + '</th><th>' + 'Last name' + '</th><th>' + 'Grade' + '</th></tr>');
    $.each(students, function (i, student) {
        var tr = $('<tr>');
        $.each(student, function (prop) {
            $('<td>').html(student[prop]).appendTo(tr);
        });
        $table.append(tr);
    });
    $('#container').append($table);
};