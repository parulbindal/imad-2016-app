console.log('Loaded!');

// Change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

var img = document.getElementById('img');

img.onclick = function(){
  img.style.marginLeft = '100px';  
}; 