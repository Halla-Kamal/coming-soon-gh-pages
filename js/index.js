$(document).ready(function () {
    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({
            until: austDay,
            format: 'odHMS'
        });
    });

    wow = new WOW({
        mobile: false
    })
    wow.init();

    // form-validation
    $('.form-control').blur(function () {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        } else {
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });

     // loader
     $(window).on("load", function () {
        $(".loader-wrapper").fadeOut("slow");
    });

});