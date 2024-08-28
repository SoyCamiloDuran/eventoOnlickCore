let cambiarBoton = document.getElementById("cambiarBoton");
let desaparecerBoton = document.getElementById("desaparecerBoton");
let meGusta1 = document.getElementById("meGusta-1")
let meGusta2 = document.getElementById("meGusta-2")

cambiarBoton.addEventListener("click", function(){
    this.innerText = "Cerrar sesión";
});

desaparecerBoton.addEventListener("click", function(){
    this.remove();
});

meGusta1.addEventListener("click", function(){
    alert("Gato Atigrado was liked");
    let count1 = document.getElementById("count-1");
    count1.textContent = parseInt(count1.textContent) + 1;
})

meGusta2.addEventListener("click", function(){
    alert("Golden Retriever was liked");
    let count2 = document.getElementById("count-2");
    count2.textContent = parseInt(count2.textContent) + 1;
})