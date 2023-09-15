document.addEventListener('DOMContentLoaded', function () {


    function myChangeBackgroundColor() {
        width = window.innerWidth;
        if (width <= 504) {
            document.body.style.backgroundColor = "#003049";
        } else if (width >= 505 && width <= 1336) {
            document.body.style.backgroundColor = "#d90429";
        } else if (width >= 1337) {
            document.body.style.backgroundColor = "#ffb703";
        }

    }

    window.addEventListener('resize', myChangeBackgroundColor);
    myChangeBackgroundColor();

});