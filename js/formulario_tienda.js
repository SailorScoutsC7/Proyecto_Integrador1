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
    constructor(ID,nombre,precio,cantidad,tipo,descripcion,img) {
        this.ID= ID;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad= cantidad;
        this.tipo= tipo;
        this.descripcion= descripcion;
        this.img= img;
    }
}
function agregarProducto(formulario) {
    var ID = document.getElementById('ID_Producto').value;
    var nombre = document.getElementById('nombre_producto').value;
    var precio = document.getElementById('Precio').value;
    var cantidad = document.getElementById('cantidad').value;
    var tipo = document.getElementById('tipo').value;
    var descripcion = document.getElementById('Descripcion').value;
    var img = document.getElementById('imagen').value;
    img = img.replace(/^.*\\/, "");
    //validarForm(nombre, email, telefono, mensaje);
    var producto = new Producto(ID,nombre,precio,cantidad,tipo,descripcion,img);
    console.log(tipo);
    tipoProducto(tipo,producto);
    ID="";
    nombre="";
    precio="";
    cantidad="";
    tipo="";
    descripcion="";
    img="";
}//hola
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
function añadirProducto(subir_producto){
    const itemHTML = 
        '<div class="col-md-4">>\n'                                         +
        '<div class="card" style="width: 18rem;">\n'                        +
        '<img src="../html/assets/Store/Pan/'+subir_producto.img+'" class="card-img-top" alt="...">\n'                        +
        '    <div class="card-body">\n'                                     +
        '        <h5 class="card-title">'+subir_producto.nombre+'</h5>\n'   +
        '        <h6 class="card-subtitle mb-2 text-muted">'+subir_producto.precio+'</h6>\n'   +
        '        <p class="card-text">'+subir_producto.descripcion+'</p>\n' +
        '    </div>\n'                                                      +
        '</div>\n'                                                          +
        '</div>'                                                             ;
    const itemsContainer = document.getElementById(subir_producto.tipo);
    itemsContainer.innerHTML += itemHTML;
}
for (let index = 0; index < regular.length; index++) {
    var subir_producto = regular[index];
   añadirProducto(subir_producto);
}