/**
 * 
 * ? Es werden im einem Sritt sieben Konstanten deklariert dei den (Tasten) Klassen entsprechen, z.B. wBtn = .w
 * 
 */
const [wBtn, aBtn, sBtn, dBtn, jBtn, kBtn, lBtn] = document.querySelectorAll('.w, .a, .s, .d, .j, .k, .l');
/**
 * 
 * ? Es wird die Funktion 'playSound' deklariert die die Methode 'sond' hat.
 * 
 * ? Die Funktion 
 * 
 */
function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}

function pressMe(event) {
  const sounds = {
    'w': 'tom-1',
    'a': 'tom-2',
    's': 'tom-3',
    'd': 'tom-4',
    'j': 'snare',
    'k': 'crash',
    'l': 'kick-bass',
  };

  if (Object.keys(sounds).includes(event.key)) {
    playSound(sounds[event.key]);
  };
  btnAnimation(event.key)
};

function handleClick() {
  let event = this.innerHTML;
  switch (event) {
    case 'w':
      let tom1 = new Audio(`sounds/tom-1.mp3`)
      tom1.play()
      break;
    case 'a':
      let tom2 = new Audio(`sounds/tom-2.mp3`)
      tom2.play()
      break;
    case 's':
      let tom3 = new Audio(`sounds/tom-3.mp3`)
      tom3.play()
      break;
    case 'd':
      let tom4 = new Audio(`sounds/tom-4.mp3`)
      tom4.play()
      break;
    case 'j':
      let snare = new Audio(`sounds/snare.mp3`)
      snare.play()
      break;
    case 'k':
      let crash = new Audio(`sounds/crash.mp3`)
      crash.play()
      break;
    case 'l':
      let kb = new Audio(`sounds/kick-bass.mp3`)
      kb.play()
      break;
  
    default:
      console.log('Key was clicked');
      break;
  };
  btnAnimation(event)
};

function btnAnimation(currentKey) {
  let btnClick = document.querySelector("." + currentKey)
  btnClick.classList.add('pressed')
  setTimeout(function() {
    btnClick.classList.remove('pressed');
  }, 100);
}


document.addEventListener('keydown', pressMe,);

wBtn.addEventListener('click', handleClick);
aBtn.addEventListener('click', handleClick);
sBtn.addEventListener('click', handleClick);
dBtn.addEventListener('click', handleClick);
jBtn.addEventListener('click', handleClick);
kBtn.addEventListener('click', handleClick);
lBtn.addEventListener('click', handleClick);
