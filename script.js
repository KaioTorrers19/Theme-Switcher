function active() {
  const theme = document.body
  const image = document.getElementsByTagName('img')[0]

  if (theme.classList.contains('light')) {
    theme.classList.remove('light')
    image.setAttribute('src', 'assets/moon.svg')
    image.setAttribute('alt', 'Icone de Lua')
  } else {
    image.setAttribute('src', 'assets/sun.svg')
    image.setAttribute('alt', 'Icone de sol')
    theme.classList.add('light')
    
  }
}
