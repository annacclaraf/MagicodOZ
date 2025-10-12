function mostrarDescricao(elemento) {
 
  const descricoes = document.querySelectorAll('.personagem p');
  descricoes.forEach(p => p.style.display = 'none');
  elemento.querySelector('p').style.display = 'block';
}

