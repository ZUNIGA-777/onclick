/* Crear un formulario HTML con campos para ingresar nombre y correo electrónico.
Agregar un botón al formulario con un evento onclick que llame a una función para procesar los datos.
Obtener los valores ingresados en los campos de nombre y correo electrónico.
Validar que el campo de nombre no esté vacío y que el campo de correo electrónico tenga un formato válido (utilizando una expresión regular).
Mostrar un mensaje de alerta indicando si los datos son válidos o no. */

function procesarDatos(){
    const nombre = document.querySelector("#nombre")
    const correo = document.querySelector("#correo")

    nombre.value
    correo.value

    if(nombre.value === ""){
        alert ("ingresa un nombre")
        return
    }  if (/^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.(com|es|org)$/.test(correo.value)){
        alert("Registro completado");
       } else {
        alert("Ingresa un correo valido");
       }
}