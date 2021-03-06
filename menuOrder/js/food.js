

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
                    '<label id="itemLabel">'+re.Name+'</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id="itemPrice">$'+re.Price+'</label>'+
                    '<p>'+re.Desc+'</p><button class="orderBtn" onclick="addOrder(\''+re.Name+'\');"><i class="fa fa-plus" style="color: white;"></i>&nbsp;ORDER</button>'+
                    
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
                '<img src="'+v.Image+'" alt="Img" class="card">'+
                '<section>'+
                    '<label id="itemLabel">'+v.Name+'</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id="itemPrice">$'+v.Price+'</label>'+
                    '<p>'+v.Desc+'</p><button class="orderBtn" onclick="addOrder(\''+v.Name+'\');"><i class="fa fa-plus" style="color: white;"></i>&nbsp;ORDER</button>'+
                '</section>'+
            '</div>'
        );
    });
}
var orderItem;
function addOrder(h){
    orderItem= foodList.filter(function(value,key){
        return value.Name == h;
    });
    
     orderItemList.push(orderItem);
     localStorage.setItem("orderItems",JSON.stringify(orderItemList));  
}
var totalPrice=0;
function showOrder(){
    if(localStorage.getItem("orderItems") !== null){
        orderItemList=JSON.parse(localStorage.getItem("orderItems"));
    }
    $("#viewOrder").empty(); 
    console.log(orderItemList);
    orderItemList.forEach(function(z,f){
        var i=0;
        console.log(z[i].Name);
        totalPrice+=parseInt(z[i].Price);
        $("#viewOrder").append(
            '<tr>'
                +'<td>'+ z[i].Name+'</td>'
                +'<td>'+ z[i].Price+'</td>'
                +'<td>1</td>'
            +'</tr>'
        );
        ++i;
    });
}
function deleteItem(p,t){
    $(t).parent().parent().remove();
    foodList.splice(p,1);
    localStorage.setItem("Food",JSON.stringify(foodList));
}

function editItem(m){
    $("#fname").val(foodList[m].Name);
    $("#fprice").val(foodList[m].Price);
    $("#fdescription").val(foodList[m].Desc);
    $("#fcategory").val(foodList[m].Category);
    $("#fimage").val(foodList[m].Image);
    document.getElementById("btn").addEventListener("click",function(){
        updateItem(m);
    });
}

function updateItem(i){
    foodList[i].Name=$("#fname").val();
    foodList[i].Price=$("#fprice").val();
    foodList[i].Desc=$("#fdescription").val();
    foodList[i].Category=$("#fcategory").val();
    foodList[i].Image=$("#fimage").val();
    localStorage.setItem("Food",JSON.stringify(foodList));
    viewAll();
}
function totalAmount(){
    $("#viewTotal").append('<td colspan="3" style="color:black;"> Total Price:'+totalPrice+"</td>");
}
