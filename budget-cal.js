var totalBudget=0;
function getBudget(){
    var budget=$("#inputBudget").val() || 0;
    totalBudget+=parseInt(budget);
    $("#bLabel").text(totalBudget);
    getBalance();
}

var n=0,str="";;
var totalExpense=0,i=0;
var ExpName=[],ExpAmt=[],delete=[],edit=[];
function getAddExpense(){
    var exName=$("#inputExpense").val();
    var exAmt=$("#inputEAmount").val() || 0;
     ExpName[i]=exName;
    ExpAmt[i]=exAmt;
    totalExpense+=exAmt;
   
    edit[i]="<i class='fa fa-edit' style='font-size:15px;'></i>";
    delete[i]="<i class='fa fa-trash' style='font-size:15px'></i>";
    str="<tr id='"+i+"'><td>"+ExpName[i]+"</td><td>"+ExpAmt[i]+"</td><td><button onclick='editItem("+i+");'>"+edit[i]+"</button><button onclick='deleteItem("+i+");'>"+delete[i]+"</button></td></tr>";
   $("#disp").append(str);
   $("#expense").text(totalExpense);
    i++;
    getBalance();
}

function getBalance(){
    $("#balance").text(parseInt(totalBudget)-parseInt(totalExpense));
}
function deleteItem(k){
    $("#"+k).remove();
    totalExpense-=expenseList[k].amt;
    $("#expense").text(totalExpense);
    getBalance();
}

function editItem(i){
    $("#inputExpense").text(expenseList[i].title);
    $("#inputEAmount").text(expenseList[i].amt);
        var fieldID = $("#"+i).prev().attr("id");
        $('#' + fieldID).val("hello world");
}
