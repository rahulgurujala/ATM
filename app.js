var users = [
  { name: "Rahul", acNum: "111111", bal: "120000", pin: "1995" },
  { name: "Govind", acNum: "222222", bal: "100000", pin: "1999" },
  { name: "Priyanks", acNum: "333333", bal: "250000", pin: "2000" },
  { name: "Supriya", acNum: "444444", bal: "50000", pin: "2002" }
];
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
