window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("rec1").className = "rec animation1";
    document.getElementById("rec2").className = "rec animation2";
    document.getElementById("rec3").className = "rec animation3";
  } else {
    document.getElementById("rec1").className = "rec";
    document.getElementById("rec2").className = "rec";
    document.getElementById("rec3").className = "rec";
  }
}
