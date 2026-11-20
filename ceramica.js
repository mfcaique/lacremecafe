const botoes = document.querySelectorAll('.filtro');
const produtos = document.querySelectorAll('.produto');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filtro = botao.dataset.filtro;

    botoes.forEach((item) => item.classList.remove('ativo'));
    botao.classList.add('ativo');

    produtos.forEach((produto) => {
      const categoria = produto.dataset.categoria;
      produto.hidden = filtro !== 'todos' && categoria !== filtro;
    });
  });
});