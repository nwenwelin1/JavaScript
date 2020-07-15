

var fname,fprice,fcategory,fimage,fdescription,str="",viewItem="",chooseItem="",cItem="",rowNo;
var foodList=[];
var orderItemList=[];
var categoriesList=["Juice","IceCream","Burger","Pizza"];
if (typeof(Storage) !== "undefined"){
    if(localStorage.getItem("Food")!=null){
        foodList=JSON.parse(localStorage.getItem("Food"));
    }
   
   
} else {

}
function clearData(){
    $("#fname").val("");
    $("#fprice").val("");
    $("#fdescription").val("");
    $("#fcategory").val("");
    $("#fimage").val("");
}
function addFoodCategory(){
    fname=$("#fname").val();
    fprice=$("#fprice").val();
    fdescription=$("#fdescription").val();
    fcategory=$("#fcategory").val();
    fimage=$("#fimage").val();
    var fCategory={Name:fname,Price:fprice,Desc:fdescription,Category:fcategory,Image:fimage};
    foodList.push(fCategory);
    localStorage.setItem("Food",JSON.stringify(foodList));
    clearData();
    viewAll();
}

function viewAll(){
   $("#foodData").empty();
    var z=0;
    foodList.forEach(function(s,o){
        z++;
        $("#foodData").append(
            '<tr>'
                +'<td>'+z+'</td>'
                +'<td>'+ s.Name+'</td>'
                +'<td>'+ s.Price+'</td>'
                +'<td>'+ s.Category+'</td>'
                +'<td><i class="fa fa-trash" onclick="deleteItem('+o+',this);">&nbsp;&nbsp;</i><i class="fa fa-edit" onclick="editItem('+o+');"></i></td>'
            +'</tr>'
        );
    });   
}

function showCategoryList(){
    $("#cateList").empty();
    categoriesList.forEach(function(value,key){
        $("#cateList").append(
            "<li onclick='chooseCategory("+key+");'><i class='fas fa-arrow-right' style='font-size: 10px;'></i>&nbsp;&nbsp;"+categoriesList[key]+"</li>"
        );
    });
}
function viewFoodList(){
    $("#viewItem").empty();
    foodList.forEach(function(re,i){
        $("#viewItem").append(
            '<div class="item">'+
                '<img src="'+re.Image+'" alt="Img">'+
                '<section>'+
                    '<label id="itemLabel">'+re.Name+'</label> <label id="itemPrice">$'+re.Price+'</label>'+
                    '<p>'+re.Desc+'</p><button class="orderBtn" onclick="addOrder('+i+');"><i class="fa fa-plus" style="color: white;"></i>&nbsp;ORDER</button>'+
                    
                '</section>'+
            '</div>'
        );     
    });
}

var selectItem;
function chooseCategory(k){
    selectItem= foodList.filter(function(value,key){
        return value.Category == categoriesList[k];
    });
    viewSelectedItem(selectItem);
}
function viewSelectedItem(selectItem){
    $("#viewItem").empty();
    $("#title").html(selectItem.Category);
    selectItem.forEach(function(v,i){
        $("#viewItem").append(
            '<div class="item">'+
                '<img src="'+v.Image+'" alt="Img">'+
                '<section>'+
                    '<label id="itemLabel">'+v.Name+'</label> <label id="itemPrice">$'+v.Price+'</label>'+
                    '<p>'+v.Desc+'</p><button class="orderBtn" onclick="addOrder('+i+');"><i class="fa fa-plus" style="color: white;"></i>&nbsp;ORDER</button>'+
                '</section>'+
            '</div>'
        );
    });
}


function addOrder(h){
    var orderObj={
        Name:foodList[h].Name,
        Price:foodList[h].Price,
        Qty:1,
        Total:parseInt(foodList[h].Price)*1
    };
    orderItemList.push(orderObj);
    localStorage.setItem("orderItem",JSON.stringify(orderItemList));   
}
var totalPrice=0;
function showOrder(){
  
    if(localStorage.getItem("orderItem") !== null){
        orderItemList=JSON.parse(localStorage.getItem("orderItem"));
    }
    $("#viewOrder").empty();  
    orderItemList.forEach(function(val,k){
        totalPrice+=val.Total;
        $("#viewOrder").append(
            '<tr>'
                +'<td>'+ val.Name+'</td>'
                +'<td>'+ val.Price+'</td>'
                +'<td>'+ val.Qty+'</td>'
            +'</tr>'
        );
    });
  
}
function deleteItem(p,t){
    $(t).parent().parent().remove();
    //alert(foodList.length);
    //alert(p);
    foodList.splice(p,1);
    localStorage.setItem("Food",JSON.stringify(foodList));
}
function editItem(m){
    alert("edited");
    $("#fname").val(foodList[m].Name);
    $("#fprice").val(foodList[m].Price);
    $("#fdescription").val(foodList[m].Desc);
    $("#fcategory").val(foodList[m].Category);
    $("#fimage").val(foodList[m].Image);


}
function totalAmount(){
    $("#viewTotal").append('<td colspan="3"> Total Price:'+totalPrice+"</td>");
}
