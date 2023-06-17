function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  // html.classList.add('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./docs/css/assets.css/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./docs/css/assets.css/avatar-dark.png")
  }
}
