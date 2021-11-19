

var item=localStorage.getItem("cart")

var cart=JSON.parse(item);
var s=0;
var st="<table class='inventory'><thead><tr><th>Item</th><th>Price</th></tr>";
for(var i=0;i<cart.length;i++)
{
    st=st+"<tr><td>"+cart[i].title+"</td><td>"+cart[i].price+"</td></tr>";
    console.log(cart[i].title);
    console.log(cart[i].price);
    s=s+parseInt(cart[i].price);
}
st=st+"</table>";
console.log(st);
document.getElementById("d1").innerHTML=st;
document.getElementById("total").innerHTML=s;
console.log(document.getElementById('content'));
// var title=cart.title;
// var total=cart.price;
// console.log(title);
// console.log(total);
