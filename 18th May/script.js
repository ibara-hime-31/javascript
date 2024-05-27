setTimeout(function(){
    myFunction("I love JS!!!");
},3000);

function myFunction(value){
    document.getElementById("demo").innerHTML=value;
}


const myPromise = new Promise(function(myResolve,myReject){
    setTimeout(function(){
        myResolve("I love Javascript!!")
    },3000);
});

myPromise.then(function(value){
    document.getElementById("demo1").innerHTML=value;
})