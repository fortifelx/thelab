(function(){
    var height = $('.contacts_data').css('height');
    $('.contacts_data_flex').css('height', height);
    $( window ).resize(function(){
        var height = $('.contacts_data').css('height');
        $('.contacts_data_flex').css('height', height);
    });
})();