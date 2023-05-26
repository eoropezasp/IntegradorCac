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

    console.log(PRECIO_TICKET*parseFloat(categoria.value))
resultado= (PRECIO_TICKET-(PRECIO_TICKET*parseFloat(categoria.value) ))*parseFloat(cantidad.value) ;
console.log(resultado + typeof(resultado));

totalAPagar.innerHTML=resultado;

}else{
    
    
}
}

function comprobarCampos(){
    return datosValidados = (nombre.value !== "")&&(apellido.value!=="")&&
    (email.value!=="")&&(cantidad.value!=="");
}

function limpiarCampos(){
   nombre.value="";
   apellido.value="";
   email.value="";
   cantidad.value="";
   totalAPagar.innerHTML="";
}