const input = document.querySelector('.caixa-input input');
const iconeKeyboad = document.querySelector('.caixa-input i');
const iconDelete = document.querySelector('.caixa-ul ul li i');


//CONFIGURAÇÃO DO LIMITE
const limite = "Limite Máximo " + 35 + "/ 0"; //troque aqui o limite
const contador = document.querySelector("#contador"); // <span id="contador"></span>

// Sempre mostra o limite
contador.textContent = `${limite}`;


// Atualizar contador em tempo real
input.addEventListener("input", () => {
    const tamanho = input.value.length;

    // Exibe "restantes" no contador
    contador.textContent = `Limite Máximo ${35}/${tamanho}`;

    // Impede digitar além do limite
    if (tamanho > limite) {
        input.value = input.value.substring(0, limite);
        contador.textContent = 0;
    }
});


// ÍCONE ATIVO

input.addEventListener('focus', () => {
    iconeKeyboad.classList.add('active')
});

input.addEventListener('blur', () => {
    iconeKeyboad.classList.remove('active')
});

iconeKeyboad.addEventListener('click', () => {
    input.focus()
});



//SALVAR NO LOCALSTORAGE

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



//CARREGAR LISTA SALVA
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

carregarLista();



//ADICIONAR ITEM (FORM)
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const valorInput = input.value.trim();
    const tamanho = valorInput.length;

    // Bloqueia se passar do limite
    if (tamanho === 0 || tamanho > limite) return;

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    li.innerHTML = `
    ${valorInput} 
    <i class="bi bi-check-lg"></i>
    <i class="bi bi-trash"></i>
    `;

    ul.appendChild(li);

    salvarLista();

    input.value = "";
    contador.textContent = limite;
    input.focus();
});



//CLICK NA LISTA
document.querySelector('ul').addEventListener('click', e => {

    // Apagar
    if (e.target.classList.contains('bi-trash')) {
        e.target.closest('li').remove();
        salvarLista();
    }

    // Marcar como feito
    if (e.target.classList.contains('bi-check-lg')) {
        const li = e.target.closest('li');
        li.classList.add('feito');
        salvarLista();
    }
});






//NOTIFICAÇÃO POP-UP
/*window.addEventListener('load', function() {
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
    imageAlt: 'Imagem do Portfolio',
    confirmButtonText: 'Ok',
    background: '#1a1a1aff',
    color: '#fff',
    confirmButtonColor: '#1cab00ff'
  });
});*/

