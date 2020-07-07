var n,p,e,a,str="";
var studentInfoList=[];
function studentInfo(){
    var g="";
    n=document.getElementById("name").value;
    p=document.getElementById("phno").value;
    e=document.getElementById("email").value;
    a=document.getElementById("address").value;
    //get value from radio
    var radio = document.getElementsByName("gender");
    var len= radio.length;
    for (var i = 0; i < len; i++) {
        if (radio[i].checked) {

            g=radio[i].value;
            break;
        }
    }

    //get value from check box
    var m="";
    if (document.getElementById('01').checked) {
        m+= document.getElementById('01').value+",";
    } 
    if (document.getElementById('02').checked) {
        m+= document.getElementById('02').value+",";
    }
    if (document.getElementById('03').checked) {
        m+= document.getElementById('03').value+",";
    }
    var studentInfo={name:n,phoneNo:p,email:e,address:a,gender:g,major:m};
    studentInfoList.push(studentInfo);
    //console.log(studentInfoList);
    if(n=="" || p=="" || e=="" || a=="" || g=="" || m==""){
        alert("Please fill your all information");  
    }
    else{
        studentInfoList.forEach(function(value,key){
            str="<tr><td>"+value.name+"</td><td>"+value.phoneNo+"</td><td>"+value.email+"</td><td>"+value.gender+"</td><td>"+value.major+"</td><td>"+value.address+"</td></tr>";
            
        });
        $("#table").append(str);
    }
}
function reset(){
    document.getElementById("name").value="";
    document.getElementById("phno").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementsByName("gender").value="";
    document.getElementsByName("major").value="";

}