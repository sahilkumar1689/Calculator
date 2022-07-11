let screen = document.getElementById('outbox');
btn = document.querySelectorAll('.button');
let screenvalue = " ";
for (items of btn) {
    items.addEventListener("click",(e)=>{
        buttontext = e.target.innerText;
        console.log('Button text is :',buttontext);
        if (buttontext == "="){
            screen.value= eval(screenvalue);
        }
        else if (buttontext =="C"){
            screenvalue="";
            screen.value = screenvalue;
        }
        else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}