class Drumkit {
  constructor() {

    this.playSound = this.playSound.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    document.body.addEventListener('keydown', this.playSound);
    document.body.addEventListener('transitionend', this.transitionEnd);
  }

  playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  transitionEnd(e) {
    if (e.target.classList.contains('key')) {
      e.target.classList.remove('playing');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const drumkit = new Drumkit();
});
