const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon= document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener("click", function(){
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px'
        searchBox.style.pointerEvents = 'none';
    } else {
        searchBox.style.top = '72px';
        searchBox.style.pointerEvents = 'auto';
    }
});

menuIcon.addEventListener("click", function(){
    if(slideoutMenu.style.opacity == "1"){
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
});

var input = document.querySelector("#file-input");

document.querySelector("button").addEventListener("click", function () {
  input.click();
});

input.addEventListener("change", preview);
function preview() {
  var fileObject = this.files[0];
  var fileReader = new FileReader();
  fileReader.readAsDataURL(fileObject);
  fileReader.onload = function () {
    var result = fileReader.result;
    var img = document.querySelector("#preview");
    img.setAttribute("src", result);
  };
}


//let video = document.querySelector("#videoElement");
//
//if(navigator.mediaDevices.getUserMedia){
//   navigator.mediaDevices.getUserMedia({video: true})
//   .then(function(stream){
//       video.srcObject = stream;
//   })
//   .catch(function(error){
//       console.log("Something went wrong!");
//   })
//}else{
//   console.log("getUserMedia not supported!");
//}