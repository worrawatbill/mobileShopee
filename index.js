$(Document).ready(function(){


    //banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dost:true,
        items:1
    })

    //Top Sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dost:false,
        responsive:{
            0:{
                item:1
            },
            600:{
                item:3
            },
            1000:{
                item:5
            }
        }
    })
    //isotope filter
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    })

    //filter item on button Click
    $(".button-group").on("click","button",function(){
        var filterValue = $(this).attr('data-filter')
        $grid.isotope({filter:filterValue})
    })

    //New Phone owl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dost:true,
        responsive:{
            0:{
                item:1
            },
            600:{
                item:3
            },
            1000:{
                item:5
            }
        }
    })

    //blogs owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dost:true,
        responsive:{
            0:{
                item:1
            },
            600:{
                item:3
            }
        }
    })

    //product qty section
    let $qty_up = $(".qty .qty-up")
    let $qty_down = $(".qty .qty-down")
    //let $input = $(".qty .qty_input")

    //click on qty up section
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i,oldval){
                return ++oldval
            })
        }
    })
    //click on qty down section
    $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i,oldval){
                return --oldval
            })
        }
    })
});