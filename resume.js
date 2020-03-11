const logo = document.getElementById("logo");
let logoVisible = true
function playAnimation() {
    
    if (logoVisible === true) {
        logo.src = "graphics/Pat Maloney Disappear One Play.gif";
        logoVisible = false;
    } else {
        logo.src="graphics/Pat Maloney Appear One Play.gif";
        logoVisible = true;
    }
}

logo.onclick = playAnimation
