
function  playSound(e){
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // If no audio is found, exit the function
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!key) return; // If no key is found, exit the function
        key.classList.add("playing");
        
    audio.currentTime = 0; // Rewind to the start
        audio.play();
        
    }
  window.addEventListener('keydown', playSound);
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if not a transform event
    this.classList.remove('playing');
}
  const keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

