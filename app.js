const init = () => {
  var users = [
    { name: "Jhon", acNum: "111111", bal: "120000", pin: "1995" },
    { name: "Max", acNum: "222222", bal: "100000", pin: "1999" },
    { name: "Rose", acNum: "333333", bal: "250000", pin: "2000" },
    { name: "Emmily", acNum: "444444", bal: "50000", pin: "2002" }
  ];
  let acNum, logBtn, acPin, selectOpt, logScreen;
  acNum = document.getElementById("acNum");
  acPin = document.getElementById("acPin");
  logBtn = document.getElementById("logBtn");
  selectOpt = document.getElementById("selectOpt");
  logScreen = document.querySelector(".logScreen");

  logBtn.addEventListener("click", () => {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      if (
        Number(acNum.value) === users[i].acNum &&
        Number(acPin.value) === users[i].pin
      ) {
        console.log(users.name + " is Logged in.");
      }
    }
  });
};
init();
