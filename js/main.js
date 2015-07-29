(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    var venueAddress = "Liber Bernardo O'Higgins 227, Santiago"; // Venue
    var placeName = "Centro Gabriela Mistral";
    /////////////////////////////////////////////////// Adress

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.Carousel();
            fn.CarouselTwo();
        },


        // Owl Carousel
        Carousel: function () {
            var owl = $("#carousel");
            owl.owlCarousel({
                itemsCustom : [
                    [1200, 4],
                    [970, 3],
                    [768, 2],
                    [360, 1]
                ],
                navigation : false
            });

            $(".next").click(function () {
                owl.trigger('owl.next');
            });

            $(".prev").click(function () {
                owl.trigger('owl.prev');
            });
        },


        // Owl Carousel
        CarouselTwo: function () {
            var owl = $("#carouselTwo");
            owl.owlCarousel({
                itemsCustom : [
                    [1200, 4],
                    [970, 3],
                    [768, 2],
                    [360, 1]
                ],
                navigation : false
            });

            $(".nextTwo").click(function () {
                owl.trigger('owl.next');
            });

            $(".prevTwo").click(function () {
                owl.trigger('owl.prev');
            });
        },



    };

    $(document).ready(function () {
        fn.Launch();
    });

})(jQuery);