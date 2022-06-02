// super simple todo list with small js
let button = document.getElementById('button')
button.addEventListener('click', function () {
   let input = document.getElementById('input');
   let container = document.getElementById('container');
   let element = document.createElement('p')
   element.innerText = input.value;
   container.append(element);
   input.value = '';
   element.addEventListener('click', function () {
      element.style.textDecoration = 'line-through'
   })
   element.addEventListener('dblclick', function () {
      element.remove();
   })
});