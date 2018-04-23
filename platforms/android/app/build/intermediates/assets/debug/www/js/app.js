// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* --------------------------------- Template Variables -------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeListTpl = Handlebars.compile($("#employee-list-tpl").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        renderHomeView();
        console.log("Service initialized by renderHomeView");
    });

    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByName() {
        service.findByName($('.search-key').val()).done(function (employees) {
            $('.content').html(employeeListTpl(employees));
        });
    }

    /*  ---------------------------------- Home View markup programmatical generation ---------------------------------- */
    function renderHomeView() {
        $('body').html(homeTpl());
        $('.search-key').on('keyup', findByName);
    }


}());