
let myFunc;
export function timer(homeBtnLogic) {
  console.log("timer set");
  myFunc = window.setTimeout(() => {
    homeBtnLogic();
  }, 300000);
}
export function removeTimer() {
  console.log("timer removed")
  window.clearTimeout(myFunc);
}