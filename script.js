// FETCH DE DATOS A LA API DE COMENTARIOS
let container = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => {
        const recentComments = comments.slice(-10); // Obtenemos los 10 comentarios más recientes 
        recentComments.forEach(element => {
            container.innerHTML += `<h3>${element.name}</h3>` +
            element.body + "<br><br>"
            estrellas = Math.floor(Math.random() * 5) + 1;
            showPaintedStars(estrellas)
            showBlankStars()
        })})
    .catch (error => {
        console.log('Error:', error)
    })
// DATOS JSON: postId, id, name, email, body



let estrellas;
// TRANSFORMAR LA PUNTUACIÓN A ESTRELLAS
// let estrellas = Math.floor(Math.random() * 5) + 1;

function showBlankStars() {
    for (let i = 0; i < (5 - estrellas); i++) {
        container.innerHTML += "<span class='fa fa-star'></span>";
    }
}

function showPaintedStars(paintedStars) {
    for (let i = 0; i < paintedStars; i++) {
        container.innerHTML += "<span class='fa fa-star checked'></span>";
    }
}
// showPaintedStars(estrellas)
// showBlankStars()


// COMIENZO DEL DOM

document.addEventListener("DOMContentLoaded", function() {


let container = document.getElementById("container");
    


const addComment = document.getElementById("btn")

addComment.addEventListener("click", e => {
    e.preventDefault()
    const NAME = document.getElementById("name").value;
    const COMENTARIO = document.getElementById("comment").value;
    const RATING = document.getElementById("rating")
    let selected = parseInt(RATING.value);
    container.innerHTML += `<h3>${NAME}</h3>`  + 
    COMENTARIO + `<br><br>` +
    showPaintedStars(selected)
    showBlankStars()
    //yo voy a intentar un poco mas y sino pusheo
    document.getElementById("comment").value = "";
    document.getElementById("name").value = "";
    
})




})
// FUNCIONALIDAD PARA ENVIAR UN COMENTARIO




// GENERAR UNA PUNTUACIÓN CON LA FUNCION MATH.RANDOM

