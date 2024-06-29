function init() {
  import('./global.header.js')
  import('./our-fleet-hero.js')
  import('./our-fleet.fleet-card.js')
  import('./our-fleet-form.js')
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length
let loadedPartialsCount = 0

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++
  if (loadedPartialsCount === totalPartials) init()
})
