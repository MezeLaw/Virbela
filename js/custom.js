function changeTheme() {
    const themeButton = document.getElementById("themeButton");
    const isDark = (themeButton.getAttribute("value") === "true");

    if (isDark) {
        setLightTheme()
    } else {
        setDarkTheme()
    }
}

function checkThemeChoice(){
    const darkMode = localStorage.getItem("dark-theme-choice");
    if (darkMode == "true"){
        setDarkTheme()
    } else {
        setLightTheme()
    }
    document.querySelector('body').classList.add('visible');
}

function setLightTheme() {
// Cambiar a tema claro

    localStorage.setItem("dark-theme-choice", 'false');

    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    const themeButton = document.getElementById("themeButton");
    themeButton.setAttribute("value", "false");

    const signUp = document.getElementById("sign-up");
    if (signUp !== null) {
        signUp.classList.remove("dark-theme");
        signUp.classList.add("light-theme");
        signUp.style.backgroundColor = "white";
        signUp.style.color = "black";
    }


    const signUpForm = document.getElementById("sign-up-form");
    if (signUpForm !== null) {
        signUpForm.classList.remove("dark-theme");
        signUpForm.classList.add("light-theme");
        signUpForm.style.backgroundColor = "white";
    }

    //Index
    const mainTitle = document.getElementById("main-title");
    if (mainTitle !== null){
        mainTitle.style.backgroundColor = "white";
        mainTitle.style.color = "black";
    }

    const eventInfoMin = document.getElementById("event-info-min")

    if (eventInfoMin !== null){
        eventInfoMin.style.backgroundColor = '#9e95f8';
        eventInfoMin.style.color = "black";
    }

    const mainTopic = document.getElementById("main-topic")
    if (mainTopic !== null){
        mainTopic.style.backgroundColor = "white";
        mainTopic.style.color = "black";
    }

    const  images = document.getElementById("images-meta")
    if (images !== null){
        images.style.backgroundColor = "white";
        images.style.color = "black";
    }

    const eventInfoDetailed = document.getElementById("event-info-detailed")
    if (eventInfoDetailed !== null){
        eventInfoDetailed.style.backgroundColor = '#9e95f8';
        eventInfoDetailed.style.color = "black";
    }
}


function setDarkTheme(){
    // Cambiar a tema oscuro

    localStorage.setItem("dark-theme-choice", 'true');

    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    const themeButton = document.getElementById("themeButton");
    themeButton.setAttribute("value", "true");

    const signUp = document.getElementById("sign-up");

    if (signUp !== null) {
        signUp.classList.remove("light-theme");
        signUp.classList.add("dark-theme");
        signUp.style.backgroundColor = "";
        signUp.style.color = "";
    }

    const signUpForm = document.getElementById("sign-up-form");
    if (signUpForm !== null){
        signUpForm.classList.remove("light-theme");
        signUpForm.classList.add("dark-theme");
        signUpForm.style.backgroundColor = "";
    }

    //Index
    const mainTitle = document.getElementById("main-title");
    if (mainTitle !== null){
        mainTitle.style.backgroundColor = '#FF0687';
        mainTitle.style.color = "white";
    }

    const eventInfoMin = document.getElementById("event-info-min")

    if (eventInfoMin !== null){
        eventInfoMin.style.backgroundColor = '#232332';
        eventInfoMin.style.color = "white";
    }

    const mainTopic = document.getElementById("main-topic")
    if (mainTopic !== null){
        mainTopic.style.backgroundColor = '#232332';
        mainTopic.style.color = "white";
    }

    const  images = document.getElementById("images-meta")
    if (images !== null){
        images.style.backgroundColor = '#232332';
        images.style.color = "white";
    }

    const eventInfoDetailed = document.getElementById("event-info-detailed")
    if (eventInfoDetailed !== null){
        eventInfoDetailed.style.backgroundColor = '#232332';
        eventInfoDetailed.style.color = "black";
    }
}

function submitForm(event) {
    alert("submit")
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;

    const subject = 'Metaverse event Sign Up';
    const body = 'Hola soy ' + firstName + " " + lastName + ' de la compania ' + company +
        ' y estoy intereasdo en registrarme para asisir al evento.' +
        ' Mi email de contacto es ' + email
    const mailtoLink = 'mailto:gabriel.molina@unahur.edu.ar?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.open(mailtoLink);
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('sign-up-form');
    form.addEventListener('submit', submitForm);
});
