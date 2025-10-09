function getPersonagensData() {
  return [ 
      {
  nome: "Dorothy Gale",
  imagem: "imgs/Dorothy Gale (Judy Garland).jpg",
  descricao: "Dorothy é uma jovem corajosa e sonhadora que vive no Kansas com seus tios. Levado por um ciclone, ela vai parar na terra mágica de Oz, onde busca voltar para casa. Com seu cãozinho Totó, enfrenta desafios mostrando bondade, determinação e esperança, simbolizando o amor pelo lar e pela família."
},
    { 
    nome: "Espantalho", 
    imagem: "imgs/espantalhoo.jpg", 
    descricao: "O Espantalho é um personagem feito de palha que Dorothy encontra logo no começo da sua jornada. Embora tenha sido criado para espantar corvos, ele se sente incompleto por acreditar que lhe falta um cérebro para pensar melhor. Mesmo assim, o Espantalho demonstra grande inteligência, criatividade e coragem em vários momentos, ajudando seus amigos a superar perigos e obstáculos. Ele simboliza a busca pelo conhecimento e a sabedoria, mostrando que às vezes subestimamos o que já temos dentro de nós. Sua jornada é sobre perceber seu próprio valor e capacidade, mesmo quando duvida de si mesmo."
  },
  { 
    nome: "Homem de Lata", 
    imagem: "imgs/homemdelatajpg.jpg", 
    descricao: "O Homem de Lata é um ser feito inteiramente de metal que Dorothy encontra em sua caminhada. Antes de ser transformado em lata, ele era um lenhador, mas agora deseja muito ter um coração para sentir emoções e amar verdadeiramente. Apesar de sua aparência rígida, ele é sensível, leal e sempre disposto a proteger seus amigos. O Homem de Lata representa a importância da compaixão e da empatia, ensinando que os sentimentos vêm do coração e não apenas da forma física. Sua busca mostra que o amor e a bondade estão presentes mesmo onde menos se espera."
  },
  { 
    nome: "Leão Covarde", 
    imagem: "imgs/leao.jpg", 
    descricao: "O Leão Covarde é o rei dos animais da floresta, mas ao contrário do que se imagina, ele vive cheio de medo e inseguranças. Ele se junta a Dorothy e seus amigos na esperança de encontrar coragem para enfrentar os desafios que surgem pela frente. Durante a aventura, o Leão descobre que a verdadeira coragem não é a ausência do medo, mas a força para enfrentá-lo. Sua história é uma lição sobre autoconfiança e bravura, mostrando que até os mais temerosos podem ser grandes heróis quando acreditam em si mesmos."
  },
  { 
    nome: "Bruxa Má do Oeste", 
    imagem: "imgs/Margaret Hamilton.jpg", 
    descricao: "A Bruxa Má do Oeste é a grande antagonista da história, uma figura poderosa e cruel que deseja controlar a terra mágica de Oz. Ela usa seus poderes para tentar impedir Dorothy e seus amigos de realizarem seus desejos, sendo obstinada e implacável em sua busca por poder. Apesar de sua maldade, a bruxa também demonstra fragilidade e obsessão, o que a torna uma personagem complexa e memorável. Ela representa os obstáculos que precisamos enfrentar para crescer e conquistar nossos objetivos, simbolizando o mal e o medo que existem no mundo."
  },
  { 
    nome: "Glinda", 
    imagem: "imgs/glinda.jpg", 
    descricao: "Glinda é a bondosa Bruxa do Sul, uma figura sábia e benevolente que aparece para ajudar Dorothy em sua jornada. Glinda oferece orientação, proteção e palavras de encorajamento, mostrando que a verdadeira força está na coragem, na amizade e na esperança. Ela ajuda Dorothy a perceber que o poder para realizar seus desejos já estava dentro dela o tempo todo, incentivando a confiança em si mesma. Glinda simboliza a luz, a bondade e o apoio que surgem quando mais precisamos, sendo uma presença fundamental para o sucesso da missão."
  },
  { 
    nome: "Totó", 
    imagem: "imgs/toto.jpg", 
    descricao: "Totó é o pequeno cachorro fiel de Dorothy, seu companheiro inseparável em todas as aventuras. Apesar de seu tamanho, Totó é corajoso, leal e sempre alerta para proteger sua dona dos perigos que surgem pelo caminho. Ele representa a amizade verdadeira e o amor incondicional, mostrando que, mesmo os mais simples, podem fazer uma grande diferença. Totó é um símbolo do afeto e da companhia que nos dão força para seguir em frente, não importa o quão difícil seja a jornada."
  }
  ];
}

function criarPersonagemDiv(personagem) {
  const div = document.createElement('div');
  div.className = 'personagem';

  const img = document.createElement('img');
  img.src = personagem.imagem;
  img.alt = personagem.nome;

  const nome = document.createElement('p');
  nome.textContent = personagem.nome;

  div.appendChild(img);
  div.appendChild(nome);

  return div;
}


function adicionarEventosHover(divPersonagem, descricaoElem, personagem) {
  divPersonagem.addEventListener('mouseover', () => {
    descricaoElem.textContent = personagem.descricao;
  });
  divPersonagem.addEventListener('onmouseover', () => {
    descricaoElem.textContent = '';
  });
}

function montarPersonagens() {
  const personagens = getPersonagensData();
  const container = document.querySelector('.personagens');
  const descricao = document.querySelector('.descricao');

  personagens.forEach(personagem => {
    const divPersonagem = criarPersonagemDiv(personagem);
    adicionarEventosHover(divPersonagem, descricao, personagem);
    container.appendChild(divPersonagem);
  });
}

montarPersonagens();
