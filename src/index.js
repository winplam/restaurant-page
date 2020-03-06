import { addContentToDiv, createChildDiv, createContent } from './renderPage'

// Create Menu
addContentToDiv('content'
  , ['label', 'About', { class: 'tab', for: 'tab-top', id: 'about-btn' }]
  , ['label', 'Home', { class: 'tab', for: 'tab-front', id: 'home-btn' }]
  , ['label', 'Menu', { class: 'tab', for: 'tab-bottom', id: 'menu-btn' }]
  , ['label', 'Contact', { class: 'tab', for: 'tab-back', id: 'contact-btn' }]
  , ['input', ' ', { type: 'radio', name: 'tabs', id: 'tab-top' }]
  , ['input', ' ', { type: 'radio', name: 'tabs', id: 'tab-front' }]
  , ['input', ' ', { type: 'radio', name: 'tabs', id: 'tab-bottom' }]
  , ['input', ' ', { type: 'radio', name: 'tabs', id: 'tab-back' }]
)

// Create main container
createChildDiv('content', 'cube')

// Create About Us page
createContent('.cube', 'tab-content', '', ['h1', '', 'About Us']
  , ['p', '', 'Whether you\'re looking for a meal to die for, or just a place to have a quick drink, our experienced virtual staff are here to cater to you. Our virtual bar offers a variety of liquor, and beer, from both, around the world, or your favorite local brew masters. Be sure to pair your favorite dish, with something from our extensive wine list as well!']
  , ['img', '', { src: 'img/about.jpg', alt: 'About Our Restaurant', width: '450px', id: 'about-img' }])

// Create Home page
createContent('.cube', 'tab-content', '', ['h1', '', 'Le Gourmet Virtuel French Cuisine']
  , ['p', '', 'Bienvenue! Le Gourmet Virtuel, voted The Odin Projects’s best virtual restaurant year after year, welcomes you for breakfast, lunch, or dinner at our casual, ocean view restaurant at the city of your choice. Part restaurant, part wine boutique, part French Bakery, Le Gourmet Virtuel combines the elegance of an old world café with the casual ambiance of a neighborhood eatery. It’s sunlit space is perfect for an early morning espresso with a croissant or a leisurely lunch of shared dishes.']
  , ['img', '', { src: 'img/home.jpg', alt: 'French Menu Item #0', width: '450px', id: 'home-img' }]
)
document.getElementById('home-btn').classList.add('selected-tab')
document.querySelectorAll('.tab-content')[1].classList.add('cube-active')

// Create Menu page
createContent('.cube', 'tab-content', 'menu', ['h1', { id: 'le-menu' }, 'Le Menu'])
createContent('.tab-content', 'menu-images', ''
  , ['img', '', {
    src: 'img/menu1.jpg',
    alt: 'French Menu Item #1',
    width: '200px',
    height: '200px',
    class: 'menu-img'
  }]
  , ['img', '', {
    src: 'img/menu2.jpg',
    alt: 'French Menu Item #2',
    width: '200px',
    height: '200px',
    class: 'menu-img'
  }]
  , ['img', '', {
    src: 'img/menu3.jpg',
    alt: 'French Menu Item #3',
    width: '200px',
    height: '200px',
    class: 'menu-img'
  }]
  , ['img', '', {
    src: 'img/menu4.jpg', alt: 'French Menu Item #4', width: '200px', height: '200px', class: 'menu-img'
  }]
)

// Create Contact Us page
createContent('.cube', 'tab-content', 'contact-page', ['h1', '', 'Contact Page']
  , ['p', '', 'Don\'t call us, we\'ll call You'])
createContent('.tab-content', 'map-container', ''
  , ['img', '', { src: 'img/map.jpg', alt: 'Restaurant Map', width: '400px', class: 'map-img' }]
)

// Add effects to tab changes
const tabEvents = (() => {
  const tabs = document.querySelectorAll('.tab')
  const cubes = document.querySelectorAll('.tab-content')
  const highLightTab = (tabID) => {
    tabs.forEach(tab => tab.classList.remove('selected-tab'))
    document.getElementById(tabID).classList.add('selected-tab')
  }
  const highLightSquare = (childNumber) => {
    cubes.forEach(square => square.classList.remove('cube-active'))
    cubes[childNumber].classList.add('cube-active')
  }
  tabs.forEach(element => element
    .addEventListener('click', event => {
      tabEventHandler(event.target.id)
    }))
  const tabEventHandler = (tabID) => {
    switch (tabID) {
      case 'about-btn':
        highLightTab(tabID)
        highLightSquare(0)
        break
      case 'home-btn':
        highLightTab(tabID)
        highLightSquare(1)
        break
      case 'menu-btn':
        highLightTab(tabID)
        highLightSquare(2)
        break
      case 'contact-btn':
        highLightTab(tabID)
        highLightSquare(3)
        break
    }
  }
})()

// Add footer
const addFooter = (() => {
  console.log('making')
  const createFragment = () => {
    return document.createRange().createContextualFragment(`
    <footer><a href="https://github.com/winplam/restaurant-page/">GitHub</a></footer>
`)
  }
  document.getElementById('content').appendChild(createFragment())
})()
