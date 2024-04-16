// productcardcarousel
let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);
// productcardcarousel


function changeView() {

    var signin = document.getElementById("signin");
    var signup = document.getElementById("signup");

    signin.classList.toggle("hidden");
    signup.classList.toggle("hidden");


}


// http://localhost/tailwindphp/signin.php

function signIn() {


    var email = document.getElementById("em2");
    var password = document.getElementById("pa2");
    // var rememberme = document.getElementById("re");

    // alert("000");
    var f = new FormData();
    f.append("e", email.value);
    f.append("p", password.value);
    // f.append("r", rememberme.checked);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "success") {
                window.location = "index.html";
            } else {
                // document.getElementById("msg2").innerHTML = t;
                alert("Okay");
            }
        }
    }

    r.open("POST", "http://localhost:8000/tailwindphp/signin.php", true);
    r.send(f);
    // alert("hello");

}


