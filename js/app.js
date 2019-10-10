
//music tracks//

let themeAudio = new Audio("audio/beetlejuice-main-title-edit.mp3");
let laughAudio = new Audio("audio/laugh-long.mp3")

//starts the game//

$('#start').on('click', ()=>{
    if(game.gameEnded) {
        console.log('STARTING GAME');
        game.setGameTimer();
    }
    
})

//reset game pop up//
let popUpBox = document.getElementById("pop-up-box");
let popUpText = document.getElementById("pop-up-text");

document.getElementById("playAgain").addEventListener("click", function () {
    $('.cards').removeClass('active');
    $('.cards').removeClass('flipped');
    themeAudio.pause(); // stop theme music
    laughAudio.play(); // start game over music
    game.shuffleCards();
    location.reload();
});


//binds cards on click//
function bindClickToCards () {
    $('.cards').on('click', flipCard);
    


}
//flip the cards//
function flipCard (e) {

    //disables click on cards after game is over.
    if(game.gameEnded){
        game.gameEnded = true;
        return
    } else if ($(e.target).parent().hasClass('active')) { //prevents double click if card is active
        return;
    }

    $(e.target).parent().addClass('active')
    
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

//game object//
const game = {
    deck: ['resources/cards/barb.png', 'resources/cards/beetlejuice.png','resources/cards/lydia.png', 'resources/cards/missargentina.png','resources/cards/sandsnake.png','resources/cards/guide.png','resources/cards/barb.png', 'resources/cards/beetlejuice.png','resources/cards/lydia.png', 'resources/cards/missargentina.png','resources/cards/sandsnake.png','resources/cards/guide.png'],
    time: 10,
    firstCardFlipped: '',
    secondCardFlipped: '',
    flippedCard: false,
    gameEnded: true, 
    setGameTimer(){
        this.gameEnded = false
        themeAudio.play(); //starts theme music
        const $timer = $('.timer');
        const interval = setInterval(()=>{
            if(this.time === 0){
                this.gameEnded = true;
                clearInterval(interval); // stops the interval
                popUpBox.style.display = "block"; //game over
                themeAudio.pause();
                laughAudio.play();
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
    
        arrayShuffle = function (deck){
            let newPos;
            let temp;
            for(let i = arr.length -1; i >0; i--){
                newPos = Math.floor(Math.random() * (i + 1));
                temp = arr[i];
                arr[i]= arr[newPos];
                arr[newPos] = temp;
            }
            return deck;
        };


    },

}
bindClickToCards()


