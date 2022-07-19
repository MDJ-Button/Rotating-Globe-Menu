var globe = document.querySelector('.globe');
var text = document.querySelector('.text');

const btnA = document.getElementById("btnA");

btnA.addEventListener("click", UpdateAnimationState);

var globeStyles = getComputedStyle(globe);
var textStyles = getComputedStyle(text);

var Playing = true;

function UpdateAnimationState()
{
  if(Playing)
  {
    text.style.animationPlayState = "paused";
    globe.style.animationPlayState = "paused";
    Playing = false;
  }
  else
  {
    text.style.animationPlayState = "running";
    globe.style.animationPlayState = "running";
    Playing = true;
  }
}
