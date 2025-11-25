const input = document.querySelector('.caixa-input input');
const iconeKeyboad = document.querySelector('.caixa-input i');
const iconDelete = document.querySelector('.caixa-ul ul li i');

// Qundo o Input receber foco add uma classlista (active) no Icon
input.addEventListener('focus', () => {

    iconeKeyboad.classList.add('active')
});

// Qundo o Input perder o foco remove a classlista (active) no Icon
input.addEventListener('blur', () => {

    iconeKeyboad.classList.remove('active')
});

// Qundo o icon receber um click meu campo input recebe o foco
iconeKeyboad.addEventListener('click', () => {

    input.focus()
});


// Salvar no local storage
function salvarLista() {
  const itens = [];

  document.querySelectorAll('ul li').forEach(li => {
    itens.push({
      texto: li.childNodes[0].textContent.trim(),
      feito: li.classList.contains('feito')
    });
  });

  localStorage.setItem("lista", JSON.stringify(itens));
}


// Carregar items salvos
function carregarLista() {
  const dados = JSON.parse(localStorage.getItem("lista")) || [];

  dados.forEach(item => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = `
      ${item.texto} 
      <i class="bi bi-check-lg"></i>
      <i class="bi bi-trash"></i>
    `;

    if (item.feito) li.classList.add('feito');

    ul.appendChild(li);
  });
}

// chama ao abrir o site
carregarLista();


// FORM: adicionar item
document.querySelector('form').addEventListener('submit', e=> {
  e.preventDefault()

  const input = document.querySelector('input');
  const valorInput = input.value.trim()

  if (!valorInput) return;

  const ul = document.querySelector('ul');
  const li = document.createElement('li');

  li.innerHTML = `${valorInput} 
  <i class="bi bi-check-lg"></i>
  <i class="bi bi-trash"></i>`

  ul.appendChild(li);

  salvarLista(); // salva ao adicionar

  input.value = ""
  input.focus()
})



// Click na lista
document.querySelector('ul').addEventListener('click', e => {
  
  // Apagar item
  if (e.target.classList.contains('bi-trash')) {
    e.target.closest('li').remove();
    salvarLista(); // <-- salva ao remover
  }

  // Marcar como feito
  if (e.target.classList.contains('bi-check-lg')) {
    const li = e.target.closest('li');
    li.classList.add('feito');
    salvarLista(); // <-- salva ao marcar
  }
});





// Notificação Pop-up
window.addEventListener('load', function() {
  Swal.fire({
    title: '< > Informações do Desenvolvedor',
    html: `<div style="text-align: left;">
      🛠️| Em fase de desenvolvimento, Estou trabalhando no resto do projeto e nas melhorias de responsividade. Logo, logo finalizo!😉<br><br>

      [✔️] Estilização de interação dinâmica nos ICONS-INPUT, INPUT, BUTTON, ICONS-LI, LI.<br><br>
      [✔️] Adicionar função (lista Completada) no icone CHECK, e mudar de cor o fundo da LI, riscar o nome via javascript.<br><br>
      [✔️] Adicionar função (Apagar lista) no icone TRASH via javascript.<br><br>
      [✔️] Adicionado o localStorage (salva tarefas feitas), (salva tarefas adicionadas) e (não apaga ao recarregar o site).<br><br>
      💡| MAIS IDEIAS A IMPLEMENTAR NO PROJETO!😉
      
    </div>`,
    /*imageUrl: './img/projeto5.PNG',
    imageWidth: 500,
    imageHeight: 250,
    imageAlt: 'Imagem do Portfolio',*/
    confirmButtonText: 'Ok',
    background: '#1a1a1aff',
    color: '#fff',
    confirmButtonColor: '#1cab00ff'
  });
});

