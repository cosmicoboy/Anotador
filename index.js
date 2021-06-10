let guardanotas = []

let nuevanota = document.getElementById("nota_nueva")
let notanueva = document.getElementById("notas_guardadas")

const agregarNota = () => {
    // console.log(nuevanota.value);
    let nota = crearParrafo(nuevanota.value)
    guardanotas.push(nota.innerText) 
    // console.log(guardanotas); 
    localStorage.setItem("notasguardadas", JSON.stringify(guardanotas))
    nuevanota.value = ""
}

const crearParrafo = (nuevanota) => {
    let nota = document.createElement("p")
    nota.innerText = nuevanota
    notanueva.appendChild(nota)
    return nota
}

const cargarNotas = () => {
    let notasstore = localStorage.getItem("notasguardadas")
    if (notasstore) {

        JSON.parse(notasstore).forEach(element => {
            guardanotas.push(element)
            console.log(guardanotas);
            crearParrafo(element)
        });
    }
}


const borrarTodasNotas = () => {
    localStorage.setItem("notasguardadas", "")
    notanueva.querySelectorAll("p").forEach(p => p.remove())

}




cargarNotas()