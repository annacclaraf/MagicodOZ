function mostrarDetalhes() {
    const detalhes = document.getElementById("detalhes-dorothy");
    detalhes.innerHTML = `
      <h2>Dorothy - Detalhes</h2>
      <p>Dorothy é uma jovem corajosa do Kansas que, após ser levada por um tornado para a Terra de Oz, aprende o valor da amizade, da coragem e da esperança.
       Durante sua jornada, ela conhece o Espantalho, o Homem de Lata e o Leão Covarde, e juntos enfrentam desafios enquanto tentam chegar até o Mágico de Oz para que Dorothy possa voltar para casa.</p>
    `;
    detalhes.scrollIntoView({behavior: "smooth"});
  }
  