const API_URL = 'https://carapi.app/';

function miFuncion(){
    alert("hola");
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
      document.body.style.backgroundColor = "red";
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resetButton").addEventListener("click", function() {
        document.body.style.backgroundColor = "";
    });
});