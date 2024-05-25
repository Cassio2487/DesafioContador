function iniciarContador() {
    let contador = 1;
    let intervalo = setInterval(() => {
        if (contador <= 10) {
            document.getElementById('contador').innerText = contador;
            console.log(contador);
            contador++;
        } else {
            clearInterval(intervalo);
        }
    }, 1000); // Atualiza o contador a cada 1 segundo (1000 milissegundos)
}
