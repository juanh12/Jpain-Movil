

window.onload = function() {
    btnRegistrar = document.getElementById("btnRegistrar");
    ingreso = document.getElementById("ingreso");
    registro = document.getElementById("registro");
    principal = document.getElementById("principal");
    txtCorreo = document.getElementById("correoR");
    txtNombre = document.getElementById("nombreR");
    txtContrasena = document.getElementById("contrasenaR");
    txtConfirmacion = document.getElementById("confirmacionR");
    txtFecha = document.getElementById("fechaR");
    btnRegistro = document.getElementById("btnRegistro");
    btnIngresar = document.getElementById("btnIngresar");
    txtCorreoI = document.getElementById("correoI");
    txtContrasenaI = document.getElementById("contrasenaI");
     nombreP = document.getElementById("nombreP");
    btnenviarM = document.getElementById("enviarM");
    txtCorreoM = document.getElementById("correoM");
    txtMensajeM = document.getElementById("mensajeM");
     redactar = document.getElementById("redactar");
     photo = document.getElementById("photo");
     camera = document.getElementById("camera");
     btnOpen= document.getElementById("btnOpen");
     btnMapa= document.getElementById("btnMapa");
     mapa = document.getElementById("mapa");
     contenedorMapa = document.getElementById("contenedorMapa");
     }

    //open = document.getElementById("open");
    if (localStorage.getItem("login") !== "1") {
        ingreso.style.display = "block";
        principal.style.display = "none";
        redactar.style.display = "none";
        document.getElementById("camara").style.display ="none";
 }

    else {

        ingreso.style.display = "none";
        principal.style.display = "block";
        redactar.style.display = "block";
        nombre = localStorage.getItem("nombre");
        correo = localStorage.getItem("correo");
        document.getElementById("nombreP").innerHTML = nombre;
        leerM();

    }


document.getElementById("enviarM").addEventListener("click", function() {
         if (txtCorreoM.value == "") { 
            alert("Debe escribir el Correo");
            txtCorreoM.classList.add("errorCampo");
             //agregar mediante codigo una clase(estilo)
             return false;  
    }
    else {
        txtCorreoM.classList.remove("errorCampo");
    }
    if (txtMensajeM.value == "") {
    alert("Debe escribir el Mensaje");
    txtMensajeM.classList.add("errorCampo");
    return false;
    }
    else {
    txtMensajeM.classList.remove("errorCampo");
    }
    let datosM = new FormData();
    datosM.append("correM", txtCorreoM.value);
    datosM.append("mensajeM", txtMensajeM.value);
    
    
    
    fetch("http://programacionavanzadajh.orgfree.com/guardarMensaje.php", {
        method: 'POST', //*GET,POST, PUT, DELETE, ETC.
        body: datosM
    })
    .then(function (response){
        if(response.ok){
            alert("Mensaje Enviado con Exito");
        }
        else {
            alert("Ocurrio un error");
            console.log(responde);
        }
    })
    .catch(function(err) {
         alert("Ocurrio un error -> + err");
     
      });
    });





btnRegistrar.addEventListener("click", function() {
   ingreso.style.display = "none";
    registro.style.display = "block";
});
btnRegistro.addEventListener("click", function() { 
    if (txtCorreo.value == "") { 
        alert("Debe escribir el correo");
        txtCorreo.classList.add("errorCampo");
         //agregar mediante codigo una clase(estilo)
         return false;  
}
else {
    txtCorreo.classList.remove("errorCampo");
}
if (txtNombre.value == "") {
alert("Debe escribir el nombre");
txtCorreo.classList.add("errorCampo");
return false;
}
else {
txtCorreo.classList.remove("errorCampo");
}
if(txtContrasena.value == "")   {
   alert("Debe escribir la contraseña");
  txtCorreo.classList.add("errorCampo");
  return false;
} //aqui
else { 
  txtCorreo.classList.remove("errorCampo");
}
if (txtConfirmacion.value == "") {
alert("Debes escribir la confirmacion");
txtCorreo.classList.add("errorCampo");
return false;
}
if (txtContrasena.value !== txtConfirmacion.value) {
   alert("la contraseña confimarcaion no coincide");
    txtCorreo.classList.add("errorCampo");
   return false;
}
else {
    txtCorreo.classList.remove("errorCampo");
}
if (txtFecha.value == "") { 
    alert("debe escribir la fecha");
    txtCorreo.classList.add("errorCampo");
  return false;
}  
else {
    txtCorreo.classList.remove("errorCampo");
}
let datos = new FormData();
datos.append("correoR", txtCorreo.value);
datos.append("nombreR", txtNombre.value);
datos.append("contrasenaR", txtContrasena.value);
datos.append("fechaR", txtFecha.value);


fetch("http://programacionavanzadajh.orgfree.com/registro.php", {
    method: 'POST', //*GET,POST, PUT, DELETE, ETC.
    body: datos
})
.then(function (response) {
    if(response.ok){
        alert("Usuario resgistrado");
        ingreso.style.display = "block";
        registro.style.display= "none";
}
    else {
        alert("Ocurrio un error al registrar");
        console.log(responde);
    }
})
.catch(function(err) {
     alert("Ocurrio un error -> + err");
 
  });
});

