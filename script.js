document.addEventListener('mousemove', function(e) {
    let circle = document.getElementById('neonmist');
    let left = e.screenX;
    let top = e.screenY;
    circle.style.left = left
    circle.style.top = top 
  });