const footer = document.getElementById("footer");
const botonfooter = document.getElementById("Boton3");
var presionado = 0;

function haceCuanto() {
    presionado++;    
    if(presionado>1){
        clearInterval(intervalo)
    }
    crearIntervalo();
}
function crearIntervalo(){
    var segundos=0;
    var intervalo = setInterval(()=>{
        segundos++;
        const spans = footer.querySelectorAll("span");
        if (spans.length > 0) {
            const ultimoSpan = spans[spans.length - 1];
           footer.removeChild(ultimoSpan);
        }
        const span = document.createElement("span");
        span.textContent = "PRESIONASTE EL BOTÓN HACE "+segundos+" SEGUNDOS";
        footer.appendChild(span);
    },1000)
}

botonfooter.addEventListener("click", haceCuanto);