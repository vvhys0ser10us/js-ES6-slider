import people from './data.js'

const container = document.querySelector('.slider-container')
const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')

container.innerHTML = people
  .map((ppl, index) => {
    const { img, name, job, text } = ppl
    let position = 'next'
    if (index === 0) {
      position = 'active'
    }

    if (index === people.length - 1) {
      position = 'last'
    }

    return `<article class="slide ${position}">
          <img
            src=${img}
            alt="john doe"
            class="img"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>`
  })
  .join('')

const startSlider = (type) => {
  console.log('hello')
  console.log(type)

  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling

  if (!next) {
    next = container.firstElementChild
  }

  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling
    if (!next) {
      next = container.lastElementChild
    }
    next.classList.remove(['next'])
    next.classList.add('last')

    return
  }

  next.classList.add('active')
  last.classList.add('next')
  active.classList.add('last')
}

next.addEventListener('click', () => startSlider())

prev.addEventListener('click', () => startSlider('prev'))
