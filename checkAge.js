function check(){
    var inputDate=document.getElementById("date").value;
    var birthday=new Date(inputDate);
    var now=new Date();
    var result=Math.abs(now.getFullYear()-birthday.getFullYear());
    if(parseInt(result)<18){
        document.getElementById("result").innerHTML="less than 18";
    }
    else{
        document.getElementById("result").innerHTML="greater than 18";
    }
    
}