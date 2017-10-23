var header = document.querySelector("h1")
  function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return color
  }

  // Simple function for clarity
  function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput;
  }

  // Now perform the action over intervals (milliseocnds):
  setInterval("changeHeaderColor()",500);

document.addEventListener('DOMContentLoaded', function() {


  var checkPageButton = document.getElementById('crp');
  var checkPageButton1 = document.getElementById('dwn');

  checkPageButton.addEventListener('click', function() {
var queryInfo = {
      active: true,
      currentWindow: true
    };

chrome.tabs.query(queryInfo, function(tabs){
console.log(tabs);
  var tab = tabs[0];

  console.log(tab.url);
var fin = tab.url;
var id="";
for(i=32;i<43;i++){
  id+=fin[i];
}
console.log(id);
var pst="http://ytcropper.com/crop.php?ytURL="+id;
console.log(pst);
var newURL = pst;
chrome.tabs.create({ url: newURL });
});
}, false);





checkPageButton1.addEventListener('click', function() {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

chrome.tabs.query(queryInfo, function(tabs){
console.log(tabs);
var tab = tabs[0];
console.log(tab.url);

var fin = tab.url;
var id="";
for(i=0;i<12;i++){
id+=fin[i];
}
var id2="";
for(i=12;i<fin.length;i++){
id2+=fin[i];
}
pst=id+"ss"+id2;
console.log(id);
console.log(pst);

var newURL = pst;


chrome.tabs.create({ url: newURL });
});
}, false);
}, false);
