// counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                  var counter = request.responseText;
                  var span = document.getElementById('count');
                  span.innerHTML = counter.toString();
            }
        }
    };
  
  //make a request to the counter endpoint
  request.open('GET','http://parulbindal.imad.hasura-app.io/counter');
  request.send(null); 
  
};

//Submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
  //Make a request to the server and send the name
  
  
  //Capture a list of names and render it as a list
  var names = {"names1" , "names2" , "names3"};
  var list = '';
  for(var i = 0 ; i<names.length ;i++){
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById("namelist");
  ul.innerHTML = list;
};