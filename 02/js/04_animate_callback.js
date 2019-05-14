$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate({'width':'60%', 'height':'30%'}, 10000, function(){
            $(this).html('CABÔ!');
        });
    });
});