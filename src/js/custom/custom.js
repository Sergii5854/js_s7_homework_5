console.info("home work 5 v1.1");
//https://codepen.io/xmark/pen/ogGXmP
//https://www.youtube.com/watch?v=2wCpkOk2uCg

var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
      todo: [],
      all: [],
      completed: []
    };

var removeSVG = '<i class="fa fa-check" aria-hidden="true"></i>'
var completeSVG = '<i class="fa fa-trash" aria-hidden="true"></i>'
