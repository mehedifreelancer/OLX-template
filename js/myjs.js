


$(".cat-btn").click(function () {
    $(".fa-arrow-down").css({
        "transform":"rotate(180deg)"
    })
    $(".cat-btn").css({
        "display":'none'
    })
    $(".cat-btn-two").css({
        "display":'block'
    })

    //Condition for div options fadeIn
    $(".options").slideDown('slow')


})

$(".cat-btn-two").click(function () {
    $(".fa-arrow-down").css({
        "transform":"rotate(0deg)"
    })
    $(".cat-btn-two").css({
        "display":'none'
    })
    $(".cat-btn").css({
        "display":'block'
    })
    $(".options").slideUp('slow')
})

/*Code for start selling menu */

$(".manual").click(function () {
    $(".location-input").css({
        "display":"block"
    })
})