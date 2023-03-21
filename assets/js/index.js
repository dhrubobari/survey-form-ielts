$('.radio-field').each(function() {
    $(this).addClass('revealfield');
})

const redirectBtn = document.getElementById('redirect-btn');

redirectBtn.addEventListener('click', () => {
    // Open the spinner page in a new window
    const spinnerWindow = window.open('spinner.html', '_blank');
    
    // Redirect to another HTML page after 2 seconds
    setTimeout(() => {
      spinnerWindow.close();
      window.location.href = 'registration.html';
    }, 1000);
  });

//show active step
function showActiveStep() {
    if ($('#step1').is(':visible')) {
        $(".bar-inner .fill").css('width', '0');
        $(".complete-rate span").html(0);

    } else if ($('#step2').is(':visible')) {
        $(".bar-inner .fill").css('width', '20%');
        $(".complete-rate span").html(20);


    } else if ($('#step3').is(':visible')) {
        $(".bar-inner .fill").css('width', '40%');
        $(".complete-rate span").html(40);


    } else if ($('#step4').is(':visible')) {
        $(".bar-inner .fill").css('width', '60%');
        $(".complete-rate span").html(60);


    } else if ($('#step5').is(':visible')) {
        $(".bar-inner .fill").css('width', '80%');
        $(".complete-rate span").html(80);


    } else {
        console.log("error");
    }
}


// next prev
var divs = $('.show-section section');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

function next() {
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
    showActiveStep();
}

$(".prev").click(function() {
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
    showActiveStep();
    if (now < 2) {
        $('.start-wrapper').show();
        $('#steps').hide();
    }

});

$('.confirm').on('click', function() {
    $(this).addClass('active');
})


$('.table-single').on('click', function() {
    $('.table-single').removeClass('active');
    $(this).addClass('active');
})