var n1,n2,i,result="";
function isCheck(){
    n1=parseInt(document.getElementById("num1").value);
    n2=parseInt(document.getElementById("num2").value);
    result+="<table>";
    if(n1<n2){
        for(i=n1; i<n2+1;i++){
            result+="<tr>";
            if(i%2==0){
                 result+="<td>"+i+"</td><td>=even</td>";
            }
            else{
                result+="<td>"+i+"</td><td>=Odd</td>";
            }
            result+="</tr>";
        }
    }
    else if(n1>n2){
        var first=n2;
        var second=n1;
        for(i=first; i<second+1;i++){
            result+="<tr>";
            if(i%2==0){
                result+="<td>"+i+"</td><td>=even</td>";
            }
            else{
                result+="<td>"+i+"</td><td>=Odd</td>";
            }
            result+="</tr>"; 
        }
        
    }
    result+="</table>";
    document.getElementById("display").innerHTML=result;

}