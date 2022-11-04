function creatProject(link, img, title, overview) {
  console.log(link)
  ;`
    <div class="grid1">
        <div class="projeto__item">
            <a ${link}">
               <div class="projeto_${img}'"></div>
            </a>
            <h3 class="projeto__nome">${title}</h3>
             <p class="projeto__descricao">${overview}</p>
        </div>
  `
}

document.querySelector("#projetos").innerHTML = `
  <h2 class="projetos__titulo">Projetos</h2>

  <div class="projetos__itens">
   ${creatProject(
     "https://github.com/Arttutu/meu_portfolio",
     "fotoSite",
     "Site Portfólio",
     "Site feito com HTML5, CSS3 e JavaScript."
   )}
  
  </div>

`
