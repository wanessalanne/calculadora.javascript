console.log("Hello Capgemini!");

//Declaração das variáveis 
let NomeAnuncio = "";
let NomeCliente ="";
let ValorInvestido = 0;
let DataInicio = "";
let DataTermino = "";
const dadosCadastrados = [];
const inputNomeAnuncio = document.getElementById("NomeAnuncio");
const inputNomeCliente = document.getElementById("NomeCliente");
const inputValorInvestido = document.getElementById("ValorInvestido");
const inputDataInicio = document.getElementById("DataInicio");
const inputDataTermino = document.getElementById("DataTermino");
const btscalcularAlcance = document.getElementById("calcularAlcance");
btscalcularAlcance.addEventListener("click", calcularAlcance);
const btscadastrarAnuncio = document.getElementById("cadastrarAnuncio");
btscadastrarAnuncio.addEventListener("click", cadastrarAnuncio);
let quant_visualizacoes;
let num_compartilhamento;
let visualizacoes_compartilhamento;
let num_click;
const inputNomeClienteBusca = document.getElementById("nomeClienteBusca");
const btsBuscaFiltrada = document.getElementById("gerador_relatorios");
btsBuscaFiltrada.addEventListener("click", filtroBusca);
const divResultado = document.getElementById("resultadoBusca");
const divResultadoRelatorio = document.getElementById("resultadoRelatorio");
let inputradio 

//--------------------------------------------------------------------------------------------------------
//Função: cadastrarAnuncio 
/*Imprime o cadastro contendo os seguintes dados:
 - Nome do Anúncio;
 - Cliente
 - Data de Início
 - Data de Término
 - Investimento por dia*/
//--------------------------------------------------------------------------------------------------------

function cadastrarAnuncio(e){
    e.preventDefault(); 
    
    dadosCadastrados.push({
        "nome_anuncio":inputNomeAnuncio.value,
        "nome_cliente":inputNomeCliente.value,
        "valor_investido":inputValorInvestido.value,
        "data_inicio":inputDataInicio.value,
        "data_termino":inputDataTermino.value,
    })
    console.log(dadosCadastrados)
    alert("CADASTRO FEITO COM SUCESSO!")
}

//--------------------------------------------------------------------------------------------------------
//Função: calcularAlcance 
//Recebe o valor investido em reais e retorna uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio
/*Imprime os seguintes dados: 
 - Alcance máximo de visualizações
 - Alcance máximo de cliques
 - Alcance máximo de compartilhamentos*/
//--------------------------------------------------------------------------------------------------------

function calcularAlcance(investimento){
    
    quant_visualizacoes = investimento * 30;
    num_compartilhamento = 0;
    visualizacoes_compartilhamento = 0;
    num_click = 0;
    
    for (let index = 0; index < quant_visualizacoes; index+=50) {
        num_click+=6;        
    }
    for (let index = 20; index < num_click; index+=20) {
        num_compartilhamento+=3;
     
    }
    for (let index = 0; index < num_compartilhamento; index++) {
        visualizacoes_compartilhamento+=40;
        if (index===3){
            break
        }
    }
    return {
        quant_visualizacoes, num_compartilhamento, visualizacoes_compartilhamento, num_click
    }
}
 
//--------------------------------------------------------------------------------------------------------
//Função: filtroBusca
//Retorna o Array com o resultado do teste passado na função
//--------------------------------------------------------------------------------------------------------

let arrayFiltrada 
function filtroBusca(e){
    e.preventDefault();
    let conteudoHtml = "";
    let valorDigitado = inputNomeClienteBusca.value;
    arrayFiltrada = dadosCadastrados.filter(dado => {
        if (dado.nome_cliente.includes(valorDigitado)){
            return true;
        }
        
    });
    for (let index = 0; index < arrayFiltrada.length;index++) {
        conteudoHtml += `<label for="${arrayFiltrada[index].nome_anuncio}">${arrayFiltrada[index].nome_anuncio}</label>`
        conteudoHtml += `<input name="selectFiltrado" id="${arrayFiltrada[index].nome_anuncio}" type="radio" value="${index}"> `
    }
    if(arrayFiltrada.length > 0 ){
        conteudoHtml += `<button id="gerarRelatorio">Gerar Relatório</button>`
    }
    divResultado.innerHTML = conteudoHtml;
    const btsgerador = document.getElementById("gerarRelatorio");
    btsgerador.addEventListener("click", imprimirRelatorio);
}

//Função imprimirRelatorio
/*Imprime o relatório contendo todos os seguintes dados:
  - Quantidade máxima de visualizações
 - Quantidade máxima de cliques
 - Quantidade máxima de compartilhamentos
 - O valor total investido */

function imprimirRelatorio(e){
    e.preventDefault();
    inputradio = document.getElementsByName("selectFiltrado");
    let relatorio 
    for (let index = 0; index < inputradio.length; index++) {
        if(inputradio[index].checked){
            relatorio = arrayFiltrada[inputradio[index].value];
        break
        }
    }
    console.log(relatorio)
    let resultadoCalculo = calcularAlcance(Number(relatorio.valor_investido));
    let conteudoHtml = `<table>
        <tr>
            <th>Valor Total Investido:</th>
            <th>Quantidade máxima de visualizações:</th>
            <th>Quantidade máxima de cliques:</th>
            <th>Quantidade máxima de compartilhamentos:</th>
        </tr>
        <tr>
            <td>${relatorio.valor_investido}</td>
            <td>${resultadoCalculo.num_compartilhamento}</td>  
            <td>${resultadoCalculo.visualizacoes_compartilhamento}</td>  
            <td>${resultadoCalculo.num_click}</td>      
        </tr>
    </table>`
    divResultadoRelatorio.innerHTML = conteudoHtml;
}

//--------------------------------------------------------------------------------------------------------
//Função: limparCampos
/*Limpa todos os campos
 - Nome do Anúncio;
 - Cliente
 - Data de Início
 - Data de Término
 - Investimento por dia*/
//--------------------------------------------------------------------------------------------------------

function limparCampos(){
    inputNomeAnuncio.setAttribute("value","")
    inputNomeCliente.setAttribute("value","")
    inputValorInvestido.setAttribute("value","")
    inputDataInicio.setAttribute("value","")
    inputDataTermino.setAttribute("value","")
}