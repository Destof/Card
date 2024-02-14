function runaway(id) {
    id.style.top = Math.round(Math.random() * 250) - 100 + 'px';
    id.style.left = Math.round(Math.random() * 250) - 200 + 'px';
}
function hide() {
    var buttons_div = document.getElementById("hide");
    buttons_div.style.display = "none";
    var image = document.querySelector('#image');
    image.src = "static/video/cat4.webp";
    var text = document.querySelector('#text');
    text.innerHTML = "Text"
  }