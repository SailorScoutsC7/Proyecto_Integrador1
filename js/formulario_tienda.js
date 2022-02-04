 console.log("Sistema funcionando");

 //Montar el servidor (Solo usar una vez)
 /*
 var regular=[];
  localStorage.setItem("regular", JSON.stringify(regular));
  var producto_covid=[];
  localStorage.setItem("producto_covid", JSON.stringify(producto_covid));
  var temporada=[];
  localStorage.setItem("temporada", JSON.stringify(temporada));
*/
regular = JSON.parse(localStorage.getItem("regular"));
temporada = JSON.parse(localStorage.getItem("temporada"));
producto_covid = JSON.parse(localStorage.getItem("producto_covid"));

class Producto {
    constructor(ID,nombre,precio,cantidad,tipo,descripcion) {
        this.ID= ID;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad= cantidad;
        this.tipo= tipo;
        this.descripcion= descripcion
    }
}
function agregarProducto(formulario) {
    var ID = document.getElementById('ID_Producto').value;
    var nombre = document.getElementById('nombre_producto').value;
    var precio = document.getElementById('Precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var tipo = document.getElementById('tipo').value;
    var descripcion = document.getElementById('Descripcion').value;
    //validarForm(nombre, email, telefono, mensaje);
    var producto = new Producto(ID,nombre,precio,cantidad,tipo,descripcion);
    console.log(tipo);
    addItem(producto);
    tipoProducto(tipo,producto);
    ID="";
    nombre="";
    precio="";
    cantidad="";
    tipo="";
    descripcion="";
}
function tipoProducto(tipo,producto){
   switch(tipo){
   case "regular":
    regular.push(producto);
    localStorage.setItem("regular", JSON.stringify(regular));
    break;
   case "temporada":
    temporada.push(producto);
    localStorage.setItem("temporada", JSON.stringify(temporada));
    break;
   case "producto_covid":
    producto_covid.push(producto);
    localStorage.setItem("producto_covid", JSON.stringify(producto_covid));
    break;
   }
}

function addItem(obj_regular){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+obj_regular.nombre+'</h5>\n' +
        '        <h5 class="card-title">'+obj_regular.precio+'</h5>\n' +
        '        <p class="card-text">'+obj_regular.descripcion+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

for (let index = 0; index < regular.length; index++) {
    var obj_regular = regular[index];
   addItem(obj_regular);
}

