$('body').prepend('<header></header>');
$('header').load('./header.html', heads);

function heads() {
    $('header .head ul li >a').on('mouseenter', function () {
        if ($('header').hasClass('on')) {
            $('header').removeClass('on');
            $('header').addClass('active');
        } else {
            $('header').addClass('active');
        }
    })
    $('header').on('mouseleave', function () {
        if (window.pageYOffset > 0) {
            $('header').addClass('on');
            $('header').removeClass('active');
        } else {
            $('header').removeClass('active');
        }

    })
}

window.addEventListener('scroll', function () {
    
    if (window.pageYOffset > 0) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }

})

