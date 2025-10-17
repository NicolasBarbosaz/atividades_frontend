function verificarRefeicao() {
    const inputComida = document.getElementById('comida');
    const comidaDigitada = inputComida.value.toLowerCase().trim();
    const paragrafoMensagem = document.getElementById('mensagem');

    let resultado = "";

    if (comidaDigitada === "pão com ovo") {
        resultado = "Café da manhã";
    } else if (comidaDigitada === "arroz e feijão") {
        resultado = "Almoço";
    } else {
        resultado = "Jantar";
    }

    paragrafoMensagem.innerHTML = resultado;
 }
 function botaoFor(){

    let paragrafoText = document.getElementById("paragrafo")

    for (let i= 0; i<5; i++){
       paragrafoText.innerHTML = paragrafoText.innerHTML + "<br> " + i ;
       console.log(i)


 }
 



     let lista = ["arroz", "salada", "picanha"]

     for (let index = 0; index < lista.length; index++){

        const element = lista[index];
        paragrafoText.innerHTML = paragrafoText.innerHTML + "<br>" + element;

     }
 }