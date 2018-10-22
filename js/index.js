$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

$(document).ready(function () {
    $('.news-btn').click(function () {
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $('.filter').show("1000");
        }else{
            $('.filter').not("." + value ).hide("1000");
            $('.filter').filter("." + value ).show("1000");
        }

        // Adding active class
        $('.news-btn').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        })
    });
});

