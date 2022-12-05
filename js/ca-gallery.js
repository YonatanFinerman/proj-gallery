(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict






function oninit(){
  renderCards()
}


// function renderCards() {
//   var portfolio = getProtfolio()
//   console.log(portfolio)
//   var strHTML = portfolio.map(proj => {
//          return `<section class="bg-light col-md-4 d-inline " id="portfolio ">
//           <div class="row ">
//             <div class=" portfolio-item">
//               <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//                 <div class="portfolio-hover">
//                   <div class="portfolio-hover-content">
//                     <i class="fa fa-plus fa-3x"></i>
//                   </div>
//                 </div>
//                 <img class="img-fluid " src="img/portfolio/${proj.id}.png" alt="">
//               </a>
//               <div class="portfolio-caption">
//                 <h4>${proj.id}</h4>
//                 <p class="text-muted">${proj.lables}</p>
//               </div>
//             </div>
//             <div class=" portfolio-item">
//               <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
//                 <div class="portfolio-hover">
//                   <div class="portfolio-hover-content">
//                     <i class="fa fa-plus fa-3x"></i>
//                   </div>
                
//             </div>
//           </div>
//         </div>
//       </section>
//       `
//   })
//   $('.cards-container').html(strHTML.join())
//   console.log($('.cards-container'))

// }

function renderCards() {
  var portfolio = getProtfolio()
  console.log(portfolio)
  var strHTML = portfolio.map(proj=>{
    console.log(proj)
    return ` <div class="col-md-4 col-sm-4 portfolio-item" style="max-width: 33.33vw;">
    <a class="portfolio-link" data-toggle="modal" onmouseover="onOpenModal(${portfolio.indexOf(proj)})" " href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid"  src="img/portfolio/${proj.id}.png" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.id}</h4>
      <p class="text-muted">${proj.lables}</p>
    </div>
  </div>`
  })
  $('.cards-container').html(strHTML.join())
  console.log($('.cards-container'))
}


function onOpenModal(projIdx){
  var portfolio = getProtfolio()
  
  
  $('.project-name').text(portfolio[projIdx].id)
  $('.project-lables').text(portfolio[projIdx].lables)
  $('.project-desc').text(portfolio[projIdx].desc)
  $('.project-date').text(new Date(portfolio[projIdx].publishedAt).toUTCString())
  $('.project-link2').text(portfolio[projIdx].id)
  // $('.project-link2').html(portfolio[projIdx].url)
  $('.project-link2').attr("href",portfolio[projIdx].url )
  $('.project-img').attr("src",portfolio[projIdx].img )
  




}
function onSubmit(){
  var $elEmail = $('.contact-email').val()
  var $elSubject = $('.contact-subject').val()
  var $elComment = $('.contact-txt').val()

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=julianmode808@gmail.com&su=${$elSubject}&body=${$elComment}`)

}







