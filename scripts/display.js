export function verificDisplay(){
    const containerCab = document.getElementById('cabecalho');
    const containerInicio = document.getElementById('inicio');
    const containerClinica = document.getElementById('clinica');
    const containerFarmacia = document.getElementById('farmacia');
    const containerDuvidas = document.getElementById('duvidas');
    const containerButton = document.getElementById('container-buttons');
    
    const botao = document.getElementById('botao');
    const anchors = document.querySelectorAll('.anchor');
    const logo = document.getElementById('logo');
    const titulos = document.getElementsByClassName('titulo');

    const rodape = document.getElementById('rodape');
    
    const largura = document.documentElement.clientWidth;
    const images = document.querySelectorAll('.representa');
    const shape = document.getElementById('shape');

    if(largura <= 1195){
        // DEFININDO DISPLAY'S
        containerInicio.style.display = 'block';
        containerClinica.style.display = 'block';
        containerDuvidas.style.display = 'block';

        // DEFININDO PADDING'S
        containerCab.style.padding = '20px 5px 20px 25px'
        containerInicio.style.padding = '24px 25px 128px 25px';
        containerClinica.style.padding = '64px 25px';
        containerFarmacia.style.padding = '64px 25px';
        containerDuvidas.style.padding = '64px 25px';
        rodape.style.padding = '64px 25px';
        rodape.style.gap = '10px';
        containerCab.style.gap = '5px';
        
        shape.style.opacity = 0;
        // BOTÕES
        containerButton.style.display = 'block';
        botao.style.marginBottom = '70px'

        logo.style.height = '14px' // 16
        

        const width = 250;
        const height = 250;
        
        // Percorra todas as imagens e defina a largura e a altura
        images.forEach(image => {
          image.width = width;
          image.height = height;
        });

        anchors.forEach(anchor => {
            anchor.style.fontSize = '14px';
            anchor.style.marginRight = '5px'
        });

        titulos.forEach(titulo => {
            titulo.style.fontSize = '25px';
        });

    }

    if(largura > 1195){
        // DEFININDO DISPLAY'S
        containerInicio.style.display = 'flex';
        containerClinica.style.display = 'flex';
        containerDuvidas.style.display = 'flex';

        // DEFININDO PADDING'S
        containerInicio.style.padding = '24px 80px 128px 80px';
        containerClinica.style.padding = '64px 80px';
        containerFarmacia.style.padding = '64px 80px';
        containerDuvidas.style.padding = '64px 80px';
        rodape.style.padding = '64px 80px';
        rodape.style.gap = '10px';

        shape.style.opacity = 1;

        // BOTÕES
        containerButton.style.display = 'flex';
        botao.style.marginBottom = '0px';

        logo.style.height = '21px';
        shape.style.top = 1;
        shape.style.left = 0;
        

        const width = 500;
        const height = 500;
        
        // Percorra todas as imagens e defina a largura e a altura
        images.forEach(image => {
          image.width = width;
          image.height = height;
        });

        anchors.forEach(anchor => {
            anchor.style.fontSize = '18px';
        })

        titulos.forEach(titulo => {
            titulo.style.fontSize = '32px';
        })
    }
}