function copiarCodigoPix() {
    var codigoPix = "00020126470014BR.GOV.BCB.PIX0125rafaelasirahata@gmail.com5204000053039865802BR5922RAFAELA SIMAO SIRAHATA6011TRES LAGOAS62070503***6304CC63";
    navigator.clipboard.writeText(codigoPix)
    .then(() => {
        var botao = document.getElementById("botaoCopiar");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "Copiar QR Code  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

function copiarChavePix() {
    var ChavePix = "rafaelasirahata@gmail.com";
    navigator.clipboard.writeText(ChavePix)
    .then(() => {
        var botao = document.getElementById("CopiarPix");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "rafaelasirahata@gmail.com  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
