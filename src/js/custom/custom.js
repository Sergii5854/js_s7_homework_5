var data = {
  todo: ['checked todo list'],
  all: [],
  completed: ['write toDo list ']
};

function addItem(value) {
  document.getElementById('item').value = '';
  data.todo.push(value);
  addItemToDOM(value)
}

document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) addItem(value);
});

document.getElementById('item').addEventListener('keypress', function (e) {
  var value = this.value;
  if (e.code === 'Enter' && value) addItem(value);
});

function renderToDoList() {
  if (data.todo.length >= 0) {
    for (var i = 0; i < data.todo.length; i++) {
      var value = data.todo[i];
      addItemToDOM(value, false, false);
    }
  }
}
renderToDoList();
countToDoItems();

function addItemToDOM(text, completed, all) {
  var list;
  if (completed) {

    list = document.getElementById('completed')
  } else if (all) {
    list = document.getElementById('all')
  } else {
    list = document.getElementById('todo')
  }

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

  complete.addEventListener('click', completeItem);
  remove.addEventListener('click', removeItem);

  list.insertBefore(item, list.childNodes[0]);
  countToDoItems();
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;
  item.classList.toggle("active");

  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);
  }

  var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);

  countToDoItems();
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;
  if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
  }
  parent.removeChild(item);
  countToDoItems()
}

document.getElementById('filters').addEventListener("click", function (e) {
  var target = e.target;

  if (target.tagName === 'A') {
    var data = e.target.attributes.getNamedItem('data-name').value;
    document.querySelector('.active').classList.remove('active');

    if (data == 'all') {
      document.getElementById("todo").classList.add("active");
      document.getElementById("completed").classList.add("active");
    } else {
      document.getElementById(data).classList.add("active");
    }
  }
});

document.getElementById('clear').addEventListener("click", function () {
  data.todo = [];
  data.all = [];
  data.completed = [];
  document.getElementById('completed').innerHTML = "";
});

function countToDoItems() {
  return document.getElementById('todo-count').innerHTML = data.todo.length;
}


//https://github.com/themaxsandelin/todo/blob/master/resources/js/main.js
//https://codepen.io/xmark/pen/ogGXmP
//https://www.youtube.com/watch?v=2wCpkOk2uCg&t=3111shttps://www.youtube.com/watch?v=2wCpkOk2uCg&t=3111s
