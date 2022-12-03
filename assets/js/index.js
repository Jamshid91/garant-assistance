const headerBurger = document.querySelector('.header-burger'),
      body = document.querySelector('body'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),
      headerList = document.querySelectorAll('.menu .header-list')



headerBurger.addEventListener('click', ()=> {
    menu.classList.remove('d-none');
    body.classList.add('overflow-hidden'); 
});
    
menuClose.addEventListener('click', ()=> {
    menu.classList.add('d-none');
    body.classList.remove('overflow-hidden'); 
});

headerList.forEach(list => {
    list.addEventListener('click', () => {
        menu.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    });
})

window.onclick = function(e) {
    if(e.target == menu) {
        menu.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    }
}


const popular = new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.reviews-slider-next',
        prevEl: '.reviews-slider-prev',
      },
      pagination: {
          el: '.reviews-slide-pagination',
          type: 'fraction',
          renderFraction: function(currentClass, tottalClass) {
              return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
          }
        },

  
      spaceBetween: 20,
      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 2.3,
        },
    }
  });

