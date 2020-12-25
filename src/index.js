import './styles.css';
import apiService from './js/apiService';
import markup from './js/templating';
import refs from './js/refs';
import onOpenHandler from './js/modal';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';




refs.searchInput.addEventListener('submit', searchFormSubmitHandler);
refs.imagesContainer.addEventListener('click', onOpenHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  console.log(form.elements.query.value);
  apiService.query = form.elements.query.value;
 if (!apiService.query || !apiService.query.trim()) {
  error({ text: 'Please, enter your data' });
 }



  clearContainer();
  apiService.resetPage();
  fetchImages();
  form.reset();
}


function fetchImages() {
  

  apiService
    .searchImages()
    .then(images => {
      if (images.length === 0) {
        error({ text: 'Not found!' });
        
      }
      markup(images);
    })
    .catch(error => console.log(error));
}

function clearContainer() {
  refs.imagesContainer.innerHTML = '';
}



var infScroll = new InfiniteScroll( '.js-gallery', {
  // defaults listed
 
  path: searchImages(),
  // REQUIRED. Determines the URL for the next page
  // Set to selector string to use the href of the next page's link
  // path: '.pagination__next'
  // Or set with {{#}} in place of the page number in the url
  // path: '/blog/page/{{#}}'
  // or set with function
  // path: function() {
  //   return return '/articles/P' + ( ( this.loadCount + 1 ) * 10 );
  // }
 
  append: undefined,
  // REQUIRED for appending content
  // Appends selected elements from loaded page to the container
 
  checkLastPage: true,
  // Checks if page has path selector element
  // Set to string if path is not set as selector string:
  //   checkLastPage: '.pagination__next'
 
  prefill: false,
  // Loads and appends pages on intialization until scroll requirement is met.
 
  responseType: 'document',
  // Sets the type of response returned by the page request.
  // Set to 'text' to return flat text for loading JSON.
 
  outlayer: false,
  // Integrates Masonry, Isotope or Packery
  // Appended items will be added to the layout
 
  scrollThreshold: 400,
  // Sets the distance between the viewport to scroll area
  // for scrollThreshold event to be triggered.
 
  elementScroll: false,
  // Sets scroller to an element for overflow element scrolling
 
  loadOnScroll: true,
  // Loads next page when scroll crosses over scrollThreshold
 
  history: 'replace',
  // Changes the browser history and URL.
  // Set to 'push' to use history.pushState()
  //    to create new history entries for each page change.
 
  historyTitle: true,
  // Updates the window title. Requires history enabled.
 
  hideNav: undefined,
  // Hides navigation element
 
  status: undefined,
  // Displays status elements indicating state of page loading:
  // .infinite-scroll-request, .infinite-scroll-load, .infinite-scroll-error
  // status: '.page-load-status'
 
  button: undefined,
  // Enables a button to load pages on click
  // button: '.load-next-button'
 
  onInit: undefined,
  // called on initialization
  // useful for binding events on init
  // onInit: function() {
  //   this.on( 'append', function() {...})
  // }
 
  debug: false,
  // Logs events and state changes to the console.
})








































// import './styles.css';
// import template from '../src/templates/template.hbs'
// import debounce from 'lodash.debounce';
// import * as basicLightbox from 'basiclightbox';

// // const instance = basicLightbox.create(`
// //     <img src="C:\Users\maxim\OneDrive\Рабочий стол\photo_2017-10-19_17-11-33" width="800" height="600">
// // `)

// // console.log(instance);

// const refs =  { 
//     body : document.querySelector('body'),
//     input: document.querySelector('.search-form'),
//     gallery: document.querySelector('.gallery'),
//     button: document.querySelector('.load-button'),
//     image
// }



// let input;

// refs.input.addEventListener('input',debounce( function(e) {
//     input = e.target.value;
//     fetchList(input)
// }, 300));


// function fetchList(input) {
 
//     const pageNumber = 1;
//     var API_KEY = '19512727-32501378dd7f5085677b9caf0';
    
//     var URL = `https://pixabay.com/api/?key=${API_KEY}&q=${input}&image_type=photo&horizontal&page=${pageNumber}&per_page=12`;
    
//    return  fetch(URL)
//     .then(res => res.json())
//     .then(onFetch)

 
// }

// refs

// function onOpenHandler(event) {
//     if (event.target.nodeName === 'IMG') {
//       const instance = basicLightbox.create(
//         `<img src=${event.target.dataset.source}>`,
//       );
  
//       instance.show();
//     }
//   }


// function onFetch(obj) {
   
//     create(obj.hits)
// }



// const create = function(result) { 
//     const markup = template(result);
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
//   }
  
