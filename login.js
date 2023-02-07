let signupbtn=document.getElementById("signupbtn");
let signinbtn=document.getElementById("signinbtn");
let namefield=document.getElementById("namefield");
let title=document.getElementById("title");

signinbtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="sig In";
    signupbtn.classList.add("use");
    signupbtn.classList.remove("disable");
}

    signupbtn.onclick=function(){
        namefield.style.maxHeight="60";
        title.innerHTML="sig up";
        signupbtn.classList.remove("disable");
        signupbtn.classList.add("use");
    
    }
