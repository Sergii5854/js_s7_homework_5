console.info("home work 5 v1.1");
//https://codepen.io/xmark/pen/ogGXmP
//https://www.youtube.com/watch?v=2wCpkOk2uCg&t=3111shttps://www.youtube.com/watch?v=2wCpkOk2uCg&t=3111s


var data = {
  todo: ["test"],
  all: [],
  completed: []

};


function addItem(value) {
  document.getElementById('item').value = '';
  data.todo.push(value);
  renderToDoList()

}

document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) addItem(value);
  console.log('add item : ', value);


});

function renderToDoList() {
  if (data.todo.length >=0 ) {
    console.log("data.todo.length", data.todo.length)
    for (var i = 0; i < data.todo.length; i++) {
      var value = data.todo[i];
      console.log("renderToDoList", value, data.todo[i]);
      addItemToDOM(value);
    }
  }
}
renderToDoList();
function renderCompletedList() {
  if (!data.completed.length) {
    for (var j = 0; j < data.completed.length; j++) {
      var value = data.completed[j];

    }
  }
}

function renderAllList() {
  if (!data.all.length) {
    for (var k = 0; k < data.all.length; k++) {
      var value = data.all[k];

    }
  }
}

function addItemToDOM(text) {
  console.log(text)
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');





  list.insertBefore(item, list.childNodes[0]);
}

