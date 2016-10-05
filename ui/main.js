console.log('Loaded!');

// Change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft += 1;
    img.style.marginLeft = marginleft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight ,50);
 
}; 

