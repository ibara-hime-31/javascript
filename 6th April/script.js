function validate(){
    let x=document.getElementById("myinput").value;
    let text;
    if(isNaN(x) || x<1 || x>10){
        text="Input not valid";
    }
    else{
        text="Input valid";
    }
    document.getElementById("demo").innerHTML=text;
}