let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCatrgory = document.getElementById("productCatrgory");
var prouductquantity = document.getElementById("prouductquantity");
let productDesc = document.getElementById("productDesc");
let mode = "create";
let global_var;

// declration object for product
let productlist;
if (localStorage.getItem("productlist") != null) {
  productlist = JSON.parse(localStorage.getItem("productlist"));
} else {
  productlist = [];
}

function addproduct() {
  let product = {
    name: productName.value,
    price: productPrice.value,
    category: productCatrgory.value,
    qunt: prouductquantity.value,
    desc: productDesc.value,
  };

  if (mode === "create") {
    if (validation()) {
      productlist.push(product);
    
    } else {
      alert("invalid enter");
    }
  } else {
    productlist[global_var] = product;
    mode = "create";
    create.innerHTML = "Add Prouduct";
  }
  addTolocalStorage();
  clearForm();
      displayProduct(productlist);}

// display product
function displayProduct(list) {
  let cartona = "";
  let i;
  for (i = 0; i < list.length; i++) {
    cartona += `<tr>
                    <td>${i + 1}</td>
                    <td>${list[i].newName ? list[i].newName : list[i].name}</td>
                    <td>${list[i].price}</td>
                    <td>${list[i].category}</td>
                    <td id="test" >${list[i].qunt}</td>
                    <td>${list[i].desc}</td>
                    <td><button onclick="updateDate(${i})" class="btn btn-warning">Update</button></td>
                    <td><button  onclick="Deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
                    <td><button  onclick="selling(${i})" class="btn btn-success">Sell</button></td>
                </tr>`;
  }
  document.getElementById("show").innerHTML = cartona;
  var btndel = document.getElementById("deleteAll");
  if (productlist.length > 0) {
    btndel.innerHTML = `<button onclick="deleteAll()" class=" w-50 btn-danger text-uppercase  btn mb-5 btn-lg "> delete all (${i})</button>`;
  } else {
    btndel.innerHTML = "";
  }
}
displayProduct(productlist);

// Deleteproduct

function Deleteproduct(index) {
  productlist.splice(index, 1);
  addTolocalStorage();
  displayProduct(productlist);
}
function deleteAll() {
  localStorage.clear();
  productlist.splice(0);
  displayProduct(productlist);
}

// clear form
function clearForm(x) {
  productName.value = x ? x.name : "";
  productPrice.value = x ? x.price : "";
  productCatrgory.value = x ? x.category : "";
  prouductquantity.value = x ? x.qunt : "";
  productDesc.value = x ? x.desc : "";
}

// update product

function updateDate(indexUpdate) {
  clearForm(productlist[indexUpdate]);
  // productName.value=productlist[indexUpdate].name;
  // productPrice.value=productlist[indexUpdate].price;
  // productCatrgory.value=productlist[indexUpdate].category;
  // productDesc.value=productlist[indexUpdate].desc;
  create.innerHTML = "update";
  mode = "update";
  global_var = indexUpdate;
}

// search
function searchByName(userInput) {
  let searchItem = [];
  for (let i = 0; i < productlist.length; i++) {
    if (productlist[i].name.toLowerCase().includes(userInput.toLowerCase())) {
      productlist[i].newName = productlist[i].name.replace(
        userInput,
        `<span class="text-danger fw-bold">${userInput}</span>`
      );

      searchItem.push(productlist[i]);
    }
  }
  displayProduct(searchItem);
}
searchByName();


// addTolocalStora
function addTolocalStorage() {
  localStorage.setItem("productlist", JSON.stringify(productlist));
}

function validation() {
  let regexName = /[a-z]{3,8}$/;
  let regexPrice= /[0-9]{3}$/;
  let regexcat=/[a-z0-9]{3,15}$/;
  let regexquantity = /[0-9]{1}$/;
  let regexrdesc= /[a-z]{3,20}$/;
  if (regexName.test(productName.value) && regexPrice.test(productPrice.value) &&regexcat.test(productCatrgory.value) 
  && regexquantity.test(prouductquantity.value)&&regexrdesc.test(productDesc.value)) {
    document.getElementById("name-error").classList.add("d-none");
    document.getElementById("error").classList.add("d-none");
    document.getElementById("Category").classList.add("d-none");
    document.getElementById("quantity").classList.add("d-none");
    document.getElementById("desc").classList.add("d-none");

    return true;
  } else {
    document.getElementById("name-error").classList.remove("d-none");
    document.getElementById("error").classList.remove("d-none");
    document.getElementById("Category").classList.remove("d-none");
    document.getElementById("quantity").classList.remove("d-none");
    document.getElementById("desc").classList.remove("d-none");


    return false;
  }
}

function selling(i) {
  // var cartona
  // var num = prouductquantity.value;
  // num = num - 1;
  let x = document.getElementById("test");
  // console.log(--(productsList[i].qunt))

  // cartona += ` <tr>
  //     <td >${--(productsList[i].qunt)}</td>

  // </tr>`
  //
  console.log(x);
  x.innerHTML = --productlist[i].qunt;
  addTolocalStorage();
  displayProduct(productlist);
}
