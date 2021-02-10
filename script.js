const container =  document.querySelector(".container")
const genBtn = document.getElementById("btn");
genBtn.addEventListener("click" , getRand);
const input = document.querySelector("input");
const copy  = document.querySelector("img");
copy.addEventListener("click" , copyPass);
let charLength  =  18 ; 
let chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()+_?{}[]"

function getRand(){
    let rand =""
    for (let index = 0; index < charLength; index++) {
         rand += chars.charAt(Math.floor(Math.random() * chars.length));
         input.value =rand
    }
    
}

// getRand()

function copyPass(){
    let passWord =  input;
    passWord.select();
    passWord.setSelectionRange(0,99999)
    document.execCommand("copy"); 
    if(input.value != ""){
        document.querySelector("h3").classList.toggle("active") ;
        setTimeout(() => {
          document.querySelector("h3").classList.remove("active") ;
            
        }, 2000);
    }
}


