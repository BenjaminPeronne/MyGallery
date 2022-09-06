// Create elements
const loading_div = document.createElement('div');
const loading_span1 = document.createElement('span');
const loading_span2 = document.createElement('span');

// Get elements
const body = document.querySelector('body');
const row = document.querySelector('.row');

// Add the class 
loading_div.classList.add('loader-wrapper');
loading_span1.classList.add('loader');
loading_span2.classList.add('loader-inner');

// Append elements
document.body.insertAdjacentElement('afterbegin', loading_div);
loading_div.appendChild(loading_span1);
loading_span1.appendChild(loading_span2);

// Disable 
row.style.display = 'none';

// While the page is loading show the loader 
window.addEventListener('load', () => {
    loading_div.style.display = 'none';
    row.style.display = 'flex';
});