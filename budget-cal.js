var totalBudget=0;
function getBudget(){
    var budget=$("#inputBudget").val() || 0;
    alert(budget);
    totalBudget+=parseInt(budget);
    $("#bLabel").text(totalBudget);
    getBalance();
}

var n=0;
var totalExpense=0;

var expenseList=[],iconList=[];

function getAddExpense(){
    var exName=$("#inputExpense").val();
    var exAmt=$("#inputEAmount").val() || 0;

    var ex={title:exName,amt:exAmt};
    expenseList.push(ex);

    var icon={edit:"<i class='fa fa-edit' style='font-size:20px;'></i>",delete:"<i class='fa fa-trash' style='font-size:20px'></i>"};
    iconList.push(icon);
    
    var str="";
    totalExpense=0;
   
    expenseList.forEach(function(value,key){
        totalExpense+=parseInt(value.amt);
        str="<tr><td>"+value.title+"</td><td>"+value.amt+"</td><td>"+iconList[key].edit+"&nbsp;"+iconList[key].delete+"</td></tr>";
        
    });
   $("#disp").append(str);
   $("#expense").text(totalExpense);
    getBalance();
}

function getBalance(){
    //to get balance
    $("#balance").text(parseInt(totalBudget)-parseInt(totalExpense));
}
