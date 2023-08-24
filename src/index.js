import { fetchBreeds, axios, viewTag, hiddenTag } from './cat-api';
import SlimSelect from 'slim-select';

const elements = {
  catsSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};
hiddenTag(elements.loader);
hiddenTag(elements.error);
elements.catsSelect.addEventListener('change', onCatChoice);

function onCatChoice() {
  inputCat(elements.catsSelect.value);
}

fetchBreeds()
  .then(arrCats => {
    const markup = arrCats.data
      .map(cat => {
        return `<option value="${cat.id}">${cat.name}</option>`;
      })
      .join('');
    elements.catsSelect.innerHTML = markup;
    new SlimSelect({
      select: '#breed-select',
      placeholder: true,
      text: 'placeholder text',
    });
    hiddenTag(elements.loader);
  })
  .catch(error => {
    viewTag(elements.error);
    hiddenTag(elements.loader);
  });

function inputCat(id) {
  url = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;
  console.log('Request on url ', url);
  viewTag(elements.loader);
  axios
    .get(url)
    .then(catResp => {
      const cat = catResp.data[0];
      const breed = cat.breeds[0];
      const markup = `<img src="${cat.url}" alt="${cat.url}" width = 300  />
            <div class="cat-discript">
             <h2>${breed.name}</h2>
             <p>${breed.description}</p>
             <p><b>Temperament: </b>${breed.temperament}</p> </div>`;
      elements.catInfo.innerHTML = markup;
      hiddenTag(elements.loader);
    })
    .catch(error => {
      viewTag(elements.error);
    });
}

export { elements };
