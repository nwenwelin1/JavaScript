var n1,n2,i,ok="",cancel="";
function check(){
    n1= parseInt(document.getElementById("num1").value);
    n2= parseInt(document.getElementById("num2").value);
    if(n1<n2){
        for(i=n1;i<=n2;i++){
            if(i%2==0 && i%5==0){
                ok+=i+",";
            }
            else{
                cancel+=i+",";
            }
        }
        
    }
    else{
        var first=n2,second=n1;
        for(i=first;i<=second;i++){
            if(i%2==0 && i%5==0){
                ok+=i+",";
            }
            else{
                cancel+=i+",";
            }
        }
        
    }
    document.getElementById("label1").innerHTML=ok+":divided by 2 and 5";
    document.getElementById("label2").innerHTML=cancel+":not divided by 2 and 5";
}