const Canvas2DContext = require('./canvasprototype.js');
const clock = () => {
let inView = true;
const checkTime = (i) => {
    if (i < 10) {i = "0" + i}; 
    return i;
}

const timer = (ctxId) => {
 const c = document.getElementById(ctxId);
 let ctx = Canvas2DContext(c);
const startTime = () => {
   if(inView){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
   

   let tm = h + ":" + m + ":" + s;
    ctx.clearRect(0, 0, 66, 20)
      .font("16px bold sans-serif")
      .textAlign("center")
      .fillStyle("white")
      .fillText(tm, 34 , 16);
    }
    setTimeout(startTime, 500);
 };

 return startTime;
}
 return {
   setClock: timer,
    inView: () => {
     inView = true;
      
   },
   getView:  () => {
      return inView;
   },
   outView: () => {
      inView = false;
   }
}
}
module.exports = clock();