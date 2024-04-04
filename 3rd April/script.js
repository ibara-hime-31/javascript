function validate(){
    let myname=document.f1.nm.value;
    let mycity=document.f1.city.value;
    alert(myname+" "+mycity);
    if(myname==""){
        alert("Enter your name");
        document.f1.nm.focus();
        return false;//does not submit the form, redirects to form
    }
}
function display(){
    let n=prompt("Enter a number: ");
    console.log(n*n*n);
}

switch(6){
    case 1: console.log("one");
    break;
    case 2: console.log("two");
    break;
    case 3: console.log("three");
    break;
    default: console.log("other");
    break;
}