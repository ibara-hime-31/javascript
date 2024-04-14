const validate=()=>{
    let myfname=document.form1.fname.value;
    let mylname=document.form1.lname.value;
    let myemail=document.form1.email.value;
    let myphone=document.form1.num.value;
    let myadd=document.form1.add.value;
    let mydob=document.form1.dob.value;
    let mypass=document.form1.pass.value;
    let mypass1=document.form1.pass1.value;
    if(myfname==""){
        alert("Enter your first name");
        document.form1.fname.focus();
        return false;
    }
    if(mylname==""){
        alert("Enter your last name");
        document.form1.lname.focus();
        return false;
    }
    if(myemail=="" || !myemail.includes("@")){
        alert("Enter your email");
        document.form1.email.focus();
        return false;
    }
    if(myphone.length<10 || myphone.length>10){
        alert("Enter correct phone number");
        document.form1.num.focus();
        return false;
    }
    if(myadd==""){
        alert("Enter your address");
        document.form1.add.focus();
        return false;
    }
    if(mydob==""){
        alert("Enter your date of birth");
        document.form1.dob.focus();
        return false;
    }
    if(mypass<8){
        alert("Your password should be a minimum of 8 characters");
        document.form1.pass.focus();
        return false;
    }
    if(mypass1!=mypass){
        alert("Does not match the original password!")
        document.form1.pass1.focus();
        return false;
    }
}