btnIngresar.addEventListener("click", function() {
    if (txtCorreoI.value == "") {
        alert("Debe escribir el correo");
        txtCorreoI.classList.add("errorCampo");
        return false;
    }
else {
    txtCorreoI.classList.remove("errorCampo");
}
if (txtContrasenaI.value == "") {
   alert("Debe escribir la contraseña");
    txtContrasenaI.classList.add("erorCampo");
    return false;
}
else {
    txtContrasenaI.classList.remove("errorCampo");
}
 let datosI = new FormData();
 datosI.append("correoI", txtCorreoI.value);
 datosI.append("contrasenaI", txtContrasenaI.value);
 
fetch("http://programacionavanzadajh.orgfree.com/ingreso.php", { 
    method: 'POST', 
    body: datosI
})
.then(function (response) { 
    return response.json();
})
.then(function(data){
    if (data.fallo == "contrasena") {
        alert("Debe escribir la contraseña correcta");
    }
    if (data.fallo == "usuario") {
        alert("El correo no esta registrado");
      }
    else {
    nombre = data.nombre;
    correo = data.correo;
    ingreso.style.display = "none";
    principal.style.display = "block";
    nombreP.innerHTML = nombre;
    localStorage.setItem("login", 1);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    leerM();
   }
})

.catch(function(err) {
    alert("Ocurrio un error inesperado");
    console.log(err);
    });

});

document.getElementById("btnOpen").addEventListener("click", function() {
    camera.click();
});

camera.addEventListener("change", function(e) {
    ruta= URL.createObjectURL(e.target.files[0]);
     obtenerLugar();
     photo.src = ruta;
     if(obtenerSO() == "iOS") {

     
     let link = document.createElement('a');
     link.download = "test.png";
     link.href = ruta;
     //link.href = photo.toDataURL("image/png").replace("image/png", "image/octet-stream");
     link.click();
     alert("Foto capturada")
     }
});

function mensajes() {
    redactar.style.display = "block";
    document.getElementById("mensajes").style.display ="block";
    document.getElementById("camara").style.display = "none";
    cerrarBarra();
} 
function cerrarSesion() {
    
    localStorage.removeItem("nombre");
    localStorage.removeItem("correo");
    localStorage.setItem("login", 0);
//localstorage.clear();
    redactar.style.display = "none";
    document.getElementById("principal").style.display = "none";
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("camara").style.display = "none";
    document.getElementById("ingreso").style.display = "block";
}
    
    

function abrirBarra(){
    document.getElementById("barraMenu").style.width = "250px";
} //abrir Barra
        
function cerrarBarra() {
    document.getElementById("barraMenu").style.width ="0";

}
function leerM() {
let datosLM = new FormData();
datosLM.append("correoUsuario", correo);
fetch("http://programacionavanzadajh.orgfree.com/leerMensajes.php", {
    method: 'POST',
    body: datosLM
})
.then(function (response) {
    return response.json();
})
.then(function(data){
    for (let x = 0; x < data.length; x++){
        document.getElementById("mensajes").innerHTML =
        document.getElementById("mensajes").innerHTML + data[x].mensaje + "<br>" +
        data[x].fechahora + "<br>";
    }
});

}
function tomarFoto(){
    redactar.style.display = "none";
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("camara").style.display = "block";
    cerrarBarra();
}
function obtenerSO() {
    let so = null;
    let platform = window.navigator.platform,
        iosplatforms = [ 'iphone', 'ipad', 'ipod'];
    if (iosplatforms.includes(platform)) {
        so = 'iOS';
    }
    return so;
    
}
mapa.addEventListener('click', function() {
    window.open("http://www.openstreetmap.org/?mlat=" + coordenadas.lat + "&mlon=" + coordenadas.lon + "&zoom=20");
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../sw.js').then( () => {
            console.log('Service Worker Registered')
        });
    });
} //
