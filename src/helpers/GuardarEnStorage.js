export const GuardarEnStorage = (clave, elemento) => {
    
    let elementos = JSON.parse(localStorage.getItem(clave));

        if(Array.isArray(elementos)){
            elementos.push(elemento);
        }else{
            elementos = [elemento];
        }

        localStorage.setItem("pelis", JSON.stringify(elementos))

        return elemento;
}
