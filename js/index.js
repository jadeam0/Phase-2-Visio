//index.js

$(document).ready(function() {
  $('.carousel .slide:first-child').addClass('active');
 
  // Next Slide
  $('.carousel .next').click(function() {
     var currentSlide = $('.carousel .slide.active');
     var nextSlide = currentSlide.next();
 
     if(nextSlide.length === 0) {
       nextSlide = $('.carousel .slide:first-child');
     }
 
     currentSlide.removeClass('active');
     nextSlide.addClass('active');
  });
 
  // Previous Slide
  $('.carousel .prev').click(function() {
     var currentSlide = $('.carousel .slide.active');
     var prevSlide = currentSlide.prev();
 
     if(prevSlide.length === 0) {
       prevSlide = $('.carousel .slide:last-child');
     }
 
     currentSlide.removeClass('active');
     prevSlide.addClass('active');
  });
 });