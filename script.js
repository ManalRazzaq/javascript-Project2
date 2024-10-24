// FIRST STEP WE TARGET BODYel
const bodyel = document.querySelector("body");

//2nd step we add event listener or function e and log "moved" check work ornot
bodyel.addEventListener("mousemove" , (e)=>{
// console.log("moved");
// console.log(e.offsetX);
// console.log(e.offsetY);
//3rd step create 2variables for x and y positions;
const xpost = e.offsetX;
const ypost = e.offsetY;
//4th step create spanelement
const spanel = document.createElement("span");
spanel.style.left = xpost + "px";
spanel.style.top = ypost + "px";
const size = Math.random()*100;
spanel.style.width = size + "px";
spanel.style.height = size + "px";
bodyel.append(spanel);
// 5th step add animation in css
//6th set timeout add
// we use set time out to remove the span after few sec so heart not look messy
setTimeout(() => {
    spanel.remove();
}, 3000);
//7th step we use random number to chaange thw width and height the span we will set we use this after style span
//after all step we change heart color with filter in csss and also body overflow hidden
})



