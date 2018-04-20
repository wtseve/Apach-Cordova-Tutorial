// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        renderHomeView();
        console.log("Service initialized by renderHomeView");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });

    // document.addEventListener('deviceready', function () {
    //     FastClick.attach(document.body);
    //     if (navigator.notification) { // Override default HTML alert with native dialog
    //         window.alert = function (message) {
    //             navigator.notification.alert(
    //                 message, //message
    //                 null, // callback
    //                 "Workshop", // title
    //                 'OK' // buttonName
    //             );
    //         };
    //     }
    // }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        service.findByName($('.search-key').val()).done(function (employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i = 0; i < l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    }

    /*  ---------------------------------- Home View markup programmatical generation ---------------------------------- */
    function renderHomeView() {
        var html =
            "<h1>Répertoire</h1>" +
            "<input class='search-key' type='search' placeholder='Enter name' />" +
            "<ul class='employee-list'></ul>";
        $('body').html(html);
        $('.search-key').on('keyup', findByName);
    }


}());