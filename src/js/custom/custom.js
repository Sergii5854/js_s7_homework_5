console.info("home work 5 v1.1");
//https://codepen.io/xmark/pen/ogGXmP
//https://www.youtube.com/watch?v=2wCpkOk2uCg

var i;
i = 1;

function addText(id) {
  var text = document.getElementById("div" + id).value;
  text = text.slice(0,10 );
  document.getElementById(id).querySelector("a").innerHTML= text;
  /*document.getElementById(id).innerHTML = text + "...";*/
};

document.getElementById('add').addEventListener('click', function() {
  var newLi = document.createElement("li");
  var a = document.createElement("a");
  var newLiText = document.createTextNode("Hовая заметка " + i );

  a.appendChild(newLiText);
  newLi.appendChild(a);
  /*console.log(newLi);*/
  a.setAttribute("href","#" + "div" + i);
  /*a.setAttribute("id", "a"+ i);*/
  newLi.setAttribute("id", i);
  document.getElementById("all").appendChild(newLi);
  //
  var newButton = document.createElement("button");
  var buttonTrash = document.createTextNode('')

  newButton.appendChild(buttonTrash);
  newLi.appendChild(newButton);
  newButton.setAttribute("onclick", "Del(" + i + ")");
  newButton.innerHTML= '<i class="fa fa-trash" aria-hidden="true"></i>';

  i++;
});

function Del(i){
  document.getElementById(i).remove();
  document.getElementById("div" + i).remove();
}
