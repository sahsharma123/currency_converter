//promises is come to overcome the problem of callback hell
//callback hell is nestd callback stack below one another
/*
const { log } = require("async")

let promise = new Promise((resolve,reject)=>{
    console.log("i am promise");
    
}) ;*/

const { reject } = require("async");

/*const getPromis=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am promise");
        //resolve("success");
        reject("network error");
    });
};
*/

//then (),catch()

/*
let promise  =getPromis();
promise.then((res)=>{
    console.log("promise fullfilled",res);
    
});
promise.catch((err)=>{
    console.log("rejected",err);
    
});*/

//making promise channing 

/*
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}

console.log("fetching data1 ..");
asyncFunc1().then(()=>{
    console.log("fething data2..");
    asyncFunc2().then((res)=>{});
});
*/

//Async Await concept

function api(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
async function getWetherData(){
    await api();//1st
    await api();//2nd
}
//await always used inside aync function