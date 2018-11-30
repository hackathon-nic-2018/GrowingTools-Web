const buttonSend = document.getElementById('form');

console.log(buttonSend)
if(buttonSend) {
    buttonSend.addEventListener('submit', (e) => {
        e.preventDefault();
        const costosAnuales = document.getElementById('costosAnuales').value;
        const precioVenta = document.getElementById('precioVenta').value;
        const costosVariables = document.getElementById('costosVariables').value;

        const puntoEquilibrio = costosAnuales / (precioVenta - costosVariables);
        const value = document.querySelector('.value');

        value.textContent = puntoEquilibrio;

        const calcular = document.getElementById('calcular');
        // console.log(calcular)
        const modal = document.querySelector('.modal-overlay');
        // console.log(modal)
        calcular.addEventListener('click', () => {
            modal.classList.toggle('active');
        })

    });
}