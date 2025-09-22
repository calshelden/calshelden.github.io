// for the more button on the news feed
window.hideBlock = function(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = 'none';
};

window.showBlock = function(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = 'block';
};