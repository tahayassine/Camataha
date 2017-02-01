function changeFilter(elem){
  var image = elem.getAttribute("src");
  var filter = document.getElementById("filter");
  filter.setAttribute("src", image);
}

function getForm(elem){
  var imgSelect = elem.parentNode.querySelector('img').getAttribute('src').split("\\");
  imgSelect = imgSelect.pop().split('.')[0];
  var elem = elem.parentNode.querySelector('.comment');
  if(document.getElementById("addcom"))
  {
    alert("commentez d'abord la photo sélectionnée!")
  }else{
    var lastcom = elem.parentNode.querySelector('.comment p').innerHTML;
    elem.parentNode.querySelector('.comment p').innerHTML = "";
  var text = document.createElement("textarea");
  text.setAttribute("id", "addcom");
    text.setAttribute("name", "com");
    text.value = lastcom;
    elem.appendChild(text);
  var sub = document.createElement("button");
  sub.setAttribute("onclick", "commentIt()");
  sub.innerHTML = "<i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>";
  elem.appendChild(sub);
}
}

function valideCom(){
  var com = document.querySelector("#addcom");
  com.parentNode.querySelector('p').innerHTML = com.value;
  but = com.parentNode.querySelector('button');
  com.parentNode.removeChild(but);
  com.parentNode.removeChild(com);
}

//document.querySelectorAll(".like").onclick = likeIt(this);

var offset_data; //Global variable as Chrome doesn't allow access to event.dataTransfer in dragover

function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    offset_data = (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY);
    event.dataTransfer.setData("text/plain",offset_data);
}
function drag_over(event) {
    var offset;
    try {
        offset = event.dataTransfer.getData("text/plain").split(',');
    }
    catch(e) {
        offset = offset_data.split(',');
    }
    var dm = document.getElementById('filter');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
}
function drop(event) {
    var offset;
    try {
        offset = event.dataTransfer.getData("text/plain").split(',');
    }
    catch(e) {
        offset = offset_data.split(',');
    }
    var dm = document.getElementById('filter');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
}
var dm = document.getElementById('filter');
dm.addEventListener('dragstart',drag_start,false);
document.body.addEventListener('dragover',drag_over,false);
document.body.addEventListener('drop',drop,false);
