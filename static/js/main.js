
// Начинать писать отсюда!!!!

$(document).ready(function(){

  $(".basket-head").on("click", function(){
    $(".basket-content__head").toggleClass('active');
    $(".basket-head").toggleClass('active');
  });

  $(".basket").on("click", function(){
    $(".basket-content").toggleClass('active');
    $(".basket").toggleClass('active');
  });

  $(".search-button img").on("click", function(){
    $(".search-button").addClass('active');
    $(".search-content__sort").addClass('active');
  });

  ////////////// Akkordeon /////////////////

  $(".item-title__akk").on("click", function(){
    
    var $this = $(this),
      container = $this.closest('.items'),
      item = $this.closest('.item-akk'),
      currentContent = item.find('.item-desc__akk'),
      duration = 600

    
    if(!item.hasClass('active')){

      item.addClass('active');
      currentContent.slideDown(duration);
      // open.removeClass('active');
      
    }else{
        
      item.removeClass('active');
      currentContent.slideUp();
      // open.addClass('active');
    }
  });

  ////////////// Akkordeon 2 /////////////////

  $(".category-title").on("click", function(){
    
    var $this = $(this),
      container = $this.closest('.categories'),
      item = $this.closest('.category'),
      currentContent = item.find('.category-content'),
      duration = 600

    
    if(!item.hasClass('active')){

      item.addClass('active');
      currentContent.slideDown(duration);
      // open.removeClass('active');
      
    }else{
        
      item.removeClass('active');
      currentContent.slideUp();
      // open.addClass('active');
    }
  });

  ////////////// mmenu /////////////////

    var $menu = $("#my-menu").mmenu({
      "navbar": {
        "title": ""
      },
      extensions: ['theme-white', 'position-front'],
    });

      

    var $icon = $("#nav__mobile");
    var API = $menu.data( "mmenu" );
    $icon.on( "click", function() {
        API.open();
    });

    API.bind( "opened", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
       $icon.on( "click", function() {
          API.close();
       });
    });

   API.bind( "closed", function() {
      setTimeout(function() {
         $icon.removeClass( "is-active" );
      }, 100);
      $icon.on( "click", function() {
         API.open();
      });
    });

   $("#nav__mobile-menu").click(function() {
      API.close ();
    });

   //////////////////////////////////

  // $(".item").equalHeights();

	$('.js-slider').slick({
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  // variableWidth: true,
  // responsive: [
  //   {
  //     breakpoint: 1240,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       nextArrow: '.price-slider__next',
  //       prevArrow: '.price-slider__prev',
  //       infinite: true
  //     }
  //   },
  //   {
  //     breakpoint: 950,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1, 
  //       nextArrow: '.price-slider__next',
  //       prevArrow: '.price-slider__prev'
  //     }
  //   }
  // ]
  });

  $('.js-doing__icons').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });

  $('.js-review__slider').slick({
    dots: true,
    nextArrow: '.review-slider__next',
    prevArrow: '.review-slider__prev',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.main-nav__list').toggleClass('mobile-show');
  });



  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline'
  });

});

/////////////// Map ///////////////////

  ymaps.ready(init);
    function init(){ 

      var myMap = new ymaps.Map("map", {
        center: [58.017377566548774,56.25482049999998],
        zoom: 16,
        controls: ['zoomControl']
      });

      myMap.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [58.017377566548774,56.25482049999998]
      ];

      var myCollection = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/map.png',
          iconImageSize: [34, 53],
          iconImageOffset: [-20, -70]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection.add(new ymaps.Placemark(coords[i]));
      }

      myMap.geoObjects.add(myCollection);
    };