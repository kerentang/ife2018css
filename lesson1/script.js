var span1 = document.getElementById('black1')
var span2 = document.getElementById('black2')
var btn =  document.getElementById('button')
function changecolor () {
    console.log('1')
    span1.classList.toggle('width');
    span2.classList.toggle('width');
}
window.onload = function () {
    // console.log(btn)
   btn.addEventListener('click', changecolor);
}