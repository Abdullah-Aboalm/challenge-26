const myCont = document.querySelector("#form");
const myFiled = document.querySelector("#email");
const myBtn = document.querySelector("#submit");
const myErr = document.querySelector("#Err");

myBtn.addEventListener("click", () => {
  let Text = myFiled.value.split('');
  // if user don`t type in the field
  if (myFiled.value.length == 0) {
    myErr.style.cssText = "display: block;";
    myCont.classList.add("error");
  } else if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(myFiled.value)) {
    // when enter a valid email address
    myErr.style.cssText = "display: block; color: #78C1F3";
    myCont.classList.remove("error");
    myErr.textContent = "Thanks !";
    setTimeout(() => {
      location.reload();
    }, 1000);
  } else {
    // when enter wrong email address
    myErr.style.cssText = "display: block;";
    myCont.classList.add("error");
    myErr.textContent = "Please enter a valid email address !";
  }
  // when input filed remove error message
  myFiled.addEventListener("input", () => {
    myErr.style.cssText = "display: none;";
    myCont.classList.remove("error");
  });
});
