window.addEventListener("load",function(){
    //Codigo que se ejecuta depues de cargar la pagina
  
        formulario=this.document.getElementById("formulario");

        formulario.addEventListener("submit",function(e){
            event.preventDefault();
            let nombre = document.getElementById("nombre").value;
            let pass = document.getElementById("pwd").value;
            //alert("nombre es: " + nombre + " contaseña: " + pass);
            let respuesta = document.getElementById("result");
            if(nombre = "G7S21" && pass=="si se puede"){
                respuesta.innerText="Se acepto e ingreso al sistema...";
                respuesta.style.color="green";
                respuesta.style.fontSize="2em";
                respuesta.style.width="500px";
                respuesta.style.height="150px";
                respuesta.style.backgroundColor="cyan";
            }else{
                respuesta.innerText="Checa los datos...";
                respuesta.style.color="red";
                respuesta.style.fontSize="2em";
                respuesta.style.width="500px";
                respuesta.style.height="150px";
                respuesta.style.backgroundColor="cyan";
            }
    });
});