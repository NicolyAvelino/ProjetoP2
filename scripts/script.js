const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}
function calculaJuros() {
    // Formula usada => M = C (1+i) ^ t

    //Captura dos valores dos inputs e declaração de variáveis
    var nome = $('#nome').val();
    var mensal = $('#mensalidade').val();
    var taxaJuros = $('#taxa').val();
    var tempoAplicacao = $('#tempo').val();

    // Dividindo  taxa de juros por 100
    var taxaJuros = taxaJuros / 100;

    // Formula
    var M = mensal * Math.pow((1 + taxaJuros), tempoAplicacao);

    // Tranformando em string
    var total = M.toFixed(2);

    // Exibir na tela 
    $("#result-nome").html(nome);
    $("#result-valor").html(mensal);
    $("#result-total").html(total);
    $("#result-tempo").html(tempoAplicacao);
}