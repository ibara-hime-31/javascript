let promise= new Promise((resolve,reject)=>{
    let something=true;
    if(something){
        resolve("Successfull")
    }
    else{
        reject("It is rejected");
    }
})

console.log(promise);

promise.then((res)=>{
    console.log(res);
    alert(res);
    document.getElementById("demo").innerHTML=res;
}).catch((err)=>{
    console.log(err);
})



async function myDisplay(){
    let myPromise=new Promise(function (resolve){
        resolve("I love javascript!!")
    })
    document.getElementById("demo1").innerHTML= await myPromise;
}
myDisplay();