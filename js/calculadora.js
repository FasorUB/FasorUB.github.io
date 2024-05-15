async function calcular_probabilidad() {
  
    // Obtener los valores de las entradas de texto
    let mi_mano = document.getElementById("mano").value.trim();
    let cartas_en_mesa = document.getElementById("comunitarias").value.trim();
    let probabilidad = Math.random() * 25;
    let error_palo_mano = false;
    let error_palo_mesa = false;
    let error_numero_mano = false;
    let error_numero_mesa = false;
    

    cartas_en_mesa = cartas_en_mesa.split(" ");
    mi_mano = mi_mano.split(" ");
    

    for (let i = 0; i < mi_mano.length; i++) {
      if (mi_mano[i][1] !== "s" && mi_mano[i][1] !== "h" && mi_mano[i][1] !== "c" && mi_mano[i][1] !== "d") {
        error_palo_mano = true;
      }
    }

    for (let i = 0; i < cartas_en_mesa.length; i++) {
      if (cartas_en_mesa[i][1] !== "s" && cartas_en_mesa[i][1] !== "h" && cartas_en_mesa[i][1] !== "c" && cartas_en_mesa[i][1] !== "d") {
        error_palo_mesa = true;
      }
    }

    const numeros_validos = ["A", "K", "Q", "J", "T", "9", "8", "7", "5", "4", "3", "2"];

    for (let i = 0; i < mi_mano.length; i++) {
      if (!numeros_validos.includes(mi_mano[i][0])) {
        error_numero_mano = true;
      }
    }

    for (let i = 0; i < cartas_en_mesa.length; i++) {
      if (!numeros_validos.includes(cartas_en_mesa[i][0])) {
        error_numero_mesa = true;
      }
    }
    if(!error_numero_mano && !error_numero_mesa && !error_palo_mano && !error_palo_mesa){
      let numero_carta1 = mi_mano[0][0];
      let numero_carta2 = mi_mano[1][0];
      let palo_carta1 = mi_mano[0][1];
      let palo_carta2 = mi_mano[1][1];
      for(let i = 0; i < cartas_en_mesa.length; i++){
        let contador_palo = 0; 
        if(numero_carta1 == cartas_en_mesa[0][i]){
          probabilidad += 15;
        }
        if(numero_carta2 == cartas_en_mesa[0][i]){
          probabilidad += 15;
        }
        if(numero_carta1 == "A" || numero_carta2 == "A"){
          probabilidad += 15;
        }
        if(palo_carta1 == cartas_en_mesa[i][1]){
          contador_palo += 1
        }
        if(palo_carta2 == cartas_en_mesa[i][1]){
          contador_palo += 1
        }
        if(palo_carta1 = palo_carta2){
          contador_palo += 1;
        }
        if(contador_palo > 4){
          probabilidad += 20;
        }

        
      }
    }
    if(error_palo_mano){
      await Swal.fire({
        title: "Error",
        text: "El/Los palo en la mano propia es incorrecto",
        icon: "error",
      });

    }
    else if(error_numero_mano){
      await Swal.fire({
        title: "Error",
        text: "El/Los numero en la mano propia es incorrecto",
        icon: "error",
      });
    }
    else if(error_palo_mesa){
      await Swal.fire({
        title: "Error",
        text: "El/Los palo en las cartas comunitarias es incorrecto",
        icon: "error",
      });
    }
    else if(error_numero_mesa){
      await Swal.fire({
        title: "Error",
        text: "El/Los numero en las cartas comunitarias es incorrecto",
        icon: "error",
      });
    }
    
    else if (mi_mano.length !== 2) {
      await Swal.fire({
        title: "Error",
        text: "Solo se permiten 2 cartas de mano propia",
        icon: "error",
      });
    } else if (cartas_en_mesa.length < 3) {
      await Swal.fire({
        title: "Error",
        text: "El numero de cartas comunitarias es inferior a 3",
        icon: "error",
      });
    
    } else {
      await Swal.fire({
        title: "Calculemos",
        text: `Probabilidad: ${probabilidad.toFixed(2)} %`,
        icon: "success",
      });
    }
  
}
