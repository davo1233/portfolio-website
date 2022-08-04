var timer = new easytimer.Timer();
$(document).ready(function(){ 
    console.log('02384902384');
    $('#timer .startButton').click(function() {
        timer.start();
    });

    $('#timer .pauseButton').click(function() {
        timer.pause();
    });

    $('#timer .stopButton').click(function() {
        timer.stop();
    });

    $('#timer .resetButton').click(function() {
        timer.reset();
    });

    timer.addEventListener('secondsUpdated', function(e) {
        $('#timer .values').html(timer.getTimeValues().toString());
    });

    timer.addEventListener('started', function(e) {
        $('#timer .values').html(timer.getTimeValues().toString());
    });

    timer.addEventListener('reset', function(e) {
        $('#timer .values').html(timer.getTimeValues().toString());
    });
});
