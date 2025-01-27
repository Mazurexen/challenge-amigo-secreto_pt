let amigos = [];

document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    let amigosParaSortear = [...amigos];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const sorteioValido = amigos.every(amigo => {
        const amigosDisponiveis = amigosParaSortear.filter(nome => nome !== amigo);
        return amigosDisponiveis.length > 0;
    });

    if (!sorteioValido) {
        const faltantes = amigos.length - amigosParaSortear.length;
        alert(`Não é possível sortear. Faltam ${faltantes} pessoa(s) para que todos tenham um amigo secreto.`);
        return;
    }

    amigos.forEach(amigo => {
        const amigosDisponiveis = amigosParaSortear.filter(nome => nome !== amigo);
        const amigoSorteado = amigosDisponiveis[Math.floor(Math.random() * amigosDisponiveis.length)];
        amigosParaSortear = amigosParaSortear.filter(nome => nome !== amigoSorteado);

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigo} ➔ ${amigoSorteado}`;
        resultado.appendChild(itemResultado);
    });
}