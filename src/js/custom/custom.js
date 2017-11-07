console.info("home work 5 v1.1");
//https://codepen.io/xmark/pen/ogGXmP
//https://www.youtube.com/watch?v=2wCpkOk2uCg&t=3111shttps://www.youtube.com/watch?v=2wCpkOk2uCg&t=3111s



var data = {
  todo: [],
  all: [],
  completed: []

}

function addItem (value) {
  document.getElementById('item').value = '';
  data.todo.push(value);
}

document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItem(value);
});


  if (!data.todo.length ) {
    for (var i = 0; i < data.todo.length; i++) {
      var value = data.todo[i];
    }
  }




