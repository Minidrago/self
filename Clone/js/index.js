$('body').prepend('<header></header>');
$('header').load('./header.html', heads);

//상단비주얼
let fireNum = 0;
function fireFun(){
    fireNum++;
    const elFire = document.querySelectorAll('.fire');
    let endTime = fireNum%2;

    elFire.forEach((v,k)=>{            
        let keyframes = [
            {transform:'scale(0)'},
            {transform:'scale(1)'},
        ];
    
        let option = {
            duration:500,
            delay:endTime ? 800*k : 0,
            fill:'forwards',
            direction :endTime ? 'alternate' : 'alternate-reverse',
        }    
        elFire[k].animate(keyframes,option)
    })
    setTimeout(fireFun,5000)
}
fireFun();






//헤더

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



//본문내용 활성화
const section = document.querySelectorAll('section')

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    })
})

section.forEach((el) => {
    io.observe(el)
})




//슬라이드
window.addEventListener('load',()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    var swiper = new Swiper(".mySwiper2", {
        //effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop:true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
})



//사이드 배너(원)
$(window).scroll(function () {
    let yOffset = window.pageYOffset;
    let calc = yOffset / ($('body').outerHeight() - $(window).outerHeight());

    $('#cir1').css({
        'transform': `translatey(-50%) rotate(${calc * 360}deg)`
    });
    $('#cir2').css({
        'transform': `translatey(-50%) rotate(${calc * 360}deg)`
    });

});

/* on:{
    slideChange:function(e){
        mySwiperChange(e.realIndex);
    }
} */



/* let sInfo = [
    {
        title:'SMUF 2022, STAGE', 
        summary:'다양한 취향을 저격할<br>다채로운 장르의 메인 공연',
        other:'Beautiful Stage, Soulful Stage, Powerful Stage, Wonderful Stage'
    },
    {
        title:'SMUF 2022, MUSIC', 
        summary:'다양한 취향을 저격할<br>다채로운 장르의 메인 공연',
        other:'Beautiful Stage, Soulful Stage, Powerful Stage, Wonderful Stage'
    },
    {
        title:'SMUF 2022, BEAUTY', 
        summary:'다양한 취향을 저격할<br>다채로운 장르의 메인 공연',
        other:'Beautiful Stage, Soulful Stage, Powerful Stage, Wonderful Stage'
    }
]
function mySwiperChange(n){
    let title = sInfo[n].title.split(',');
    let other = sInfo[n].other.split(',');

    let otherTag = '';
    other.forEach(function(v){
        otherTag += `<li>${v}</li>`;
    })

    const el = document.querySelector('.m_text');
    
    el.innerHTML = `<p>
                        <span>${title[0]}</span><br>
                        <span>${title[1]}</span>
                    </p>
                    <p>${sInfo[n].summary}</p>
                    <ul>${otherTag}</ul>`;

    
} */