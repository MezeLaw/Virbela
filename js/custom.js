function changeTheme(isDarkTheme) {
    if (isDarkTheme) {
        alert("HOLA")
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
}
