// stored constants in objects for accessability
var theme = { dark: 'night-theme', light: 'day-theme' }
var storage = { visits: 'pageVisit', theme: 'pageTheme' }
var page = { visits: 0, theme: theme.light }

// get data from local storage
page.visits = parseInt(window.localStorage.getItem(storage.visits)) || page.visits
page.theme = window.localStorage.getItem(storage.theme) || page.theme

page.visits++

document.body.setAttribute('class', page.theme)

window.localStorage.setItem(storage.visits, page.visits)
document.getElementById('visit-count').textContent = page.visits

if (page.visits !== null) {
  window.localStorage.setItem(storage.visits, page.visits)
}

// Only appplies to one button, so I made it anonymous
document.getElementById('themeButton')
  .addEventListener('click', function () {
    var currentTheme = document.body.getAttribute('class')
    // switch the theme and set it
    document.body.setAttribute('class',
      currentTheme = currentTheme === theme.dark
        ? theme.light
        : theme.dark
    )
    window.localStorage.setItem(storage.theme, currentTheme)
  })
