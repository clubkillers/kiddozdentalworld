// --------------------------------------------------------- Header Js Start  ---------------------------------------------------------//


(function ($) {

  $.fn.menumaker = function (opt) {
    const m = $(this), set = $.extend({ format: "dropdown", sticky: false }, opt);


    m.find(".button").on("click", function () {
      $(this).toggleClass("menu-opened");
      const u = $(this).next("ul");
      u.slideToggle().toggleClass("open");
      if (set.format === "dropdown") u.find("ul").show();
    });


    m.find("li ul").parent().addClass("has-sub");
    if (set.format === "multitoggle") {
      m.find(".has-sub").prepend('<span class="submenu-button"></span>');
      m.on("click", ".submenu-button", function () {
        $(this).toggleClass("submenu-opened")
               .siblings("ul").slideToggle().toggleClass("open");
      });
    } else m.addClass("dropdown");

    if (set.sticky) m.css("position", "fixed");


    const fix = () =>
      $(window).width() > 1000
        ? m.find("ul").show()
        : m.find("ul").hide().removeClass("open");

    fix();
    $(window).on("resize", fix);
  };

})(jQuery);

$(function () {
  $("#cssmenu").menumaker({ format: "multitoggle" });
});











// --------------------------------------------------------- Gallery Js Start  ---------------------------------------------------------//

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;


galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});


function showImage() {
    lightboxImg.src = galleryItems[currentIndex].src;
}


nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage();
});


prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage();
});


closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});


lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
});


document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "Escape") lightbox.style.display = "none";
    }
});
























AOS.init();




const loader = document.getElementById("loader");
const preloaderClose = document.getElementById("preloader-close");

if (loader) {
  window.addEventListener("load", function () {
    loader.style.display = "block";

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "0.8s ease";
    }, 1800);

    setTimeout(() => {
      loader.style.display = "none";
    }, 2400);
  });
}

if (preloaderClose && loader) {
  preloaderClose.onclick = function () {
    loader.style.display = "none";
  };
}










