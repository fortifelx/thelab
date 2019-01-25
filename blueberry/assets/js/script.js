(function(){
    var height = $('.contacts_map img').css('height');
    $('.contacts_data_flex').css('height', height);
    $( window ).resize(function(){
        var height = $('.contacts_map img').css('height');
        $('.contacts_data_flex').css('height', height);
    });
})();
(function(){
    $('.nav_menu a').on('click', function (e) {
        var targetSec = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetSec).offset().top - 50
        }, 2000, "swing");
    });
    $('.main_text_btn').on('click', function (e) {
        var targetSec = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetSec).offset().top
        }, 2000, "swing");
    });
})();
(function(){
    var nav = $('.nav');
    var abouts = $('.about_block');
    var about1 = $(abouts[0]);
    var about2 = $(abouts[1]);
    var about3 = $(abouts[2]);
    var about4 = $(abouts[3]);
    var contacts = $('.contacts_data_wrapper');
    var contact1 = $(contacts[0]);
    var contact2 = $(contacts[1]);
    var contact3 = $(contacts[2]);
    window.onscroll = function() {
        var screenheight = document.documentElement.clientHeight*0.6;
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if( scrolled > 20) {
            nav.addClass('nav_active');
        } else {
            nav.removeClass('nav_active');
        }
        if(scrolled > about1.offset().top - screenheight ) {
            about1.addClass('about_block_active');
        }
        if(scrolled > about2.offset().top - screenheight ) {
            about2.addClass('about_block_active');
        }
        if(scrolled > about3.offset().top - screenheight ) {
            about3.addClass('about_block_active');
        }
        if(scrolled > about4.offset().top - screenheight ) {
            about4.addClass('about_block_active');
        }
        if(scrolled > contact1.offset().top - screenheight - 200) {
            contact1.addClass('contacts_data_wrapper_active');
        }
        if(scrolled > contact2.offset().top - screenheight - 200 ) {
            contact2.addClass('contacts_data_wrapper_active');
        }
        if(scrolled > contact3.offset().top - screenheight - 300 ) {
            contact3.addClass('contacts_data_wrapper_active');
        }
    }
})();
(function() {
    // Init
    var targets = $('.container_effect');
    var inside = $('.inside_effect');
    // targets.each(function(index){
    //     console.log(this);
    //    effect3d(this, inside[index]);
    // });
    $(targets[1]).css({
        perspective: '170px'
    })
    effect3d(targets[0], inside[0]);
    effect3d(targets[1], inside[1]);
    function effect3d(con, inn) {
    var container = con,
        inner = inn;
    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function(event) {
        update(event);
    };

    var onMouseLeaveHandler = function() {
        inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };

    //----------------------------------------------------

    var update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
    }
})();
// (function() {
//     // Init
//     var container = document.getElementById("container"),
//         inner = document.getElementById("inner");
//
//     var targets = $('.container_effect');
//     var inside = $('.inside_effect');
//     // Mouse
//     // targets.each(function(){
//     //     console.log(this);
//     // });
//     var mouse = {
//         _x: 0,
//         _y: 0,
//         x: 0,
//         y: 0,
//         updatePosition: function(event) {
//             var e = event || window.event;
//             this.x = e.clientX - this._x;
//             this.y = (e.clientY - this._y) * -1;
//         },
//         setOrigin: function(e) {
//             this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//             this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//         },
//         show: function() {
//             return "(" + this.x + ", " + this.y + ")";
//         }
//     };
//
//     // Track the mouse position relative to the center of the container.
//     // mouse.setOrigin(container);
//     targets.each(function(){
//         mouse.setOrigin(this);
//     });
//
//     //----------------------------------------------------
//
//     var counter = 0;
//     var refreshRate = 10;
//     var isTimeToUpdate = function() {
//         return counter++ % refreshRate === 0;
//     };
//
//     //----------------------------------------------------
//
//     var onMouseEnterHandler = function(event) {
//         update(event);
//     };
//
//     var onMouseLeaveHandler = function(target) {
//         target.style = "";
//     };
//
//     var onMouseMoveHandler = function(event) {
//         if (isTimeToUpdate()) {
//             update(event);
//         }
//     };
//
//     //----------------------------------------------------
//
//     var update = function(target, event) {
//         mouse.updatePosition(event);
//         updateTransformStyle(
//             (mouse.y / target.offsetHeight / 2).toFixed(2),
//             (mouse.x / target.offsetWidth / 2).toFixed(2),
//             target
//         );
//     };
//
//     var updateTransformStyle = function(x, y, target) {
//         var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//         target.style.transform = style;
//         target.style.webkitTransform = style;
//         target.style.mozTranform = style;
//         target.style.msTransform = style;
//         target.style.oTransform = style;
//     };
//
//     //--------------------------------------------------------
//
//     // container.onmousemove = onMouseMoveHandler;
//     // container.onmouseleave = onMouseLeaveHandler;
//     // container.onmouseenter = onMouseEnterHandler;
//     targets.each(function(index){
//         this.onmousemove = onMouseMoveHandler(inside[index], event);
//         this.onmouseleave = onMouseLeaveHandler(inside[index], event);
//         this.onmouseenter = onMouseEnterHandler(inside[index], event);
//     });
// })();
