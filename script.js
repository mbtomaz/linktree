function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute("alt", "Foto de Matheus de terno em fundo de plantas.")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.setAttribute("alt", "Foto de Matheus em fundo amarelo.")
  }
}
