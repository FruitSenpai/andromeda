$(function() {

    // Short hack used to override tooltip visibility
    var $search_bar = $("#search_bar");
    $search_bar.click(function() {
       $("#search_tooltip").hide();
    });
    $search_bar.hover(function() {
        $("#search_tooltip").show();
    });

    // Logout functionality
    $("#logout").click(function() {
        window.location.replace("../login/login.html");
    });

    // Set enter key to activate the login button
    $(document).keypress(function(e) {
        if (e.which === 13){
            $("#button").click();
        }
    });

    // Snackbar appearance on button click
    (function() {
        var snackbarContainer = document.querySelector('#snackbar');
        var showToastButton = document.querySelector('#button');
        showToastButton.addEventListener('click', function() {
            var data = {message: 'Exam timetable has been generated and saved'};
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        });
    }());

});