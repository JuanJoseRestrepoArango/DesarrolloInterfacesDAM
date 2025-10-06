(function(){
    let principal = document.getElementById("principal");
    let opciones = document.getElementById("opciones");
    

    function crearTablero(){
        for (let i = 1; i < 10; i++) {
            let fila = document.createElement("div");
            for (let j = 1; j < 10; j++) {
                let columna = document.createElement("div");
                columna.className = "casilla";
                columna.id = "casilla" + (i) + (j);
                if(j % 3 === 0 && j !== 9){
                    columna.classList.add("limite_casilla");
                }
                let p = document.createElement("p");
                columna.appendChild(p);
                fila.appendChild(columna);
            }
            
            fila.className = "fila";
            if(i === 1){
                fila.classList.add("limite_fila_top");
            }else if(i % 3 === 0){
                fila.classList.add("limite_fila_bottom");
            }
            
            principal.appendChild(fila);
        }
    }
    function crearOpciones(){
        for (let i = 1; i < 10; i++) {
            let opcion = document.createElement("button");
            opcion.className = "opcion";
            opcion.id = "opcion" + (i);
            opcion.textContent = i;
            opciones.appendChild(opcion);
        }
    }

    function crearRellenarTablero(){
        let terminado = false;
        let cont = 0;
        let cuadro = 0;
        while(terminado === false){
            

            for (let i = 1; i < 10; i++) {
                for (let j = 1; j < 10; j++) {
                    let valor = Math.floor(Math.random() * 9) + 1;
                    if(j>3 && j<7){
                        cuadro = 3;
                    }else if(j>6){
                        cuadro = 6;
                    }else{
                        cuadro = 0;
                    }
                    if(RevisarfilaColumna(i,j,valor) && RevisarCuadro(i,cuadro,valor)){
                        let casilla = document.querySelector(`#casilla${i}${j}`);
                        casilla.querySelector("p").textContent = valor;
                    }
                    
                }
            }
            for (let i = 1; i < 10; i++) {
                for (let j = 1; j < 10; j++) {
                    let casilla = document.querySelector(`#casilla${i}${j}`);
                    if(casilla.querySelector("p").textContent !== ""){
                        cont++;
                    }
                }
            }
            if(cont === 81){
                terminado = true;
            }
        }
    }
    function RevisarfilaColumna(f,c,valor){
        let filas = [];
        let columnas = [];
        for (let i = 1; i < 10; i++) {
            let fila = document.querySelector(`#casilla${f}${i}`);
            let columna = document.querySelector(`#casilla${i}${c}`);
            filas.push(Number(fila.querySelector("p").textContent));
            columnas.push(Number(columna.querySelector("p").textContent));
        }
        // console.log(filas);
        // console.log(columnas);
        if(filas.includes(valor) || columnas.includes(valor)){
            return false;
        }
        return true;
        
    }
    function RevisarCuadro(f,c,valor){
        let cuadro = [];
        let lim1 = 1;
        let lim2 = 0;
        if(f > 3 && f < 7){
            lim1 = 4;
            lim2 = 7;
        }else if(f > 6){
            lim1 = 7;
            lim2 = 10;
        }else{
            lim1 = 1;
            lim2 = 4;
        }
        for (let i = lim1; i < lim2 ; i++) {
            for (let j = 1; j < 4; j++) {
                let casilla = document.querySelector(`#casilla${i}${j+c}`);
                cuadro.push(Number(casilla.querySelector("p").textContent));
            }
        }
        //console.log(cuadro);
        if(cuadro.includes(valor)){
            return false;
        }
        return true;
    }
    crearTablero();
    crearOpciones();
    crearRellenarTablero()
})();