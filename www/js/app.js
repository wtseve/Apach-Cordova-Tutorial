// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        renderHomeView();
        console.log("Service initialized by renderHomeView");
    });

    /* --------------------------------- Event Registration -------------------------------- */

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