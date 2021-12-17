//https://html.spec.whatwg.org/multipage/dom.html
var last_known_scroll_position = 0;
var h = window.innerHeight;
// Use the anchor to hide the other posts
var header = document.getElementById("header");
var blogNumber = header.dataset.lastBlog;
var upimg = document.getElementById("up-arrow-img");
var downimg = document.getElementById("down-arrow-img");
var scrolly = document.getElementById("blog-scrollview");
var nextBlog = document.getElementById("right-page");
var prevBlog = document.getElementById("left-page");
upimg.setAttribute('style','visibility:hidden');
downimg.setAttribute('style','visibility:hidden');

var lastBlogNumber = parseInt(blogNumber);
var currentBlogNumber = lastBlogNumber;

var myBlogHash = window.location.hash.substr(1);
console.log(myBlogHash);
var urlWithoutHash = window.location.hash.slice(1)
console.log(urlWithoutHash);

if (myBlogHash === "") {
    var elements = document.getElementsByClassName("blog");
    for (var j=0; j < elements.length; j++) {
        elements[j].style.display = "none";
    }
    var number = ("0000" + lastBlogNumber).slice(-4);
    var lastBlog = document.getElementById("blog"+number);
    lastBlog.style.display = "block";
}

prevBlog.addEventListener('click', function(e){
  console.log(currentBlogNumber);
  if (currentBlogNumber != 1) {
    currentBlogNumber = currentBlogNumber - 1;
    var previous = ("0000" + currentBlogNumber).slice(-4);
    var elements = document.getElementsByClassName("blog");
    var prevBlogView = document.getElementById("blog" + previous);
    console.log(prevBlogView);
    setTimeout(function() {
      for (var j=0; j < elements.length; j++) {
        elements[j].style.display = "none";
      };
    }, 1000);
    setTimeout(function() {
      prevBlogView.style.display = "block";
    }, 2000);
  }
});

nextBlog.addEventListener('click', function(e){
  console.log(currentBlogNumber);
  if (currentBlogNumber != lastBlogNumber) {
    currentBlogNumber = currentBlogNumber + 1;
    var next = ("0000" + currentBlogNumber).slice(-4);
    var elements = document.getElementsByClassName("blog");
    var nextBlogView = document.getElementById("blog" + next);
    console.log(nextBlogView);
    setTimeout(function() {
      for (var j=0; j < elements.length; j++) {
        elements[j].style.display = "none";
      };
    }, 1000);
    setTimeout(function() {
      nextBlogView.style.display = "block";
    }, 2000);
  }
});

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  //console.log(last_known_scroll_position);
  //console.log(h);
  if (last_known_scroll_position > 2*h){
    upimg.setAttribute('style','visibility:visible');
    downimg.setAttribute('style','visibility:hidden');
  } else {
    upimg.setAttribute('style','visibility:hidden');
    downimg.setAttribute('style','visibility:visible');
  }
});



upimg.addEventListener('click', function(e){
  window.scrollTo(0, 0);
});

downimg.addEventListener('click', function(e){
  window.scrollTo(0, 10000);
});

hljs.initHighlightingOnLoad();