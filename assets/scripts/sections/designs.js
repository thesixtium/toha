import Filterizr from 'filterizr'
import { insertScript } from '../core'

document.addEventListener('DOMContentLoaded', () => {
  // ================== Design cards =====================

  // setup design filter buttons
  const designCardHolder = document.getElementById('design-card-holder')
  if (designCardHolder != null && designCardHolder.children.length !== 0) {
    // eslint-disable-next-line no-new
    new Filterizr('.filtr-designs', {
      layout: 'sameWidth',
      controlsSelector: '.design-filtr-control'
    })
  }
})

// dynamically insert github buttons script.
insertScript('github-buttons', 'https://buttons.github.io/buttons.js')
