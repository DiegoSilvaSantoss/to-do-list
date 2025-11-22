const input = document.querySelector('.caixa-input input');
const iconeKeyboad = document.querySelector('.caixa-input i');
const iconDelete = document.querySelector('.caixa-ul ul li i');

input.addEventListener('focus', () => {

    iconeKeyboad.classList.add('active')
});

input.addEventListener('blur', () => {

    iconeKeyboad.classList.remove('active')
});

iconeKeyboad.addEventListener('click', () => {

    input.focus()
});



document.querySelector('form').addEventListener('submit', e=> {
  e.preventDefault()

  const input = document.querySelector('input');
  const valorInput = input.value.trim()

  const ul = document.querySelector('ul');
  const li = document.createElement('li');

  li.innerHTML = `${valorInput} 
  <i class="bi bi-check-lg"></i>
  <i class="bi bi-trash"></i>`

  ul.appendChild(li)
  input.value = " "
  input.focus()
})


document.querySelector('ul').addEventListener('click', e => {
  if (e.target.classList.contains('bi-trash')) {
    e.target.parentElement.remove();
  }
});






window.addEventListener('load', function() {
  Swal.fire({
    title: '< > Informações do Desenvolvedor',
    html: `<div style="text-align: left;">
      🛠️| Em fase de desenvolvimento, Estou trabalhando no resrto do projeto e nas melhorias de responsividade. Logo, logo finalizo!😉<br><br>

      [✔️] Estilização de interação dinâmica nos ICONS-INPUT, INPUT, BUTTON, ICONS-LI, LI.<br><br>
      [...] Adicionar função (lista Completada) no icone CHECK, e mudar de cor o fundo da li, riscar o nome via javascript.<br><br>
      [✔️] Adicionar função (Apagar lista) no icone TRASH via javascript.<br><br>
      💡| MAIS IDEIAS A IMPLEMENTAR NO PROJETO!😉
      
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

