(function () {
    'use strict';

    require.config({
        paths: {
            jquery: "/libs/jquery-2.1.1.min",
            managingStudents: "managingStudents",
            userInterface: "userInterface",
            handlebars: "/libs/handlebars-v1.3.0"
        }
    });

    require(["jquery", "managingStudents", "userInterface"], function ($, managingStudents, userInterface) {
        $(document).ready(function () {
            managingStudents.reloadStudents();
            userInterface.attachHandlers(managingStudents.addStudent, managingStudents.removeStudent)
        });
    });
}());

//    },
//    shim: {
//        'handlebars': {
//            exports: 'Handlebars'
//        }
//    }
//});