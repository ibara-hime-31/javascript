const validate= () =>{
    let myname=document.f1.name.value;
    let myemail=document.f1.email.value;
    let myadd=document.f1.add.value;
    let mypass=document.f1.pass.value;
    if (myname ==""){
        alert("Enter your name");
        document.f1.name.focus();
        return false;
    }
    if (myemail =="" || !myemail.includes('@')){
        alert("Enter your email");
        document.f1.email.focus();
        return false;
    }
    if (myadd ==""){
        alert("Enter your address");
        document.f1.add.focus();
        return false;
    }
    if (mypass.length <6){
        alert("Password should be greater than 6 characters");
        document.f1.pass.focus();
        return false;
    }
}
function validate2(){
    let myname=document.form2.name.value;
    let mypass=document.form2.pass.value;
    if(myname==""){
        alert("Enter your name")
        document.form2.name.focus();
        return false;
    }
    if(mypass.length<8){
        alert("Password should be more than 8 characters")
        document.form2.pass.focus();
        return false;
    }
}