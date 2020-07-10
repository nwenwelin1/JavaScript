var totalBudget=0;
function getBudget(){
    var budget=$("#inputBudget").val() || 0;
    totalBudget+=parseInt(budget);
    $("#bLabel").text(totalBudget);
    getBalance();
}

var n=0,str="";;
var totalExpense=0;
var expenseList=[],iconList=[];
function getAddExpense(){
    var exName=$("#inputExpense").val();
    var exAmt=$("#inputEAmount").val() || 0;
    var ex={title:exName,amt:exAmt};
    expenseList.push(ex);
    var icon={edit:"<i class='fa fa-edit' style='font-size:15px;'></i>",delete:"<i class='fa fa-trash' style='font-size:15px'></i>"};
    iconList.push(icon);
    totalExpense=0;
    expenseList.forEach(function(value,key){
        totalExpense+=parseInt(value.amt);
        str="<tr id='"+key+"'><td>"+value.title+"</td><td>"+value.amt+"</td><td><button onclick='editItem("+key+");'>"+iconList[key].edit+"</button><button onclick='deleteItem("+key+");'>"+iconList[key].delete+"</button></td></tr>";
        
    });
   $("#disp").append(str);
   $("#expense").text(totalExpense);
    getBalance();
}

function getBalance(){
    $("#balance").text(parseInt(totalBudget)-parseInt(totalExpense));
}
function deleteItem(k){
    $("#"+k).remove();
    totalExpense-=expenseList[k].amt;
    $("#expense").text(totalExpense);
    delete expenseList[k];
    delete iconList[k]; 
    getBalance();
}

function editItem(i){
    $("#inputExpense").text(expenseList[i].title);
    $("#inputEAmount").text(expenseList[i].amt);
        var fieldID = $("#"+i).prev().attr("id");
        $('#' + fieldID).val("hello world");
}
