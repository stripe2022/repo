async function cargarModulo(contenedor, ruta) {

const respuesta = await fetch(ruta)

const html = await respuesta.text()

document.getElementById(contenedor).innerHTML = html

}

async function iniciarApp(){

await cargarModulo(
"contenedor-ventas",
"modulos/modulo-ventas.html"
)

await cargarModulo(
"contenedor-cobros",
"modulos/modulo-cobros.html"
)

await cargarModulo(
"contenedor-gastos",
"modulos/modulo-gastos.html"
)

await cargarModulo(
"contenedor-salarios",
"modulos/modulo-salarios.html"
)

await cargarModulo(
"contenedor-divisas",
"modulos/modulo-divisas.html"
)

await cargarModulo(
"contenedor-reporte-final",
"modulos/modulo-reporte-final.html"
)

}

iniciarApp()

function siguiente(idDestino,paso){

document.querySelectorAll(".pantalla").forEach(p=>{
p.classList.add("hidden")
})

document.getElementById(idDestino).classList.remove("hidden")

actualizarProgreso(paso)

window.scrollTo({
top:0,
behavior:"smooth"
})

}

function actualizarProgreso(paso){

const total = 6

const porcentaje = (paso/total)*100

document.getElementById("barraProgreso").style.width =
porcentaje + "%"

document.getElementById("textoPaso").innerText =
"Paso " + paso + " de " + total

}