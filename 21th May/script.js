async function Dohomework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let homework=true;
            if(homework) resolve("You have completed your homework");
            else reject("You have not completed your work");
        },1500);
    })
}
async function havelunch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lunch=true;
            if(lunch) resolve("You have finished your lunch");
            else reject("You have not finished your lunch");
        },2000);
    })
}
async function takenrest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let rest=true;
            if(rest) resolve("Yes taken rest");
            else reject("Not taken rest");
        },2000);
    })
}
async function allworkdone(){
    const dohomeworkresult= await Dohomework();
    console.log(dohomeworkresult);

    const lunchresult= await havelunch();
    console.log(lunchresult);

    const restresult= await takenrest();
    console.log(restresult);

    console.log("All tasks are finished");
}

allworkdone();


async function xyz(){
    const firstPromise = new Promise((resolve,reject)=>{
        resolve("Hello");
    })
    const secondPromise = new Promise((resolve,reject)=>{
        resolve("friends");
    })

    const firstResult=await firstPromise;
    const secondResult= await secondPromise;

    return [firstResult, secondResult];
}

async function display(){
    let data= await xyz();
    console.log(data);
}
display();