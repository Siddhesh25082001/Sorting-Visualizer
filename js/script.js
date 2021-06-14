// JS Script for toggling between Day and Night Mode
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");
}

// Making the header, vertical navbar and contact us div hidden untill the page loads completely.
$(window).on('unload', function(){
    $('.vnav').addClass('gayab')
    $('.contact').addClass('gayab')
    $('.box').addClass('gayab')
})

// Making the header, vertical navbar and contact us div visible and loader inivisible.
$(window).on('load', function(){
    $('.preloader').addClass('complete')
    $('.vnav').removeClass('gayab')
    $('.contact').removeClass('gayab')
    $('.header').removeClass('gayab');
})
