$(document).ready(function () {
    
    
    
    $('#nav-home').click(function() {
        $(this).addClass('active-nav');
        $('#nav-videos').removeClass('active-nav');
        $('#nav-deck').removeClass('active-nav');
        $('#nav-calendar').removeClass('active-nav');
    });
    
    $('#nav-videos').click(function() {
        $(this).addClass('active-nav');
        $('#nav-home').removeClass('active-nav');
        $('#nav-deck').removeClass('active-nav');
        $('#nav-calendar').removeClass('active-nav');
    });
    
    $('#nav-deck').click(function() {
        $(this).addClass('active-nav');
        $('#nav-videos').removeClass('active-nav');
        $('#nav-home').removeClass('active-nav');
        $('#nav-calendar').removeClass('active-nav');
    });
    
    $('#nav-calendar').click(function() {
        $(this).addClass('active-nav');
        $('#nav-videos').removeClass('active-nav');
        $('#nav-deck').removeClass('active-nav');
        $('#nav-home').removeClass('active-nav');
    });
})