let ipBox=document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string=' '

buttons.forEach(element=>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string));
            ipBox.value=string;
        }
        else if(b.target.innerText == 'AC'){
            string='';
            ipBox.value=string;
        }
        else if(b.target.innerText=='DEL'){
            string=string.substring(0,string.length-1);
            ipBox.value=string;
        }
        else if(b.target.id=='plusMinus'){
            string=String(-eval(string));
            ipBox.value=string;
        }
        else{
            string+=b.target.innerText;
            ipBox.value=string;
        }
    })
})