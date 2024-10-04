import {
  resetDomMarkup,
  domMarkup,
  markupGallery,
} from './js/render-functions';
import Gallery from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  form: document.querySelector('#search-form'),
  readmore: document.querySelector('.readmore'),
  buttonToTop: document.querySelector('.scroll-to-top'),
};

let instanse = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.form.addEventListener('submit', onSubmitForm);
refs.readmore.addEventListener('click', onLoadMore);

const NewGallery = new Gallery();

async function onSubmitForm(evt) {
  evt.preventDefault();

  const query = evt.currentTarget.searchQuery.value.trim();
  NewGallery.query = query;

  if (NewGallery.query === '') {
    return iziToast.info({
      position: 'topRight',
      title: 'Sorry',
      message: 'Please, type what you want  to search!',
    });
  }
  const newUrl = new URL(window.location);
  newUrl.searchParams.set('searchQuery', query);
  window.history.pushState({}, '', newUrl);

  NewGallery.resetPage();
  resetDomMarkup();
  showLoader();

  try {
    const { hits, totalHits } = await NewGallery.fetchPictures();

    if (hits.length === 0) {
      refs.readmore.classList.add('hidden');
      return showError();
    }

    const markup = markupGallery(hits);
    refs.gallery.innerHTML = markup;
    instanseRefresh();

    if (totalHits <= NewGallery.per_page) {
      refs.readmore.classList.add('hidden');
      onEndOfSearchRequest();
    } else {
      refs.readmore.classList.remove('hidden');
    }
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
    refs.form.reset();
  }
}
async function onLoadMore() {
  NewGallery.incrementPage();
  showLoader();

  try {
    const { hits, totalHits } = await NewGallery.fetchPictures();

    domMarkup(hits);
    smoothScrolling();
    instanseRefresh();

    if (NewGallery.page * NewGallery.per_page >= totalHits) {
      onEndOfSearchRequest();
    }
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
  }
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function instanseRefresh() {
  instanse.refresh('show.simplelightbox');
}

function smoothScrolling() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

refs.buttonToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = () => changeScrollButtonVisibility();

function changeScrollButtonVisibility() {
  const offsetTrigger = 60;
  const pageOffset = window.scrollY;

  if (pageOffset > offsetTrigger) {
    refs.buttonToTop.classList.remove('js-transparent');
  } else {
    refs.buttonToTop.classList.add('js-transparent');
  }
}

function showError(error) {
  console.log('Error fetching images:', error.message);
  iziToast.error({
    position: 'topRight',
    title: 'Error',
    message:
      'Something went wrong while fetching images. Please try again later!',
  });
}

function onEndOfSearchRequest() {
  refs.readmore.classList.add('hidden');
  iziToast.info({
    position: 'topRight',
    title: 'End of Search',
    message: 'You have reached the end of the results!',
  });
}
