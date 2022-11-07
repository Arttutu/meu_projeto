function creatProject(link, img, title, overview, codigo) {
  return `
  
        <div class="projeto__item">
            <a href=${link}>
               <div class="projeto__${img}"></div>
            </a>
            <h3 class="projeto__nome">${title}</h3>
            <p class="projeto__descricao">${overview}</p>
            <button class = "codigo">  <a href ="${link}" class = "codigo">Código </a></button>
        </div>
  `
}

document.querySelector(".grid").innerHTML =
  creatProject(
    "https://github.com/Arttutu/meu_portfolio",
    "imagemSite",
    "Site Portfólio",
    "Site feito com HTML5, CSS3 e JavaScript. O desafio é mostrar meus conhecimentos e aprender, site está em constante mudança.",
    "https://github.com/Arttutu/meu_portfolio"
  ) +
  creatProject(
    "https://arttutu.github.io/formulario-js/",
    "imagemvalidacaoJs",
    "Formulário Javascript",
    "Projeto de validação de dados de um formulário com  Javascript.",
    "https://github.com/Arttutu/formulario-js"
  ) +
  creatProject(
    "https://github.com/Arttutu/meu_portfolio",
    "imagemFlutter",
    "Aplicativo de Filme",
    "Meu primeiro projeto em flutter. Um catálogo de filmes e séries a partir da API do TMDB",
    "https://github.com/Arttutu/app_movies"
  ) +
  creatProject(
    "arttutu.github.io/nlw-copa-do-mundo/",
    "imagemNlw",
    "Calendário Copa de Mundo 2022 Brasil",
    "Site feito com HTML5, CSS3 e JavaScript. Calendário da Copa é um projeto que mostra os jogos da copa do mundo de 2022.",
    "https://github.com/Arttutu/nlw-copa-do-mundo"
  ) +
  creatProject(
    "https://arttutu.github.io/piano-virtual/",
    "imagemPiano",
    "Piano Virtual",
    "Construção de um teclado virtual com JavaScript, desafio  aprender a trabalhar com eventos em JavaScript",
    "https://github.com/Arttutu/piano-virtual"
  ) +
  creatProject(
    "https://github.com/Arttutu/",
    "imagemGithub",
    "Outros Projetos",
    "<strong>Aqui você pode encontrar outros projetos menores, feito na faculdade ou em cursos online</strong>",
    "https://github.com/Arttutu/"
  )
