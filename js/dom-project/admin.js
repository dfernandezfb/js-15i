//? PROTECCIÓN DE RUTA

//* Traemos los productos de LS
const products = JSON.parse(localStorage.getItem('products'));

class Product{
  constructor(name, id, price, description, image){
    this.name = name;
    this.id = id;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

//! cRud : Lectura de datos
products.forEach(product=>{
  const productRow = document.createElement('tr');
  productRow.innerHTML=`
  <th scope="row">${product.id}</th>
  <td>${product.name}</td>
  <td>${product.description}</td>
  <td><img src=${product.image} style="width:50px;height:50px"></td>
  <td>$${product.price}</td>
  <td>
    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="fillFields('${product.id}')">✏️</button>
    <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">🗑️</button>
  </td>
  `
  document.querySelector('tbody').appendChild(productRow);
})

//! Crud: Creación de datos
const addProduct = ()=>{
  const name = document.getElementById('product-name').value;
  const image = document.getElementById('product-image').value;
  const price = document.getElementById('product-price').value;
  const description = document.getElementById('product-description').value;
  //!Validar con JS
  const newProduct = new Product(name, new Date().getTime(),price,description,image);
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
}

//! cruD: Borrado de datos

const deleteProduct = (idToRemove)=>{
  const productsUpdated = products.filter(product=>product.id!=idToRemove);
  localStorage.setItem('products',JSON.stringify(productsUpdated));
  window.location.reload();
}

//! crUd: Modificación de datos

const fillFields = (idToEdit)=>{
  const product = products.find(product=>product.id === idToEdit);
  document.getElementById('product-name-edit').value = product.name;
  document.getElementById('product-image-edit').value = product.image;
  document.getElementById('product-price-edit').value = product.price;
  document.getElementById('product-description-edit').value = product.description;
  document.getElementById('edit-form').setAttribute('onsubmit',`editProduct('${product.id}')`);
}

const editProduct = (idToEdit)=>{
  const name = document.getElementById('product-name-edit').value;
  const image = document.getElementById('product-image-edit').value;
  const price = document.getElementById('product-price-edit').value;
  const description = document.getElementById('product-description-edit').value;
  const productsUpdated = products.filter(product=>product.id !== idToEdit);
  const productUpdated = new Product(name, idToEdit, price, description,image);
  productsUpdated.push(productUpdated);
  localStorage.setItem('products',JSON.stringify(productsUpdated));  
}