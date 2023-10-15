function valor(x){
    document.getElementById('display').value += x;
    console.log("usted ha presionado el boton")
}

function borrarInput(y){

    document.getElementById('display').value = y;
    console.log("click en borrar");
    
}

function getresult(){

    var result= eval(document.getElementById('display').value);
    // var result= document.getElementById('display').value;
    console.log("algo pasa ", result);
    document.getElementById('display').value = result;

}