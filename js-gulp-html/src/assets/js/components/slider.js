//= ../../../../node_modules/slick-carousel/slick/slick.js

document.addEventListener("load", () => {
  mainLoad();
});

function mainLoad() {
  document.querySelector(".slider").slick({

    // normal options...
    infinite: false,

    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });
}