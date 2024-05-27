async function javascript(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('I am studing javascript');
        },2000);
    })
}

async function cpp(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am studying c++");
        },2000);
    })
}

async function dowork(){
    let java= await javascript();
    console.log(java);
    let c=await cpp();
    console.log(c);
    console.log("All work done");
}
dowork();

async function Allwork(){
    let p1=new Promise((resolve,reject)=>{
        resolve("I am honest");
    })
    let p2=new Promise((resolve,reject)=>{
        resolve("I am hardworking");
    })
    let p3=new Promise((resolve,reject)=>{
        resolve("I am diligent");
    })
    let s1=await p1;
    let s2=await p2;
    let s3= await p3;

    return [s1,s2,s3];
}
async function Goodwork(){
    let display= await Allwork();
    console.log(display);
}
Goodwork();