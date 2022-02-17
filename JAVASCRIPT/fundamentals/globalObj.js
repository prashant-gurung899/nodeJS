
console.log('welcome')
console.log(__dirname)
console.log(__filename)
/*setTimeout(() => {
    console.log("bruh")
}, 2000); */
let d= new Date().toLocaleTimeString();
/*
setInterval(() => {
    console.log(`current date and time is ${d}`)
    d=new Date().toLocaleTimeString();
}, 1000); */
let time=0;

let t1=setInterval(() => {
    
    console.log(time)
    time+=1
    if(time>5){
        clearInterval(t1);
    }
    
}, 1000);