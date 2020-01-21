var users = requere("__dirname/dist/users.json");

const init = () => {
  let acNum, logBtn, acPin, selectOpt, logScreen;
  acNum = document.getElementById("acNum");
  acPin = document.getElementById("acPin");
  logBtn = document.getElementById("logBtn");
  selectOpt = document.getElementById("selectOpt");
  logScreen = document.querySelector(".logScreen");

  logBtn.addEventListener("click", () => {
    acNumber = Number(acNum.value);
    acPIN = Number(acPin.value);
    for (let i = 0; i < users.length; i++) {
      if (acNumber === users[i].acNum && acPIN === users[i].acPin) {
        console.log(users.name + " is Logged in.");
      }
    }
  });
};
init();
