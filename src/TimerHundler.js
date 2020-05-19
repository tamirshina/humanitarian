
let myFunc;
export function timer(homeBtnLogic){

     myFunc =window.setInterval(() => {
        homeBtnLogic();
      }, 3000000);
}
export function removeTimer(){

    window.clearInterval(myFunc);
}