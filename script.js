//your code here
let itemname = document.getElementById("item-name-input");
let itemprice = document.getElementById("item-price-input");
let tbody1 = document.querySelector("tbody")
let grandtotal = document.getElementById("total")
let total =0;
let btn = document.getElementById("add");
btn.addEventListener("click", additem)

function additem(){
    let row = document.createElement("tr");//element create
//console.log(list);
//appending the new element to my documnet body


let listitem1 = document.createElement("td");
listitem1.textContent =itemname.value;
listitem1.classList.add("item")
row.append(listitem1);
let listitem2 = document.createElement("td");
listitem2.innerText =itemprice.value;
listitem2.classList.add("price")


row.append(listitem2);
tbody1.append(row);
 total += Number(listitem2.innerText);
 grandtotal.innerText = "Grand Total: "+ total;
 itemname.value ="";
 itemprice.value ="";

}




