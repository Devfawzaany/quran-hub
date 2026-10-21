const librarySection = document.getElementById('library-section');
const container = document.getElementById('recitations-container');
const btnGridView = document.getElementById('btn-grid-view');
const btnListView = document.getElementById('btn-list-view');

btnGridView.addEventListener('click', function() {
  container.classList.add('grid-view');
  container.classList.remove('list-view');

  btnGridView.classList.add('active');
  btnListView.classList.remove('active');
});

btnListView.addEventListener('click', function() {
  container.classList.add('list-view');
  container.classList.remove('grid-view');

  btnListView.classList.add('active');
  btnGridView.classList.remove('active');
});