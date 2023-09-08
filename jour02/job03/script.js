document.addEventListener('DOMContentLoaded', function () {
    
    function myDisplayText() {
        text = document.getElementById("input-text");
        display = document.getElementById("text-displayer");
        display.innerHTML = text.value;
    }

    function myTurnBold() {
        display = document.getElementById("text-displayer");
        display.style.fontWeight = "bold";
    }

    function myTurnItalic() {
        display = document.getElementById("text-displayer");
        display.style.fontStyle = "italic";
    }

    function myClearText(){
        text = document.getElementById("input-text");
        text.value = "";
        display = document.getElementById("text-displayer");
        display.innerHTML = "";
    }

    text = document.getElementById("input-text");
    bold = document.getElementById("turn-text-bold");
    italic = document.getElementById("turn-text-italic");
    clear = document.getElementById("clear-text");
    text.addEventListener('input', myDisplayText);
    bold.addEventListener('click', myTurnBold);
    italic.addEventListener('click', myTurnItalic);
    clear.addEventListener('click', myClearText);
});