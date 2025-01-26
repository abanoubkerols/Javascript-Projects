// let productName = document.getElementById("productName");
// let productPrice = document.getElementById("productPrice");
// let productCatrgory = document.getElementById("productCatrgory");
// var prouductquantity = document.getElementById("prouductquantity");
// let productDesc = document.getElementById("productDesc");
// let create = document.getElementById("create");


// let mode = "create";
// let global_var;

// // events to make ckeck input vildation 
// productName.addEventListener("keydown", validationName)
// productPrice.addEventListener("keydown", validationPrice)
// productCatrgory.addEventListener("keydown", validationCat)
// prouductquantity.addEventListener("keydown", validationQuntity)
// productDesc.addEventListener("keydown", validationDesc)

// // declration object for product
// let productlist;

// if (localStorage.getItem("productlist") != null) {
//   productlist = JSON.parse(localStorage.getItem("productlist"));
// } else {
//   productlist = [];
// }

// function addproduct() {
//   let product = {
//     name: productName.value,
//     price: productPrice.value,
//     category: productCatrgory.value,
//     qunt: prouductquantity.value,
//     desc: productDesc.value,
//   };


//   if (mode === "create") {
//     if (validationAllInputs()) {
//       productlist.push(product);
//       clearForm();
//     }
//   } else {
//     productlist[global_var] = product;
//     console.log(global_var);

//     mode = "create";
//     create.innerHTML = "Add product";
//   }

//   addTolocalStorage();

//   displayProduct(productlist);



// }


// // display product
// function displayProduct(list) { 
//   let cartona = "";
//   let i;
//   for (i = 0; i < list.length; i++) {
//     cartona += `<tr>
//                     <td>${i + 1}</td>
//                     <td>${list[i].newName ? list[i].newName : list[i].name}</td>
//                     <td>${list[i].price}</td>
//                     <td>${list[i].category}</td>
//                     <td id="test" >${list[i].qunt}</td>
//                     <td>${list[i].desc}</td>
//                     <td><button onclick="updataDate(${i})" class="btn btn-warning">Update</button></td>
//                     <td><button  onclick="Deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
//                     <td><button  onclick="selling(${i})" class="btn btn-success">Sell</button></td>
//                 </tr>`;
//   }
//   document.getElementById("show").innerHTML = cartona;
//   let btndel = document.getElementById("deletethem");
//   if (productlist.length > 0) {
//     btndel.innerHTML = `<button onclick="deleteAll()" class=" w-50 btn-danger text-uppercase  btn mb-5 btn-lg "> delete all (${i})</button>`;
//   } else {
//     btndel.innerHTML = " ";
//   }
// }
// displayProduct(productlist);

// // Deleteproduct
// function Deleteproduct(index) {
//   productlist.splice(index, 1);
//   addTolocalStorage();
//   displayProduct(productlist);
// }



// function deleteAll() {
//   localStorage.clear();
//   productlist.splice(0);
//   displayProduct(productlist);
// }

// // clear form
// function clearForm(x) {
//   productName.value = x ? x.name : "";
//   productPrice.value = x ? x.price : "";
//   productCatrgory.value = x ? x.category : "";
//   prouductquantity.value = x ? x.qunt : "";
//   productDesc.value = x ? x.desc : "";
// }



// // update product
// function updataDate(indexUpdate) {
//   clearForm(productlist[indexUpdate]);

//   mode = "update";
//   create.innerHTML = "update"
//   global_var = indexUpdate;


// }



// // search
// function searchByName(userInput) {
//   let searchItem = [];
//   for (let i = 0; i <  productlist.length; i++) {
//     if (productlist[i].name.toLowerCase().includes(userInput.toLowerCase())) {
//       productlist[i].newName = productlist[i].name.replace(
//         userInput,
//         `<span class="text-danger fw-bold">${userInput}</span>`
//       );

//       searchItem.push(productlist[i]);
//     }
//   }
//   displayProduct(searchItem);
// }




// // addTolocalStora
// function addTolocalStorage() {
//   localStorage.setItem("productlist", JSON.stringify(productlist));
// }


// // validation Functions
// function validationName() {
//   let regexName = /[a-z0-9]{3,8}$/;
//   if (regexName.test(productName.value)) {
//     document.getElementById("name-error").classList.add("d-none");
//     return true
//   }
//   else {
//     document.getElementById("name-error").classList.remove("d-none");
//     return false
//   }
// }

// function validationPrice() {
//   let regexPrice = /[0-9]{2,}$/;
//   if (regexPrice.test(productPrice.value)) {
//     document.getElementById("error").classList.add("d-none");
//     return true

//   } else {
//     document.getElementById("error").classList.remove("d-none");
//     return false

//   }

// }

// function validationCat() {
//   let regexcat = /[a-z0-9]{3,15}$/;
//   if (regexcat.test(productCatrgory.value)) {
//     document.getElementById("Category").classList.add("d-none");
//     return true
//   } else {
//     document.getElementById("Category").classList.remove("d-none");
//     return false
//   }

// }


// function validationQuntity() {
//   let regexquantity = /[0-9]{1}$/;


