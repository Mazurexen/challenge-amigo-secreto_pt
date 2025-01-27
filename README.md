# Amigo Secreto - Projeto Oracle ONE 🎉

Bem-vindo ao repositório do projeto **Amigo Secreto**! Este projeto faz parte do programa **Oracle ONE**, uma iniciativa incrível para capacitar desenvolvedores em formação com habilidades práticas e conhecimentos essenciais para o mercado de tecnologia.

Este código foi desenvolvido como parte de uma prática de **lógica de programação**, com o objetivo de reforçar conceitos fundamentais como manipulação de arrays, eventos em JavaScript, validação de entrada e interação com o DOM (Document Object Model). Aqui, você encontrará uma aplicação simples, porém poderosa, que permite adicionar amigos a uma lista e sortear pares para um jogo de **Amigo Secreto**.

---

## 🎨 Sobre o Projeto

O **Amigo Secreto** é uma aplicação web interativa que permite:

- **Adicionar amigos**: Insira nomes de participantes e adicione-os à lista.
- **Validar entradas**: Garanta que os nomes não estejam vazios ou duplicados.
- **Sortear pares**: Realize o sorteio de amigos secretos de forma justa e aleatória.
- **Interação dinâmica**: Use o teclado para adicionar nomes (tecla `Enter`) e navegar entre os elementos da página (tecla `Tab`).

Este projeto foi criado para praticar e aprimorar habilidades em JavaScript, com foco em:

- Manipulação de arrays (`push`, `forEach`, `filter`, `includes`).
- Interação com o DOM (`getElementById`, `createElement`, `appendChild`).
- Validação de entrada e tratamento de erros.
- Uso de eventos (`keydown`, `onclick`).

---

## 🚀 Como Funciona

### Funcionalidades Principais

1. **Adicionar Amigos**:
   - Digite o nome de um amigo no campo de texto.
   - Pressione `Enter` ou clique no botão "Adicionar".
   - O nome será validado e adicionado à lista de participantes.

2. **Sortear Amigos Secretos**:
   - Após adicionar pelo menos 2 amigos, clique no botão "Sortear Amigo".
   - O sistema garantirá que todos tenham um amigo secreto e exibirá os pares sorteados.

3. **Validações**:
   - Nomes vazios ou duplicados não serão permitidos.
   - O sorteio só ocorrerá se houver participantes suficientes para garantir que todos tenham um amigo secreto.

---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estruturação da página e elementos interativos.
- **CSS**: Estilização para uma experiência visual agradável (não incluso no código fornecido, mas pode ser adicionado).
- **JavaScript**: Lógica de programação para adicionar amigos, validar entradas e realizar o sorteio.

---

## 📂 Estrutura do Código

O código está organizado da seguinte forma:

- **Variáveis Globais**:
  - `let amigos = [];`: Array para armazenar os nomes dos participantes.

- **Funções**:
  - `adicionarAmigo()`: Adiciona um nome à lista de amigos após validação.
  - `atualizarListaAmigos()`: Atualiza a lista exibida na página.
  - `sortearAmigo()`: Realiza o sorteio de amigos secretos.

- **Eventos**:
  - `keydown`: Captura a tecla `Enter` para adicionar amigos.
  - `onclick`: Adiciona interação aos botões "Adicionar" e "Sortear Amigo".

---

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido com o intuito de reforçar os seguintes conceitos:

1. **Lógica de Programação**:
   - Uso de estruturas de controle (`if`, `return`).
   - Manipulação de arrays e loops (`forEach`, `filter`).

2. **Interação com o DOM**:
   - Criação e atualização dinâmica de elementos HTML.
   - Uso de `innerHTML` e `appendChild`.

3. **Validação e Tratamento de Erros**:
   - Verificação de entradas vazias ou duplicadas.
   - Exibição de alertas para orientar o usuário.

4. **Boas Práticas**:
   - Código limpo e organizado.
   - Uso de funções para modularizar a lógica.