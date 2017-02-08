var theme = {
  dark: 'darkTheme',
  light: 'lightTheme'
}
function changeTheme () {
  var currentTheme = document.body.getAttribute("class");
  var newTheme = currentTheme === theme.dark ? theme.light : theme.dark
  document.body.setAttribute('class', newTheme)
}
var button = document.getElementsByName('themeButton')
button[0].addEventListener('click', changeTheme)
