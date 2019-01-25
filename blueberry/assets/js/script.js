(function(){
    var height = $('.contacts_map img').css('height');
    $('.contacts_data_flex').css('height', height);
    $( window ).resize(function(){
        var height = $('.contacts_map img').css('height');
        $('.contacts_data_flex').css('height', height);
    });
})();
