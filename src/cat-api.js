import axios from 'axios';
import { elements } from './index';
const api_key =
  'live_Q8XRb0rBV3wYhz1AIp72jjRrhWjfFyWG0E57a4pTuNg9Zpy8hTcmHq2Cxvu9PZJP';
axios.defaults.headers.common['x-api-key'] = api_key;

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?limit=20`;
  viewTag(elements.loader);

  return axios
    .get(url)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
}
function viewTag(tag) {
  if (tag.classList.contains('js-hidden')) {
    tag.classList.remove('js-hidden');
  }
}

function hiddenTag(tag) {
  if (!tag.classList.contains('js-hidden')) {
    tag.classList.add('js-hidden');
  }
}

export { axios, fetchBreeds, viewTag, hiddenTag };
