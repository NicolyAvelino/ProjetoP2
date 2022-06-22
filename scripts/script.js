const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}


function calcular_simulacao() {
    // Declaração de variáveis
    var nome, mensalidade, tempo, resultado;
    // Entrada de dados
    nome = $("#nome").val()
    mensalidade = $("#mensalidade").val()
    tempo = $("#tempo").val()
    //taxa de juros
    var taxaJuros = 0.05; //Taxa de 5%
    // Processamento de Dados
    var total = mensalidade * Math.pow((1 + taxaJuros), tempo);
    // var total = (mensalidade * (1+taxaJuros) * ((Math.pow(1+taxaJuros,tempo)-1)/taxaJuros)).toFixed(2);
    var resultado = total.toString(); //Converte o total para string
    // Saída de Dados
    $(".result-nome").html(nome);
    $(".result-mensalidade").html(mensalidade);
    $(".result-resultado").html(resultado);
    $(".result-tempo").html(tempo);
}


// '''
// A fórmula para calcular o valor final de juros compostos (compound interest) é mostrada na Wikipedia como
// A = P(1 + r/n)^nt
// Onde: 
// A = Valor Futuro
// P = Valor Presente
// r = taxa de juros anual nominal
// n = número de vezes que o juro é capitalizado por ano
// t = número de anos
// Escreva um programa em Python que atribui o valor 10000 para a variáveç P `, atribui para `n`o valor 12 e atribui para `r a taxa de juros de 8% (0.08). O programa deve pedir ao usuário o número t de anos. Calcule e imprima o valor final depois de t anos.
// '''
// import math

// print("O programa calcula os juros compostos.", "\n")

// # p = 10000
// # n = 12
// # r = 8 / 100

// p_usuario = input("Valor presente: ")
// r_usuario = input("Taxa de juros anual nominal: ")
// n_usuario = input("Quantidade de vezes que o juros é capitalizado por ano: ")
// t_usuario = input("Número de anos: ")

// if (p_usuario.isdigit() and r_usuario.isdigit() 
//     and n_usuario.isdigit() and t_usuario.isdigit()):

//     p = float(p_usuario)
//     r = float(r_usuario) / 100
//     n = float(n_usuario)
//     t = float(t_usuario)

//     a = p * (1 + r / n) ** (t * n)

//     print()

//     mensagem =  "Total investido: %.2f      \n"
//     mensagem += "Total de juros: %.3f       \n"
//     mensagem += "Composição do ano: %.1f    \n"
//     mensagem += "Total de anos: %d          \n"
//     mensagem += "Total ganho em juros: %.2f \n"
//     print(mensagem % (p, r, n, t, a))

// else:
//     print("Um ou mais valores informados são inválidos.")