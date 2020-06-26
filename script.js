// $("#right-arrow").click(function () {
//   var currentSlide = $(".slide.active");
//   var nextSlide = currentSlide.next();

//   currentSlide.fadeOut(300).removeClass(".active");
//   nextSlide.fadeIn(300).addClass("active");

//   if (nextSlide.length == 0) {
//     $("slide").first().fadeIn(300).addClass("active");
//   }
// });
// $("#left-arrow").click(function () {
//   var currentSlide = $(".slide.active");
//   var prevSlide = currentSlide.prev();

//   currentSlide.fadeOut(300).removeClass(".active");
//   prevSlide.fadeIn(300).addClass("active");

//   if (prevSlide.length == 0) {
//     $(".slide").last().fadeIn(300).addClass("active");
//   }
// });
// (function ($) {
//   $(document).ready(function () {
//     var s = $(".slider"),
//       sWrapper = s.find(".slider-wrapper"),
//       sItem = s.find(".slide"),
//       btn = s.find(".slider-link"),
//       sWidth = sItem.width(),
//       sCount = sItem.length,
//       slide_date = s.find(".slide-date"),
//       slide_title = s.find(".slide-title"),
//       slide_text = s.find(".slide-text"),
//       slide_more = s.find(".slide-more"),
//       slide_image = s.find(".slide-image img"),
//       sTotalWidth = sCount * sWidth;

//     sWrapper.css("width", sTotalWidth);
//     sWrapper.css("width", sTotalWidth);

//     var clickCount = 0;

//     btn.on("click", function (e) {
//       e.preventDefault();

//       if ($(this).hasClass("next")) {
//         clickCount < sCount - 1 ? clickCount++ : (clickCount = 0);
//       } else if ($(this).hasClass("prev")) {
//         clickCount > 0 ? clickCount-- : (clickCount = sCount - 1);
//       }
//       TweenMax.to(sWrapper, 0.4, { x: "-" + sWidth * clickCount });

//       //CONTENT ANIMATIONS

//       var fromProperties = { autoAlpha: 0, x: "-50", y: "-10" };
//       var toProperties = { autoAlpha: 0.8, x: "0", y: "0" };

//       TweenLite.fromTo(
//         slide_image,
//         1,
//         { autoAlpha: 0, y: "40" },
//         { autoAlpha: 1, y: "0" }
//       );
//       TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
//       TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
//       TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
//       TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
//     });
//   });
// })(jQuery);

// $(".overlay").addClass("overlay-blue");
