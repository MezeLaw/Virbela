function changeTheme() {
    const themeButton = document.getElementById("themeButton");
    const isDark = (themeButton.getAttribute("value") === "true");

    if (isDark) {
        // Cambiar a tema claro
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        themeButton.setAttribute("value", "false");

        const signUp = document.getElementById("sign-up");
        signUp.classList.remove("dark-theme");
        signUp.classList.add("light-theme");
        signUp.style.backgroundColor = "white";
        signUp.style.color = "black";

        const signUpForm = document.getElementById("sign-up-form");
        signUpForm.classList.remove("dark-theme");
        signUpForm.classList.add("light-theme");
        signUpForm.style.backgroundColor = "white";
    } else {
        // Cambiar a tema oscuro
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        themeButton.setAttribute("value", "true");

        const signUp = document.getElementById("sign-up");
        signUp.classList.remove("light-theme");
        signUp.classList.add("dark-theme");
        signUp.style.backgroundColor = "";
        signUp.style.color = "";

        const signUpForm = document.getElementById("sign-up-form");
        signUpForm.classList.remove("light-theme");
        signUpForm.classList.add("dark-theme");
        signUpForm.style.backgroundColor = "";
    }
}

