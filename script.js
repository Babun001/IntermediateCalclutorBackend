let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(evnt)=>{
        evnt.target
        if (evnt.target.innerHTML == '='){
            document.getElementById('previous-operaend').innerHTML = string
            string = eval(string);
            document.getElementById('current-operaend').innerHTML = string;
        }
        else if (evnt.target.innerHTML == 'AC'){
            console.log("AC button working...")
            string = ""
            document.getElementById('current-operaend').innerHTML = string;
            document.getElementById('previous-operaend').innerHTML = string;
        }    
        else if (evnt.target.innerHTML == 'C'){
            console.log("C button working...")
            string = delete(string)
            document.getElementById('current-operaend').innerHTML = string;   
        }
        else{
            console.log(evnt.target);
            string = string + evnt.target.innerHTML;
            console.log(string);
            document.getElementById('current-operaend').innerHTML = string;
            console.log(`The length of that string ->`,string.length)
        }
        
        
    });
});
console.log("Js working..")

// if (evnt.target.innerHTML == '/' || evnt.target.innerHTML == '*' || evnt.target.innerHTML == '-'||evnt.target.innerHTML == '+'){
//     document.getElementById('previous-operaend').innerHTML = string

//     if (evnt.target.innerHTML == '='){
//         string = eval(string);
//         document.getElementById('current-operaend').innerHTML = string;
//     }
// }