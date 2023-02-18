//                      preloader


let preloader = document.getElementById("preeloder");
window.addEventListener("load",function(){
    preloader.style.display = "none";
});



//                      preloader



//                      sticky NavBar

let navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    let scroll = window.scrollY;
    navbar.classList.toggle("sticky",scroll > 0);
});

//                      sticky NavBar




//                      about_us_button

let about_us_button = document.getElementById("about_us_button");
let about_details = document.getElementById("about_details");

about_details.addEventListener("click",function(){
    if(about_us_button.style.display != "block"){
        about_us_button.style.display = "block";
    }
    else{
        about_us_button.style.display = "none";
    }
});

//                      about_us_button






//                      how we work_button


let how_we_work_span = document.getElementById("how_we_work_span");
let how_we_work_button = document.getElementById("how_we_work_button");

how_we_work_button.addEventListener("click",function(){
    if(how_we_work_span.style.display != "block"){
        how_we_work_span.style.display = "block";
    }
    else{
        how_we_work_span.style.display = "none";
    }
});

//                      how we work_button





//                      expanded button

//      **col - 1a**

let expanded = document.getElementById("expanded"); /* ancanr tag */
let expanded_span = document.getElementById("expanded_span"); /* span tag */
let expanded_p = document.getElementById("expanded_p"); /* p tag */



expanded.addEventListener("mouseenter",function(){
    expanded_span.style.display = "block";
    expanded_p.style.width = 53 + "px";
});

expanded.addEventListener("mouseleave",function(){
    expanded_span.style.display = "none";
    expanded_p.style.width = 0 + "px";
});



//     **col - 1b**

let expanded2 = document.getElementById("expanded2"); /* ancanr tag */
let expanded_span2 = document.getElementById("expanded_span2"); /* span tag */
let expanded_p2 = document.getElementById("expanded_p2"); /* p tag */

expanded2.addEventListener("mouseenter",function(){
    expanded_span2.style.display = "block";
    expanded_p2.style.width = 53 + "px";
});

expanded2.addEventListener("mouseleave",function(){
    expanded_span2.style.display = "none";
    expanded_p2.style.width = 0 + "px";
});



//     **col - 1c**

let expanded3 = document.getElementById("expanded3"); /* ancanr tag */
let expanded_span3 = document.getElementById("expanded_span3"); /* span tag */
let expanded_p3 = document.getElementById("expanded_p3"); /* p tag */

expanded3.addEventListener("mouseenter",function(){
    expanded_span3.style.display = "block";
    expanded_p3.style.width = 53 + "px";
});

expanded3.addEventListener("mouseleave",function(){
    expanded_span3.style.display = "none";
    expanded_p3.style.width = 0 + "px";
});



//     **col - 2a**

let expanded4 = document.getElementById("expanded4"); /* ancanr tag */
let expanded_span4 = document.getElementById("expanded_span4"); /* span tag */
let expanded_p4 = document.getElementById("expanded_p4"); /* p tag */

expanded4.addEventListener("mouseenter",function(){
    expanded_span4.style.display = "block";
    expanded_p4.style.width = 53 + "px";
});

expanded4.addEventListener("mouseleave",function(){
    expanded_span4.style.display = "none";
    expanded_p4.style.width = 0 + "px";
});



//     **col - 2b**

let expanded5 = document.getElementById("expanded5"); /* ancanr tag */
let expanded_span5 = document.getElementById("expanded_span5"); /* span tag */
let expanded_p5 = document.getElementById("expanded_p5"); /* p tag */

expanded5.addEventListener("mouseenter",function(){
    expanded_span5.style.display = "block";
    expanded_p5.style.width = 53 + "px";
});

expanded5.addEventListener("mouseleave",function(){
    expanded_span5.style.display = "none";
    expanded_p5.style.width = 0 + "px";
});



//     **col - 2c**

let expanded6 = document.getElementById("expanded6"); /* ancanr tag */
let expanded_span6 = document.getElementById("expanded_span6"); /* span tag */
let expanded_p6 = document.getElementById("expanded_p6"); /* p tag */

expanded6.addEventListener("mouseenter",function(){
    expanded_span6.style.display = "block";
    expanded_p6.style.width = 53 + "px";
});

expanded6.addEventListener("mouseleave",function(){
    expanded_span6.style.display = "none";
    expanded_p6.style.width = 0 + "px";
});

//                      expanded button





//                     swiper slider


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay : {
        delay: 5000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//                     swiper slider
