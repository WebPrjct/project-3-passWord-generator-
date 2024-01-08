const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="123456789";
const spacialChar="!@#$%^&*";

const upperInput=document.getElementById("uppercase");
const lowerInput=document.getElementById("lowercase");
const numberInput=document.getElementById("numbers");
const specialcharInput=document.getElementById("specialchars");
const totalLength=document.getElementById("totalLength");
const getPassword=(data)=>{
    let pass=data[Math.floor(Math.random()*data.length)];
    // console.log(data.length);
    return pass;
}

let password="";
const generatePassword=()=>{
    
    if(upperInput.checked){
        password=password+getPassword(upperCase);
    }
    if(lowerInput.checked){
        password=password+getPassword(lowerCase);
    }
    if(numberInput.checked){
        password=password+getPassword(number);
    }
    if(specialcharInput.checked){
        password=password+getPassword(spacialChar);
    }
    if(totalLength.value>password.length){
        return generatePassword(password);
    }
    // console.log(password);
    document.getElementById("password").placeholder=password;
    password="";
}
