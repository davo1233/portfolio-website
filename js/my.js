$(document).ready(function(){
    /*retrieves navbar from the nav.html page*/
    $("#nav-placeholder").load("../nav.html #nav", function(status) {
        console.log(status);
        if (status === 'error') {
            console.error('Failed to load menu.');
        }  
    });
    /*provides the fadein effect on the website*/
    $(".fade-in").css('display','none');
    $(".fade-in").fadeIn(300);

    $("#footer-placeholder").load("../footer.html #copyright", function(status) {
        console.log(status);
        if (status === 'error') {
            console.error('Failed to load menu.');
        }  
    });
    $("#main-section").css({
        "background": "url('images/background.jpg')",
        "background-size":"cover",
        "background-repeat":"no-repeat",  
    });


});

