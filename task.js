var list=[];
var text,child;
var i=0;
function taskAdd(){
    var val=document.getElementById("txt").value;
    var p = document.createElement('p');
    
    var btn = document.createElement('button');
    btn.className = 'glyphicon glyphicon-remove';
    btn.style.float="right";
    
    p.appendChild(document.createTextNode(val));
    p.appendChild(btn);

    document.getElementById("sec").append(p);
    
    btn.onclick=function(){
        document.getElementById("sec").removeChild(p);
    }
  

}


