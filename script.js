// stored constants in objects for accessability
var theme = { dark: 'night-theme', light: 'day-theme' }
var storage = { visits: 'pageVisit', theme: 'pageTheme' }
var page = { visits: 1, theme: theme.light }

// get data from local storage
page.visits = parseInt(window.localStorage.getItem(storage.visits))
page.theme = window.localStorage.getItem(storage.theme)

// condenced to one line because of simplicity
page.theme === null ? page.theme = theme.light : page.theme
document.body.setAttribute('class', page.theme)

// condenced to one line because of simplicity
isNaN(page.visits) ? page.visits = 1 : page.visits++
window.localStorage.setItem(storage.visits, page.visits)
document.getElementById('visit-count').innerHTML = page.visits

if (page.visits !== null) {
  window.localStorage.setItem(storage.visits, page.visits)
}

// Only appplies to one button, so I made it anonymous
document.getElementsByName('themeButton')[0]
  .addEventListener('click', function () {
    var currentTheme = document.body.getAttribute('class')
    // switch the theme and set it
    document.body.setAttribute('class',
      currentTheme = currentTheme === theme.dark ? theme.light : theme.dark
    )
    window.localStorage.setItem(storage.theme, currentTheme)
  })
