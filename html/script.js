function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  // alert(event.target.id);
  // event.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  // alert('On drop called');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  // alert(dropzone);
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();

}