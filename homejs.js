$(document).ready(function() {
    $('.learn-more').click(function(e) {
      e.preventDefault();
      $(this).siblings('.course-details').toggle();
    });
  });