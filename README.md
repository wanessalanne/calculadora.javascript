# calculadora.javascript
Desafio de Programação - Academia Capgemini

<h1>O problema</h1>
A agência Divulga Tudo precisa de um programa para gerenciar os seus anúncios online. O objetivo dos anúncios faz parte de uma campanha nas redes sociais. O sistema de gerenciamento permitirá a gestão do anúncio e o rastreio dos resultados da campanha.

Este programa será composto de duas partes: 

1ª Parte – Uma calculadora de alcance de anúncio online.

2ª Parte - Um sistema de cadastro de anúncios.

<h1>Parte 01:</h1>
Baseados em dados de análise de anúncios anteriores, a agência tem os seguintes dados:

a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
cada compartilhamento nas redes sociais gera 40 novas visualizações.
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
o mesmo anúncio é compartilhado no máximo 4 vezes em sequência (1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa).

Crie um script em sua linguagem de programação preferida que receba o valor investido em reais e retorne uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos)

A partir dessas instruções foi criado um script na linguagem javaScript calculadora.js.

Número de pessoas que visualizarão o anúncio original (não compartilhado)
Número máximo de pessoas que visualizarão o anúncio (compartilhado)
Número máximo de pessoas que clicarão no anúncio
Número máximo de pessoas que compartilharão o anúncio nas redes sociais
Número máximo de pessoas que visualizarão o anúncio (original+compartilhado)

<h1>Parte 02:</h1>

Instruções:
1. Foi construído a parte visual da página utilizando a linguagem HTML5 e CSS3. 
2. Na página existe um formulário que irá receber os seguintes dados:

nome do anúncio
cliente
data de início
data de término
investimento por dia

Após preencher os campos dos formulários clique no botão cadastrar anúnncio, calcular alcance ou Limpar. 
No console ficará registrado as informações na qual a pessoa optou.

3. Para imprimir o relatório, basta cadastrar primeiramente o anúncio, em seguida preencher com o nome do cliente ou colocar a informação das datas.
4. Aparecerá o nome do anúncio cujo nome a pessoa cadastrou e para gerar relatório basta clicar no botão "gerar relatório", aparecerá s seguintes dados:

Valor Total Investido
Quantidade máxima de visualizações
Quantidade máxima de cliques
Quantidade máxima de compartilhamentos

