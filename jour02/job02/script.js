document.addEventListener('DOMContentLoaded', function () {


    function myAddCount() {
        var counter = document.getElementById("count-displayer");
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        console.log(counter.innerHTML);
    }

    button = document.getElementById("add-count-btn");
    button.addEventListener('click', myAddCount);
});