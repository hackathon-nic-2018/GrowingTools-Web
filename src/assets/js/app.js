const buttonSend = document.getElementById('form');

console.log(buttonSend)
if(buttonSend) {
    buttonSend.addEventListener('submit', (e) => {
        e.preventDefault();
        const costosAnuales = document.getElementById('costosAnuales').value;
        const precioVenta = document.getElementById('precioVenta').value;
        const costosVariables = document.getElementById('costosVariables').value;

        const puntoEquilibrio = parseInt(costosAnuales) / (parseInt(precioVenta) - parseInt(costosVariables));

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

const apiFetch = async () => {
    const response = await fetch('/api/Inventario');
    const data = await response.json();
    
    let body = document.getElementById('body')

    if(body) {
        data.forEach(element => {
            body.innerHTML +=` 
             <tr> 
                 <td>${element.Empresa}</td> 
                 <td>${element.Nombre}</td>
                 <td>${element.Cantidad}</td>
                 <td>${element.NombreProveedor}</td>
                 <td>${element.Categoria}</td>
             </tr>
             `
         }); 
    }
   
}
apiFetch()