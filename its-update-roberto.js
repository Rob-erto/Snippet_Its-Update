const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
const json = await response.json();

var elements = document.getElementsByClassName('item_text');

for (var i = 0; i < 33; i++) 
{    
    elements[i].textContent = json.programming_languages_popular[i];
}

var itsImage = document.getElementsByClassName('eltdf-normal-logo')[0];
itsImage.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg';