//   if (regexquantity.test(prouductquantity.value)) {
//     document.getElementById("quantity").classList.add("d-none");
//     return true
//   } else {
//     document.getElementById("quantity").classList.remove("d-none");
//     return false
//   }
// }



// function validationDesc() {
//   let regexrdesc = /[a-z]{3,20}$/;
//   if (regexrdesc.test(productDesc.value)) {
//     document.getElementById("desc").classList.add("d-none");
//     return true
//   } else {
//     document.getElementById("desc").classList.remove("d-none");
//     return false
//   }
// }


// function validationAllInputs() {
//   validationCat()
//   validationDesc()
//   validationName()
//   validationPrice()
//   validationQuntity()
//   if (validationName() == true && validationPrice() == true && validationCat() == true && validationDesc() == true && validationQuntity() == true) {
//     document.getElementById("fill-data").classList.add("d-none");
//     return true

//   } else {
//     document.getElementById("fill-data").classList.remove("d-none");
//     return false
//   }


// }

// function selling(i) {
//   let x = document.getElementById("test");
//   x.innerHTML = --productlist[i].qunt;
//   addTolocalStorage();
//   displayProduct(productlist);
// }




// _____________________



// Select DOM elements
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productQuantity = document.getElementById("productQuantity");
const productDesc = document.getElementById("productDesc");
const createButton = document.getElementById("create");
const showTable = document.getElementById("show");
const deleteAllBtn = document.getElementById("deleteAll");

let mode = "create";
let currentIndex = null;
let productList = JSON.parse(localStorage.getItem("productList")) || [];

displayProducts(productList);

// Event Listeners for Validation
productName.addEventListener("input", validateName);
productPrice.addEventListener("input", validatePrice);
productCategory.addEventListener("input", validateCategory);
productQuantity.addEventListener("input", validateQuantity);
productDesc.addEventListener("input", validateDesc);

// Add or Update Product
function addOrUpdateProduct() {
  const product = {
    name: productName.value.trim(),
    price: parseFloat(productPrice.value.trim()),
    category: productCategory.value.trim(),
    quantity: parseInt(productQuantity.value.trim(), 10),
    description: productDesc.value.trim(),
  };

  if (validateAllInputs()) {
    if (mode === "create") {
      productList.push(product);
    } else {
      productList[currentIndex] = product;
      console.log(currentIndex);
      mode = "create";
      createButton.textContent = "Add Product";
    }

    updateLocalStorage();
    clearForm();
    displayProducts(productList);
  }
}

// Display Products in Table
function displayProducts(list) {
  const fragment = document.createDocumentFragment();
  list.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>${product.category}</td>
      <td>${product.quantity}</td>
      <td>${product.description}</td>
      <td><button class="btn btn-warning" onclick="editProduct(${index})">Update</button></td>
      <td><button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button></td>
      <td><button class="btn btn-success" onclick="sellProduct(${index})">Sell</button></td>
    `;
    fragment.appendChild(row);
  });
  showTable.innerHTML = "";
  showTable.appendChild(fragment);
  deleteAllBtn.innerHTML = list.length > 0 ? `<button class="btn btn-danger" onclick="deleteAllProducts()">Delete All (${list.length})</button>` : "";
}

// Delete a Single Product
function deleteProduct(index) {
  productList.splice(index, 1);
  updateLocalStorage();
  displayProducts(productList);
}

// Delete All Products
function deleteAllProducts() {
  productList = [];
  updateLocalStorage();
  displayProducts(productList);
}

// Edit Product
function editProduct(index) {
  const product = productList[index];
  productName.value = product.name;
  productPrice.value = product.price;
  productCategory.value = product.category;
  productQuantity.value = product.quantity;
  productDesc.value = product.description;

  mode = "update";
  createButton.textContent = "Update Product";
  currentIndex = index;
}

// Sell Product (Decrement Quantity)
function sellProduct(index) {
  if (productList[index].quantity > 0) {
    productList[index].quantity--;
    updateLocalStorage();
    displayProducts(productList);
  } else {
    alert("Product is out of stock!");
  }
}

// Clear Form
function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productQuantity.value = "";
  productDesc.value = "";
}

// Update Local Storage
function updateLocalStorage() {
  localStorage.setItem("productList", JSON.stringify(productList));
}

// Validation Functions
function validateName() {
  return validateInput(productName, /^[a-zA-Z0-9 ]{3,30}$/, "name-error");
}

function validatePrice() {
  return validateInput(productPrice, /^\d+(\.\d{1,2})?$/, "price-error");
}

function validateCategory() {
  return validateInput(productCategory, /^[a-zA-Z0-9 ]{3,30}$/, "category-error");
}

function validateQuantity() {
  return validateInput(productQuantity, /^\d+$/, "quantity-error");
}

function validateDesc() {
  return validateInput(productDesc, /^.{3,100}$/, "desc-error");
}

function validateInput(inputElement, regex, errorId) {
  const isValid = regex.test(inputElement.value.trim());
  document.getElementById(errorId).classList.toggle("d-none", isValid);
  return isValid;
}

function validateAllInputs() {
  const isValid = validateName() && validatePrice() && validateCategory() && validateQuantity() && validateDesc();
  document.getElementById("fill-data-error").classList.toggle("d-none", isValid);
  return isValid;
}
