let Mydate = new Date();
// console.log(Mydate);
// console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toTimeString());
// console.log(Mydate.toLocaleDateString());
// console.log(Mydate.toLocaleString());

let MyCreateDate = new Date(2023,0,1);
// console.log(MyCreateDate);
// console.log(MyCreateDate.toDateString());
// console.log(MyCreateDate.toLocaleString());
// console.log(MyCreateDate.toLocaleDateString());

let MyCreateDate2 = new Date(2023,0,1,5,15);
// console.log(MyCreateDate2);
// console.log(MyCreateDate2.toDateString());
// console.log(MyCreateDate2.toLocaleDateString());
// console.log(MyCreateDate2.toLocaleString());
// console.log(MyCreateDate2.toLocaleTimeString());

// let newDateObj = new Date("2024-01-26");
let newDateObj = new Date("01-26-2024");
// console.log(newDateObj.toLocaleString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);
// console.log(newDateObj.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);

let newFormate = newDate.toLocaleString('Defult',{
    weekday: "long"
});
console.log(newFormate);

