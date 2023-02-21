/** 
document.getElementById("boton").onclick = function (){
    document.getElementById("texto_boton").innerHTML = "Foto de perfil"
    document.getElementById("perfil").innerHTML = '<img src="/Proyecto CV/img/Foto de perfil.JPG">'

    document.getElementById("boton").onclick = function (){
        document.getElementById("texto_boton").innerHTML = "Clic ver foto de perfil"
        document.getElementById("perfil").innerHTML = ''        
    }    
}

    let texto_boton = "Clic ver foto de perfil"
    imagen = ''

    let texto_boton = "Foto de perfil"
    imagen = '<img src="/Proyecto CV/img/Foto de perfil.JPG">'

*/

let contador = 0
let texto_boton = "Clic ver foto de perfil"
let imagen = ''

document.addEventListener("click", function (){  
    contador++
    if (contador % 2==0){
        texto_boton = "Clic ver foto de perfil" 
        imagen = ''       
    }
    else{
        texto_boton = "Foto de perfil" 
        imagen = '<img src="/Proyecto CV/img/Foto de perfil.JPG">'
    }
    document.getElementById("texto_boton").innerHTML = texto_boton
    document.getElementById("perfil").innerHTML = imagen
    console.log(contador)

})

document.getElementById("enviar").addEventListener ("click",function(){
    alert ("Correo enviado")
})

