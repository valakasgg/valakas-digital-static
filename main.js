// Toggle navigation open 

const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle("open");
});

// document.addEventListener('snipcart.ready', function() {
//     var cart = Snipcart.api.cart.get();
//     console.log(cart);
//     Snipcart.api.configure('shipping_same_as_billing', true);
// });

// @codekit-prepend "./vendor/aos.js";
// @codekit-prepend "./vendor/swiper.js";

(function() {

    // window.onload = function() {
    //     // setTimeout(function() {
    //     // var rellax = new Rellax('.rellax');

    // }

    $('document').ready(function() {
        // Mail list
        if (sessionStorage["mailshow"] != 'yes') {
            setTimeout(function() {
                var url = window.location.pathname;
                if (url == '/test/') {
                    $('#modal-mail').addClass('modal--open');
                    $('html').css('overflow', 'hidden');
                    $('body').css('overflow', 'hidden');
                    $('body').css('height', '100%');
                    sessionStorage["mailshow"] = 'yes';
                    return false;
                }
            }, 10000);
        }

        // $('.accordion-item button').click(function() {
        //     $('.accordion-item button').parent().removeClass('highlight');
        //     $(this).parent().addClass('highlight');
        // });

        $('.contact-button').click(function() {
            $('#modal-contact').addClass('modal--open');
            $('html').css('overflow', 'hidden');
            $('body').css('overflow', 'hidden');
            $('body').css('height', '100%');
        });
        $('.close').click(function() {
            $('#modal-contact').removeClass('modal--open');
            // $('#modal-mail').removeClass('modal--open');
            $('html').css('overflow-y', 'scroll');
            $('body').css('overflow-y', 'scroll');
            $('body').css('height', 'auto');
        });
    });

    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.parentElement.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
            items[i].parentElement.setAttribute('aria-expanded', 'false');
            console.log(items[i].parentElement);
            // items[i].parentElement.removeClass('highlight');
        }

        if (itemToggle == 'false') {
            this.parentElement.setAttribute('aria-expanded', 'true');
            // this.parentElement.addClass('highlight');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

}());