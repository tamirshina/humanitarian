
let myFunc;
export function timer(homeBtnLogic) {
  console.log("timer set");
  myFunc = window.setInterval(() => {
    homeBtnLogic();
  }, 3000000);
}
export function removeTimer() {
  console.log("timer removed")
  window.clearInterval(myFunc);
}