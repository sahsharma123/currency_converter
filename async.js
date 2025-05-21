
const { reject } = require("async");

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