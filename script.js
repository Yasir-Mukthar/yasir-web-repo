function sendMail(params){
    var tempParams = {
        fromName: document.getElementById("fromName").value,
        emailSender: document.getElementById("emailSender").value,
        subjectSender: document.getElementById("subjectSender").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_67qfjhw','template_p7haycb',tempParams)
     .then(function(res){

        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
     });
}


var navbarvertical = document.getElementById("navt");

navbarvertical.style.height = '0%';
function toggle() {

    if (navbarvertical.style.height == '0%') {
        navbarvertical.style.height = '50%';
    }
    else {
        navbarvertical.style.height = '0%';
    }

}


$(document).ready(function () {
    // if(window.navigator.onLine){

    // } else{
    //     document.write(`
        
        
    //     `);

    // }
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Frontend Developer","Freelancer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: ["Frontend Developer","Freelancer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });


    // Preloader 
    const preloader = document.getElementById("preloader");
    function loaderfunction(){
        console.log("helooo");
preloader.style.display="none";
     }
    window.addEventListener("load",loaderfunction());