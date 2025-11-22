const input = document.querySelector('.caixa-input input');
const iconeKeyboad = document.querySelector('.caixa-input i');

input.addEventListener('focus', () => {

    iconeKeyboad.classList.add('active')
});

input.addEventListener('blur', () => {

    iconeKeyboad.classList.remove('active')
});

iconeKeyboad.addEventListener('click', () => {

    input.focus()
})



document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio imediato

    const btn = document.querySelector('button');
    
    // adiciona a cor ativa
    btn.classList.add("active");

    // espera 2 segundos antes de enviar
    setTimeout(() => {
        this.submit(); // envia o formulário
    }, 1005);
});

window.addEventListener('load', function() {
  Swal.fire({
    title: '< > Informações do Desenvolvedor',
    html: `<div style="text-align: left;">
      🛠️| Em fase de desenvolvimento, Estou trabalhando no resrto do projeto e nas melhorias de responsividade. Logo, logo finalizo! 😉
      
    </div>`,
    /*imageUrl: './img/projeto5.PNG',
    imageWidth: 500,
    imageHeight: 250,
    imageAlt: 'Imagem do Portfolio',*/
    confirmButtonText: 'Ok',
    background: '#1e1e2f',
    color: '#fff',
    confirmButtonColor: '#9400D3'
  });
});

