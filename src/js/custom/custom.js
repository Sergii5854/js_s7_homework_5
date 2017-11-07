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

function addItemToDOM(text, completed) {
  var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

 // console.log(text)
 // var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  remove.addEventListener('click', removeItem);

  list.insertBefore(item, list.childNodes[0]);
}


function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;
  console.log('item', item, 'parent', parent, "id", id, "value" ,value )
  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
  }
  parent.removeChild(item);
}
