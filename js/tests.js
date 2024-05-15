let INDEX_PREGUNTA = 0;
let puntuación = 0;



actualizar_contador();
cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index){
    objetoPregunta = base_test[index];

    opciones = [...objetoPregunta.distractores];
    
    opciones.push(objetoPregunta.respuesta);
    for(let i = 0; i < 4; i++){
        opciones.sort(()=>Math.random() - 0.5);

    }
    
    document.getElementById("pregunta-test").innerHTML = objetoPregunta.pregunta;
    if(objetoPregunta.imagen){
        document.getElementById("imagen").src = objetoPregunta.imagen;
        document.getElementById("imagen").style.display = "";
        

    }
    else{
        document.getElementById("imagen").style.display = "none";
    }
    if(objetoPregunta.pista){
        document.getElementById("pista_btn").style.display = "";

    }
    else{
        document.getElementById("pista_btn").style.display = "none";
        
    }
    
    document.getElementById("opcion-1").innerHTML = opciones[0];
    document.getElementById("opcion-2").innerHTML = opciones[1];
    document.getElementById("opcion-3").innerHTML = opciones[2];
    document.getElementById("opcion-4").innerHTML = opciones[3];


}
async function seleccionarOpcion(index){
    let validez = (opciones[index] == objetoPregunta.respuesta);
    if(validez){
        await Swal.fire({
            title:"Respuesta Correcta",
            text: "La respuesta es correcta, sigue así !!",
            icon: "success",
        });
        puntuación++;
    }
    else{
        await Swal.fire({
            title: "Respuesta Incorrecta",
            text: `La respuesta correcta es: ${objetoPregunta.respuesta}`,
            icon: "error",
        });
    }
    INDEX_PREGUNTA++;
    actualizar_contador();
    if (INDEX_PREGUNTA>= base_test.length){
        INDEX_PREGUNTA = 0;
        await Swal.fire({
            title:"Juego terminado",
            text: `Tu puntuación en el test fue de: ${puntuación}/${base_test.length}`,
            
        });
        window.location.href = "../index.html";
        INDEX_PREGUNTA = 0;
        puntuación = 0;
    }
    cargarPregunta(INDEX_PREGUNTA);

}

function pista(){
    Swal.fire({
        title: "Pista",
        text: objetoPregunta.pista,
        imageUrl: objetoPregunta.pista_img,
        imageHeight: 400,
        
      });
}
function actualizar_contador(){
    if(INDEX_PREGUNTA < base_test.length){
        document.getElementById("contador-test").innerHTML = (INDEX_PREGUNTA + 1) + '/' + base_test.length;

    }
    
}
