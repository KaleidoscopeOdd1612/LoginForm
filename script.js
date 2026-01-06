const regisForm = document.querySelector("#registrationForm");
const profileForm = document.querySelector("#profileForm");
const profile = document.querySelector("#blockProfile");
const infos = ["email", "name", "password"];

regisForm.email.addEventListener("input", () => {
    regisForm.email.setCustomValidity("");
});

regisForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!regisForm.email.value.endsWith("@gmail.com")){
        regisForm.email.setCustomValidity("The email should end with @gmail.com");
    }else{
        profile.style.display = "flex";
        infos.forEach((info) => {
            profileForm[info].value = regisForm[info].value;
        })
    }
});

profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profile.style.display = "none"
});
