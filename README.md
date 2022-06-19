![](https://portal.alphaedtech.org.br/images/edtech/logo-edtech.webp)

# Back-End

## Módulo 7 - JavaScript - Part 8

### Exercícios de classe 🏫

#### Questão 1
Crie uma página web que peça ao usuário que preencha 5 dados de usuário (‘Nome’, ’Data de Nascimento’, ’Peso’, ’Altura’ e ‘Gênero’) por meio de um formulário, sendo armazenado em um objeto JavaScript ‘user’ após clique de um botão, de forma que: 
* O campo do ‘Nome’ é do tipo string e será armazenado no formato string;
* A ‘Data de Nascimento’ deve ser inserida pelo usuário através de 3 campos (‘dia’, ‘mês’ e ‘ano’) de forma que a seleção de não pode ser de data inexistente ou superior à data atual, sendo armazenada no formato Date;
* O ‘Peso’ e ‘Altura’ embora seja inserido no formato string deve ser armazenado no formato numérico, de forma que o peso (kg) é numérico de ponto flutuante e a altura (cm) em um numérico inteiro;
* O ‘Gênero’ deve ser capturado por meio de um campo do tipo select e armazenado em formato string;
* O objeto Javascript deve conter os seguintes atributos:
  - name: que armazenará o nome do usuário (formato string);
  - birthDate: que armazenará a data de nascimento (formato Date);
  - weight: que armazenará o peso em quilogramas (formato numérico float);
  - height: que armazenará a altura em centímetros (formato numérico int);
  - gender: que armazenará o gênero (formato string).

#### Questão 2
Estenda o exercício anterior agora ‘capturando’ e ‘emitindo’ erros (‘throw’), de forma que: 
* Emitir erro de ‘Field “name” is invalid!’ se o nome estiver sem valor preenchido ou tenha tamanho inferior a 5 caracteres;
* Emitir erro ‘Field “birthDate” is invalid!’ se a data de nascimento for superior a data atual ou se a data for impossível (inválida);
* Emitir erro ‘Field “weight” is invalid!’, se não for do tipo numérico;
* Emitir erro ‘Field “height” is invalid!’, se não for do tipo numérico e não for inteiro; 
* Emitir erro ‘Field “gender” is invalid!’, caso não seja um dos gêneros possíveis determinados por você no formulário.

#### Questão 3
Estenda o exercício 1 e exiba o resultado após o clique no botão:
* Se houver erro, mostre o erro ‘capturado’ no formulário;
* EmitirSe não houver erro:
  - mostre os dados com um label e valor a cada linha;
  - mostre o resultado do objeto em formato string (JSON.stringify);
  - mostre no console o objeto resultante.

#### Questão 4
Crie uma página web que possua um formulário com 2 campos, um do tipo textarea e um botão, de forma que: 
* A área de texto deve permitir ao usuário inserir um texto que posteriormente será convertido em um objeto;
* Ao clicar no botão deverá:
  - Exibir um erro caso não seja possível converter o texto em um objeto JavaScript (JSON.parse), capturando o erro por meio da estrutura ‘try...catch’;
  - Caso seja possível a conversão:
    - Exibir uma mensagem ‘Parsable JSON string!’;
    - Mostrar no console o objeto.


#### Questão 5
Crie um objeto sem atributos ‘{}’ e adicione um atributo “Um atributo com espaços” com valor numérico 1, e exiba no console, de duas formas: 
* Utilizando colchetes;
* Sem utilizar colchetes.

###### tags: `módulo 7` `back-end` `JavaScript`
