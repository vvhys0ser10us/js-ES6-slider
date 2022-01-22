import people from './data.js'

const container = document.querySelector('.slider-container')

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
