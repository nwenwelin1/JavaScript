var n1,n2,op,result;

function calculate(){
    n1=parseInt(document.getElementById("num1").value);
    n2=parseInt(document.getElementById("num2").value);
    var e = document.getElementById("operator");
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser);
    switch(strUser){
        case "0": result=n1+n2;
                    break;
        case "1": result=n1-n2;
                    break;
        case "2": result=n1*n2;
                    break;
        case "3": result=n1/n2;
        }
    
    
    document.getElementById("result").innerHTML="Result is "+result;
}