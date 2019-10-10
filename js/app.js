
//music tracks

let themeAudio = new Audio("audio/beetlejuice-main-title-edit.mp3");


//starts the game

$('#start').on('click', ()=>{
    if(game.gameEnded) {
        console.log('STARTING GAME');
        game.setGameTimer();
        
    }
    
})

//reset game//
let popUpBox = document.getElementById("pop-up-box");
let popUpText = document.getElementById("pop-up-text");

document.getElementById("playAgain").addEventListener("click", function () {
    
    $('.cards').removeClass('active');
    $('.cards').removeClass('flipped');
	location.reload();
});

//binds cards on click
function bindClickToCards () {
    $('.cards').on('click', flipCard)
   

}

function flipCard (e) {

    //disables click after game is over.
    if(game.gameEnded){
        game.gameEnded = true;
        return
    }
    
    $(e.target).parent().toggleClass('active')


    //checking for matches + flips cards when clicked + keeps matches up
    if(!game.firstCardFlipped) {
        game.firstCardFlipped = e.target.parentNode.dataset.name
    } else {
        game.secondCardFlipped = e.target.parentNode.dataset.name
        game.checkForMatch(game.firstCardFlipped, game.secondCardFlipped)
        $('.cards').unbind('click', flipCard)
        if(game.firstCardFlipped === game.secondCardFlipped){
            console.log('Cards are a MATCH!')
            $(`div[data-name=${game.firstCardFlipped}]`).addClass('flipped')
            game.firstCardFlipped='';
            game.secondCardFlipped='';
            bindClickToCards()
        } 
        else if(game.firstCardFlipped !== '' && game.secondCardFlipped !== '') {
            console.log('NOT a match')
            setTimeout(() => game.resetCards(), 1000)  
            return 
            
        }
        
    }
}


const game = {

    time: 10,
    firstCardFlipped: '',
    secondCardFlipped: '',
    flippedCard: false,
    gameEnded: true, 
    setGameTimer(){
        this.gameEnded = false
        themeAudio.play();
        const $timer = $('.timer');
        const interval = setInterval(()=>{
            if(this.time === 0){
                this.gameEnded = true;
                clearInterval(interval); // stops the interval
                popUpBox.style.display = "block"; //game over
              } else {
                this.time--
              }
              $timer.text(`Time: ${this.time}`)
            
        }, 1000) 
    },
    
    resetCards() {
        this.firstCardFlipped='';
        this.secondCardFlipped='';
        $('.cards').removeClass('active')
        bindClickToCards()

    },

    checkForMatch(card1, card2){
        
        console.log(card1, card2, 'THESE ARE YO CARDS!!!!')

    },
    shuffleCards(){
        
        // reset gameEnded to false
        // var $cards = $('.cards).detach()
        // $('.card-board').append(cards[add index #])
        // bindClicktocards()


    },

}
bindClickToCards()


