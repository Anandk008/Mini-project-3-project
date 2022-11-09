//Sticky Menu 
window.addEventListener('scroll',function() {
    if (window.scrollY > 150 ) {
        this.document.querySelector('#nav-bar').style.opacity = 0.6;
    } else {
        this.document.querySelector('#nav-bar').style.opacity = 1;
    }

});

// Profile scroll effect
window.addEventListener('scroll',function() {
    if (window.scrollY > 200 ) {
        this.document.querySelector('#profile').style.opacity = 0;
        this.document.querySelector('#profile-1').style.opacity = 1;
    } else {
        this.document.querySelector('#profile').style.opacity = 1;
        this.document.querySelector('#profile-1').style.opacity = 0;
    }

});


