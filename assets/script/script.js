function verificarPassword() {
    let posicion1 = document.getElementById("posicion1").value;
    let posicion2 = document.getElementById("posicion2").value;
    let posicion3 = document.getElementById("posicion3").value;
    let password = posicion1 + posicion2 + posicion3;
    if (password === "911") {
        document.getElementById("resultado").textContent = "Password 1 correcto";
    } else if (password === "714") {
        document.getElementById("resultado").textContent = "Password 2 correcto";
    } else {
        document.getElementById("resultado").textContent = "Password incorrecto";
    }
}
