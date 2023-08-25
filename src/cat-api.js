import axios from 'axios';
import { elements } from './index';
import Notiflix from 'notiflix';

const api_key =
  'live_Q8XRb0rBV3wYhz1AIp72jjRrhWjfFyWG0E57a4pTuNg9Zpy8hTcmHq2Cxvu9PZJP';
axios.defaults.headers.common['x-api-key'] = api_key;

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?limit=20`;
  viewTag(elements.loader);

  return axios.get(url).then(response => {
    return response;
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
function showError(msg) {
  console.log('ERROR111:', msg);
  Notiflix.Notify.init({
    width: '280px',
    position: 'left-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '50px',
    timeout: 10000,
    info: {
      background: '#e02525',
    },
  });
  //Notiflix.Notify.info(msg);
  Notiflix.Report.warning('Oops! Something went wrong!', msg, 'Ok');
}
export { axios, showError, fetchBreeds, viewTag, hiddenTag };
