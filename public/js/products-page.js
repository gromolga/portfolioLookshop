$(document).ready(function() {

    $(".selected").click(function () {
        $(this).next().toggleClass("show");
    });


    $(".navbar-item").click(function () {
        $(this).parent().toggleClass("show");
    });


    var range = document.getElementById('range');

    noUiSlider.create(range, {
        start: [ 0, 200 ],
        connect: true,
        orientation: 'horizontal',
        step: 1,
        range: {
            'min': 0,
            'max': 300
        }
    });
    var snapValues = [
        document.getElementById('range-value-lower'),
        document.getElementById('range-value-upper')
    ];

    range.noUiSlider.on('update', function( values, handle ) {
        snapValues[handle].innerHTML = values[handle];
    });

});




