
const personagens = [
  {
    nome: "Dorothy",
    imagem: "imgs/Dorothy Gale (Judy Garland).jpg",
    detalhe: "Dorothy Gale é uma jovem do Kansas que é levada por um tornado para a Terra de Oz. Durante sua jornada, ela aprende sobre amizade, coragem e descobre que não há lugar como o lar."
  },
  {
    nome: "Espantalho",
    imagem: "imgs/espantalho.jpg",
    detalhe: "O Espantalho sonha em ter um cérebro, mas ao longo da jornada mostra criatividade e inteligência, provando que já tinha o que desejava."
  },
  {
    nome: "Homem de Lata",
    imagem: "imgs/homemdelatajpg.jpg",
    detalhe: "O Homem de Lata acredita que precisa de um coração, mas demonstra sensibilidade e bondade, mostrando que já possuía sentimentos verdadeiros."
  },
  {
    nome: "Leão Covarde",
    imagem: "imgs/leao.jpg",
    detalhe: "O Leão acredita ser covarde, mas descobre que a verdadeira coragem está em enfrentar seus medos e lutar ao lado dos amigos."
  },
  {
    nome: "Bruxa Má do Oeste",
    imagem: "imgs/bruxamaoeste.jpg",
    detalhe: "A Bruxa Má do Oeste é a principal vilã da história. Ela deseja se vingar de Dorothy e de seus amigos, usando sua magia sombria para tentar impedir que cheguem ao Mágico de Oz."
  },
  {
    nome: "Glinda (A Bruxa Boa)",
    imagem: "imgs/glinda.jpg",
    detalhe: "Glinda é a Bruxa Boa do Norte, uma figura bondosa que guia Dorothy em sua jornada e a ajuda a descobrir como voltar para casa."
  },
  {
    nome: "Totó",
    imagem: "imgs/toto.jpg",
    detalhe: "Totó é o fiel cachorro de Dorothy. Ele a acompanha em todas as aventuras, sendo um símbolo de lealdade e coragem mesmo em meio aos perigos da Terra de Oz."
  }
];


function criarPersonagem(personagem) {
  const container = document.getElementById("lista-personagens");

  const div = document.createElement("div");
  div.classList.add("personagem");

  const img = document.createElement("img");
  img.src = personagem.imagem;
  img.alt = personagem.nome;

  const nome = document.createElement("h3");
  nome.textContent = personagem.nome;
  nome.onclick = () => mostrarDetalhes(personagem);

  div.appendChild(img);
  div.appendChild(nome);

  container.appendChild(div);
}

function mostrarDetalhes(personagem) {
  const info = document.getElementById("info-personagem");
  info.innerHTML = `
    <h3>${personagem.nome}</h3>
    <p>${personagem.detalhe}</p>
  `;
  document.getElementById("detalhes-personagem").scrollIntoView({behavior: "smooth"});
}


function carregarPersonagens() {
  personagens.forEach(criarPersonagem);
}

window.onload = carregarPersonagens;