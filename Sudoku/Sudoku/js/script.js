(function(){
    let principal = document.getElementById("principal");
    let opciones = document.getElementById("opciones");
    for (let i = 1; i < 10; i++) {
        let fila = document.createElement("div");
        for (let j = 1; j < 10; j++) {
            let columna = document.createElement("div");
            columna.className = "casilla";
            columna.id = "casilla" + (i + 1);
            if(j % 3 === 0 && j !== 9){
                columna.classList.add("limite_casilla");
            }
            fila.appendChild(columna);
        }
        fila.className = "fila";
        if(i === 1){
            fila.classList.add("limite_fila_top");
        }else if(i % 3 === 0){
            fila.classList.add("limite_fila_bottom");
        }
        let opcion = document.createElement("P");
        opcion.className = "opcion";
        opcion.id = "opcion" + (i + 1);
        opcion.textContent = i;
        opciones.appendChild(opcion);
        principal.appendChild(fila);
    }
})();