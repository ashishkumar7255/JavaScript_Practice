setTimeout('console.log("Hello World")',2000); // it convert the code in javascript 
// so we can,t do directly 
// setTimeOut is a pre-defined function which specify how tiume take to render the element
// backtique (``) used to write in many lines
//every line provide 5 as result return

const timer1 = setTimeout('console.log("time-1")', 1000)
// clearInterval(timer1); // clear the time hence nothing is render
// clearTimeout(timer1); // clear the time hence nothing is render
var sumTime = setTimeout(sum,3000)
var a = 4;
var b = 6;
function sum() 
{
    console.log(a+b);
}

setInterval('console.log("hello jee")',2000)

let count = 0;
setInterval(() => console.log(count++), 4000);
