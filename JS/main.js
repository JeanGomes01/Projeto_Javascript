alert(' Olá !! você está prestes a calcular sua média no ENEM !!!');

const nome = prompt('Qual é o sua nome ? ');
alert(' Seja muito bem vindo@ :  ' + nome);

alert(' Digite as notas que você tirou para cada matéria da prova com no máximo "1000"  Ex. C.Humanas "700"  ');

const linguagens = +prompt('Qual foi a sua nota em Linguagens  ' + nome + '?');
const cHumanas = +prompt('Qual foi a sua nota em Ciências humanas ' + nome + '?');
const cNaturezas = +prompt('Qual foi a sua nota em Ciências da natureza  '+ nome + '?');
const exatas = +prompt('Qual foi a sua nota em Exatas '+ nome + '?');
const redacao = +prompt('Qual foi a sua nota na Redação ' + nome + '?');
const media = (linguagens + cHumanas + cNaturezas + exatas + redacao) /5;

alert ('Uhuul '  +  nome +  ' a sua média foi ' + media + ' agora vamos saber se você está Aprovado ou não. ');

if (media >= 600){
    alert('Parabéns ' + nome + ' você passou no ENEM e poderá entrar na faculdade !! ');
}else {
    alert('Sinto muito ' + nome + ' infelizmente você não passou no ENEM esse ano, tente novamente no ano que vem !');
};


console.log(nome,linguagens,cHumanas,cNaturezas,exatas,redacao,media);




