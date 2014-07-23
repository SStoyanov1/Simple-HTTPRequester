(function () {
    'use strict';

    require(['scripts/httpRequester'], function () {
        $('#get-data-button').on('click', getData);

        function getData() {
            httpRequester.getJSON("scripts/data.js")
                     .then(function (data) { renderJsonStudents(data) },
                           function (error) { $('#result').html(error.responseText) });
        }

        function renderJsonStudents(data) {
            var list = $("<ul id='students-list'></ul>"),
                i;
            list.append('<li><strong>Students</strong></li>')

            for (i = 0; i < data.length; i++) {
                list.append('<li class="student">' + data[i].fname + ' ' + data[i].lname + ':' + ' ' + data[i].marks + '</li>');
            };

            $('#result').html(list);
        }
    });
}());

