const carsCards = document.querySelectorAll('.car-card');

const renderCarsCardsImage = () => {
  carsCards.forEach((carCard) => {
    const imgElement = carCard.querySelector('.car-card__img');
    const fileName = carCard.querySelector('.car-card__title').textContent.replaceAll(' ', '-');

    imgElement.src = `../img/${fileName}.png`
  })
}

export { renderCarsCardsImage }
