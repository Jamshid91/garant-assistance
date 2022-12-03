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

  $('.telegram-form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name', 		$('[name="name"]', form).val() );
    data.append( 'phone', 		$('[name="phone"]', form).val() );
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'telegram.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
});