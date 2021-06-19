// JS Script for toggling between Day and Night Mode
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");

    if(document.body.classList.contains("darktheme")){
         icon.innerHTML = "<i class='fa fa-sun-o'></i>"
    }
    else{
     icon.innerHTML = "<i class='fa fa-moon-o'></i>"
    }
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

// function sortname(){
//    var sortname = document.getElementById('sortname').value

//    if(sortname == 'notSelected'){
//         $('#1').remove()
//         $('#2').remove()
//         $('#3').remove()
//         $('#4').remove()
//         $('#5').remove()
//         $('#notSelected').append()
//    }
   
//    if(sortname == '1'){
//        $('#notSelected').remove()
//        $('#2').remove()
//        $('#3').remove()
//        $('#4').remove()
//        $('#5').remove()
//        $('#1').append()
//    }
   
//    if(sortname == '2'){
//         $('#notSelected').remove()
//         $('#1').remove()
//         $('#3').remove()
//         $('#4').remove()
//         $('#5').remove()
//         $('#2').append()
//    }
   
//    if(sortname == '3'){
//         $('#notSelected').remove()
//         $('#1').remove()
//         $('#2').remove()
//         $('#4').remove()
//         $('#5').remove()
//         $('#3').append()
//    }
   
//    if(sortname == '4'){
//         $('#notSelected').remove()
//         $('#1').remove()
//         $('#2').remove()
//         $('#3').remove()
//         $('#5').remove()
//         $('#4').append()
//    }
   
//    if(sortname == '5'){
//         $('#notSelected').remove()
//         $('#1').remove()
//         $('#2').remove()
//         $('#3').remove()
//         $('#4').remove()
//         $('#5').append()
//    }
   
// }


