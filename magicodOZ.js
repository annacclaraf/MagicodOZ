const personagensData = [
  { 
    nome: "Dorothy", 
    imagem: "imgs/Dorothy Gale (Judy Garland).jpg", 
    descricao: "Dorothy é uma menina corajosa e determinada de Kansas, que é levada por um tornado para a Terra de Oz. Ela busca encontrar o Mágico para voltar para casa, enfrentando desafios e fazendo grandes amizades pelo caminho." 
  },
  { 
    nome: "Espantalho", 
    imagem: "imgs/espantalho.jpg", 
    descricao: "O Espantalho é um amigo leal de Dorothy que deseja ter um cérebro. Apesar de se sentir inseguro sobre sua inteligência, ele demonstra criatividade, coragem e muito coração durante a jornada." 
  },
  { 
    nome: "Homem de Lata", 
    imagem: "imgs/homemdelatajpg.jpg", 
    descricao: "O Homem de Lata é um personagem gentil e amigo, que busca um coração. Sua lealdade e bondade conquistam todos ao seu redor, mostrando que a compaixão é mais importante do que a aparência." 
  },
  { 
    nome: "Leão Covarde", 
    imagem: "imgs/leao.jpg", 
    descricao: "O Leão Covarde deseja ter coragem, mas ao longo da história descobre sua força interior. Ele é leal e protetor, tornando-se um grande companheiro de Dorothy e seus amigos." 
  },
  { 
    nome: "Bruxa Má do Oeste", 
    imagem: "imgs/Margaret Hamilton.jpg", 
    descricao: "A Bruxa Má do Oeste é a principal antagonista, que tenta impedir Dorothy de retornar para casa. Ela é poderosa e astuta, mas também demonstra momentos de fragilidade e obsessão pelo poder." 
  },
  { 
    nome: "Glinda", 
    imagem: "imgs/glinda.jpg", 
    descricao: "Glinda é a boa bruxa do Norte, sábia e benevolente. Ela ajuda Dorothy a compreender a importância da coragem, amizade e esperança, guiando-a para tomar decisões importantes." 
  },
  { 
    nome: "Totó", 
    imagem: "imgs/toto.jpg", 
    descricao: "Totó é o cãozinho fiel de Dorothy. Pequeno, mas corajoso, ele acompanha sua dona em todas as aventuras, mostrando lealdade e amor incondicional." 
  }
];


const personagens = document.getElementById("personagens");

personagensData.forEach((personagem, index) => {
  const card = document.createElement("div");
  card.classList.add("card-personagem");

  const img = document.createElement("img");
  img.src = personagem.imagem;
  img.alt = personagem.nome;

  const nome = document.createElement("h3");
  nome.textContent = personagem.nome;

  const botao = document.createElement("button");
  botao.textContent = "Mais Detalhes";
  botao.addEventListener("click", () => {
    const info = document.getElementById("info-personagem");
    info.innerHTML = `
      <h3>${personagem.nome}</h3>
      <img src="${personagem.imagem}" alt="${personagem.nome}" style="width:150px; display:block; margin-bottom:10px;">
      <p>${personagem.descricao}</p>
    `;
  });

  card.appendChild(img);
  card.appendChild(nome);
  card.appendChild(botao);

  if (index === 4) card.style.gridColumnStart = 2;
  if (index === 5) card.style.gridColumnStart = 3;
  if (index === 6) card.style.gridColumnStart = 4;

  personagens.appendChild(card);
});
