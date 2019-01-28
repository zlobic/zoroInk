


$(()=> {

  if ($(window).width()> 450){
    setTimeout(()=>{
      document.getElementById("menu").style.top = "0px";
    }, 3500)
  }

  $(".hamburger").on("click", function(){
    $(this).toggleClass("is-active");
      if ($("#hamburgerMenu").hasClass("open")){
        $("#hamburgerMenu").animate({left: "-75%"},500);
      } else {
        $("#hamburgerMenu").animate({left: "0%"}, 500);
      }
        $("#hamburgerMenu").toggleClass("open");
  })

  $("#hamburgerMenu ul li").children("a").on("click",  (e)=>{
      $("#hamburgerMenu").animate({left: "-75%"}, 500);
      $(".hamburger").toggleClass("is-active");
      $("#hamburgerMenu").toggleClass("open");
  })

  $("input[type=text], input[type=email]").bind("keyup focusin mouseenter", function(){
    if ($(window).width()< 450) {
      $(this).siblings(".floating-label").css({"color": "#cc7e00" })
      $(this).css({"background-color": "#cc7e00", "color": "#00264d" })
    } else {
      $(this).css({"background-color": "#cc7e00", "color": "#00264d" })
      $(this).siblings(".floating-label").css({"color": "#00264d" })
    }
  })

  $('input[type="file"]').on("change focusin", function(e){
    if (e.type === "click"){
      $(this).css({"background-color": "#00264d", "color": "#cc7e00"});
    }
    var fileName = e.target.files[0].name;
    $("#wrapper").attr("data-text", fileName)
    $("#wrapper").css({"margin-bottom": "15px", "color": "white"})
  })

  $("input[type=text], input[type=email]").on("keyup click", function(e){
    if (e.key === "Tab"){
      if ($(window).width()< 450) {
        $(this).siblings(".floating-label").animate({"bottom": "95px","right": "5px", "font-weight": "900", "color": "#cc7e00"}, 250)
        $(this).css({"margin": "30px 0px 30px 0px"})
      } else {
        if (e.currentTarget.name === "size"){
          $(this).siblings(".floating-label").animate({"left": `${$(this).width()  - 115}px`, "font-weight": "900"}, 250)
        } else {
          $(this).siblings(".floating-label").animate({"left": `${$(this).width()  - 60}px`, "font-weight": "900"}, 250)
        }     
      }
    } else if (e.type === "click"){
        if ($(window).width() < 450) {
          $(this).siblings(".floating-label").animate({"bottom": "95px","right": "5px", "font-weight": "900", "color": "#cc7e00"}, 250)
          $(this).css({"margin": "30px 0px 30px 0px"})
        } else {
         if (e.currentTarget.name === "size"){
          $(this).siblings(".floating-label").animate({"left": `${$(this).width()  - 115}px`, "font-weight": "900"}, 250)
         } else{
          $(this).siblings(".floating-label").animate({"left": `${$(this).width()  - 60}px`, "font-weight": "900"}, 250)
         }
        }
    }
  })
    
  $("form").on("submit", function(e){
    const captcha = $("#g-captcha-response").val()
    fetch('/', {
      method: "POST",
      headers:{
        "Accept": 'application/json, text/plain, */*',
        "Content-type": "application/json"     
      },
      body: JSON.stringify({captcha: captcha})
    })
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
      
    })
        $("#submit").css({"background-position": "right bottom"}, 3000)
        $("#submit").empty();
        $("#submit").html("<img src=\"/images/paper-plane.svg\"> <span> Sent Succesfully!</span>")
        $("#submit").children("img").css({"position": "relative", "right": "1%" })
        $("#submit").children("span").css({"color": "#00264d"})
        $("#submit").children("img").height("40px").width("70px")
        $("#submit").siblings("input").val() = ""
  })
  
    
  $("input[type=text], input[type=email]").on("keydown", function(){
    if (e.key === "Tab"){
      if (($(this).val().length === 0)) {
        $(this).siblings(".floating-label").animate({"bottom": "30px","right": "5px", "font-weight": "900", "color": "#cc7e00"}, 250)
        $(this).css({"margin": "0px 0px 0px 0px"})
      } else {
        $(this).siblings(".floating-label").animate({"bottom": "65px","right": "5px", "font-weight": "900", "color": "#cc7e00"}, 250)
      }
    } 
  })

  $("input[type=text], input[type=email]").bind("focusout mouseleave", function(e){
      if ($(this).is(":focus")) {
        $(this).css({"background-color": "#cc7e00"})
      } else {
          if (($(this).val().length === 0) && ($(window).width() < 450)) {
            $(this).siblings(".floating-label").animate({"bottom": "30px","right": "5px", "font-weight": "300", "color": "#cc7e00"}, 250)
            $(this).css({"margin": "0px 0px 0px 0px"})
          } else if (($(this).val().length === 0) && ($(window).width() > 450)) {
            $(this).siblings(".floating-label").animate({"left": "0px", "font-weight": "0"}, 200)
            $(this).css({"background-color": "#cc7e00", "color": "#00264d"});
            $(this).siblings(".floating-label").css({"color": "#00264d"})
          } else if (($(this).val().length > 0) && ($(window).width() < 450)){
            $(this).siblings(".floating-label").animate({"bottom": "65px","right": "5px", "font-weight": "900", "color": "#cc7e00"}, 250)
            $(this).css({"margin": "20px 0px 0 0px"})
          }
      $(this).css({"background-color": "#00264d", "color": "#cc7e00"});
      $(this).siblings(".floating-label").css({"color": "#cc7e00"})
    }  

  })


  $(".floating-label").bind("mouseenter focusin click", function(e){
    
    if (e.type === "click"){
      if (($(window).width() > 450)) {
        
        if (e.currentTarget.firstChild.data === "Size (cm x cm) *"){
          $(this).animate({"left": `${$(this).siblings("input").width() - 115}px`, "font-weight": "900"}, 200)
          $(this).siblings("input").focus()
        } else {
            $(this).animate({"left": `${$(this).siblings("input").width() - 60}px`, "font-weight": "900"}, 200)
            $(this).siblings("input").focus()
        }
      } else {     
          
          $(this).animate({"bottom": "95px","right": "5px", "font-weight": "900", "color": "#cc7e00"}, 250)
          $(this).siblings("input").css({"margin": "30px 0px 30px 0px"})
      }
      $(this).siblings("input").focus()
    }
      else if (e.type="mouseenter"){
      $(this).siblings("input").css({"background-color": "#cc7e00"})
      $(this).css({"color": "#00264d"})
    }
  })


  $("textarea").on("click", function() {
    if ($(window).width()> 1450) {
      
      $(this).addClass("signupAnimation") 
      $(".form button").addClass("signupAnimation") 
      $(".bookingsText p, .bookingsText ul").animate({"opacity": "0.5"}, 300)
    }
  })

  $("textarea").on("focusout",function(){
    $(this).removeClass("signupAnimation")
    $(".bookingsText p, .bookingsText ul").animate({"opacity": "1"}, 300)
    $(".form button").removeClass("signupAnimation")
    $(".form button").addClass("standard") 
    $(this).addClass("standard")
  })

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 20) {
      document.getElementById("menu").style.top = "0";
    } else {
      document.getElementById("menu").style.top = "-85px";
    }
  }

  

  new WOW().init();

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
    
  });
  
}) 


  

$('.ml3').each(function(){ //Thank you Tobias Ahlin for this wonderful plug in!
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 400,
    delay: function(el, i) {
      return 75 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000
  });




 


