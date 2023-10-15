export function eventosButtons(){
    const containerDuvida = document.querySelectorAll('.duvida');

    containerDuvida.forEach(function(duvida){
        duvida.addEventListener('click', function(){
            duvida.classList.toggle('ativa'); // o toggle é um "Liga e Desliga", se não tiver a classe: ele adiciona, se tiver: ele remove
        })
    })
}