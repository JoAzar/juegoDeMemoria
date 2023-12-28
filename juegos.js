const emojis = ["🐖", "🐖", "🐐", "🐐", "🐘", "🐘", "🐇", "🐇", "🦔", "🦔", "🦥", "🦥", "🐈", "🐈", "🦌", "🦌"];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

var random_emojis = shuffleArray(emojis);

document.addEventListener("DOMContentLoaded", function () {

    const box2 = document.querySelector('.juego');

    for(var i = 0; i < random_emojis.length; i++){
        const box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = random_emojis[i];

        box.onclick = function(){
          this.classList.add('boxOpen')
          setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
              if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if(document.querySelectorAll('.boxMatch').length == emojis.length) {
                  alert('YOU WIN')
                }
              }else{
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }
          },500)
        }

        box2.appendChild(box);
    }
});