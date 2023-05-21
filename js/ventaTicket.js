var resultado=0;
const PRECIO_TICKET=200;


let nombre=document.getElementById('nombre'),
apellido=document.getElementById('apellido'),
email=document.getElementById('email'),
cantidad=document.getElementById('cant'),
categoria=document.getElementById('categoriaSelect'),
totalAPagar=document.getElementById('total_precio');


function calcularCompra(){
if(comprobarCampos()){
resultado= (PRECIO_TICKET-(PRECIO_TICKET*parseInt(categoria.value) ))*parseInt(cantidad.value) ;
console.log(resultado + typeof(resultado));

totalAPagar.innerHTML=resultado;
console.log("pasamos!!!");
}else{
    console.log("no pasamos");
    
}
}

function comprobarCampos(){
    return datosValidados = (nombre.value !== "")&&(apellido.value!=="")&&
    (email.value!=="")&&(cantidad.value!=="");
}