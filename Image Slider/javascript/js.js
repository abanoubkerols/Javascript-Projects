let ourImgs = Array.from(document.querySelectorAll(".item img"));
let bigImg = document.getElementById("light-slider-container");
let newImg = document.getElementById("light-item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let closebtn = document.getElementById("close");

console.log(ourImgs);

let current;

for (let i = 0; i < ourImgs.length; i++) {
  ourImgs[i].addEventListener("click", function (e) {
    console.log(e);
    bigImg.classList.replace("d-none", "d-flex");

    let imgSrc = e.target.getAttribute("src");
    current = ourImgs.indexOf(e.target);
    newImg.style.backgroundImage = `url(${imgSrc})`;
  });
}

function nextImg() {
  current++;
  if (current == ourImgs.length) {
    current = 0;
  }
  let mySrc = ourImgs[current].getAttribute("src");
  newImg.style.backgroundImage = `url(${mySrc})`;
}

function prevImg() {
  current--;
  if (current < 0) {
    current = ourImgs.length - 1;
  }
  let mySrc = ourImgs[current].getAttribute("src");
  newImg.style.backgroundImage = `url(${mySrc})`;
}

function close() {
  bigImg.classList.replace("d-flex", "d-none");
}


next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);
closebtn.addEventListener("click", close);

document.addEventListener("keyup", function (e) {
  if (bigImg.classList.contains("d-flex")) {
    if (e.key == "ArrowRight") {
      nextImg();
    } else if (e.key == "ArrowLeft") {
      prevImg();
    } else if (e.key == "Escape") {
      close();
    }
  }
});



bigImg.addEventListener("click" , function(e){
  
  if(this === e.target ){
    close()
  }
})