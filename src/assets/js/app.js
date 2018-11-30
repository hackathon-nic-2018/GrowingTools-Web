const apiFetch = async () => {
    const response = await fetch('/api/Inventario');
    const data = await response.json();
    
    let body = document.getElementById('body')

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
apiFetch()