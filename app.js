document.getElementById("igual").addEventListener("click", function() {
    let operacion = document.querySelector('input[name="operador"]:checked');
    let numero1 = parseFloat(document.getElementById("primo-numero").value);
    let numero2 = parseFloat(document.getElementById("secondo-numero").value);
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese ambos números.");
        return;
    }

    if (!operacion) {
        alert("Por favor, seleccione una operación.");
        return;
    }

    switch (operacion.id) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            if (numero2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    document.getElementById("resultado").value = resultado;
});

function salir() {
    alert('¡que tengas un buen dia!');
    location.reload();
}
