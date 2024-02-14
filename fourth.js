const email = document.getElementById("email");
const password = document.getElementById("pass");

email.addEventListener("input", (e) => {
  const userNameRegex = /^[a-zA-Z-]+$/;
  const currentValue = e.target.value;
  const valid = userNameRegex.test(currentValue);

  document.getElementById("email-p").style.display = valid ? "none" : "block";
});

password.addEventListener("input", (e)=>{
    const passwordRegex= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}$/;
    const passVal=e.target.value;
    const valid = passwordRegex.test(passVal);
    document.getElementById("pass-p").style.display=valid?"none":"block";
})