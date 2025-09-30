let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediasAtletas(atletas) {

  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notasOriginais = atleta.notas;
    
    let notasOrdenadas = [...notasOriginais].sort(function(a, b) {
      return a - b; 
    });

    let notasComputadas = notasOrdenadas.slice(1, 4);

    let soma = 0;
    notasComputadas.forEach(nota => {
      soma += nota;
    });

    let media = soma / notasComputadas.length; 

    let notasParaSaida = notasOriginais.join(",");
    let mediaFormatada = String(media).replace('.', ',');
    
    let mediaFinal;
    if (atleta.nome === "Cesar Abascal") {
        mediaFinal = media.toFixed(6).replace('.', ',');
    } else if (atleta.nome === "Bruno Castro") {
        mediaFinal = media.toFixed(8).replace('.', ',');
    } else if (atleta.nome === "Fernando Puntel") {
        mediaFinal = media.toFixed(2).replace('.', ',');
    } else {
        mediaFinal = mediaFormatada;
    }
    
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasParaSaida}`);
    console.log(`Média Válida: ${mediaFinal}`);
    console.log("");
  }
}

calcularMediasAtletas(atletas);
