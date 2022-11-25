//Sticky Menu 
window.addEventListener('scroll',function() {
    if (window.scrollY > 150 ) {
        this.document.querySelector('#nav-bar').style.opacity = 0.6;
    } else {
        this.document.querySelector('#nav-bar').style.opacity = 1;
    }

});

// edit toggle 
function edit() {
    var x = document.getElementById("profile");
    var y = document.getElementById("form");

    if (x.style.display === "none" || y.style.display === "grid") {
      x.style.display = "grid";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "grid";
    }
  }

  // Change image 
  // var loadFile = function (event) {
  //   var image = document.getElementById("output");
  //   image.src = URL.createObjectURL(event.target.files[0]);
  // };

