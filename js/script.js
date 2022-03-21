function goTo() {
  var nav = document.querySelector(".nav__target");
  nav.classList.toggle("active");
}



var stickyBar = document.querySelector(".nav__wrap");


window.addEventListener("scroll", () => {
  var x = window.pageYOffset;
  if (x >= 3) {
    stickyBar.classList.add("fixed");
  } else {
    stickyBar.classList.remove("fixed");
  }
})



var sidebar = document.querySelector(".dash__sidebar");
var sideTrigger = document.querySelector(".dash__sidebar__trigger");

sideTrigger.addEventListener("click", () => {
  sideTrigger.classList.toggle("active");
  sidebar.classList.toggle("active");
})



function change(id, event) {
  var x = document.querySelector(id);

  removeShow();

  event.target.classList.add("active");
  x.classList.add("show");
}


function removeShow() {
  var y = document.querySelectorAll(".plans.show");
  var z = document.querySelectorAll(".plan__tabs button");
  z.forEach(el => {
    el.classList.remove("active");
  })
  y.forEach(el => {
    el.classList.remove("show");
  })
}