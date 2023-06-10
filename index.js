const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    left -= 1;
    dodger.style.left = `${left}px`;
  }
}



function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers);

  if (left < 360) {
    left += 1;
    dodger.style.left = `${left}px`;
  }
}



