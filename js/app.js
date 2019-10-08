

$('#start').on('click', ()=>{
    console.log('button works')

    game.setGameTimer()
})


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
    cards: [],
    time: 0,
    firstCardFlipped: '',
    secondCardFlipped: '',
    flippedCard: false,
    gameEnded: false, 
    setGameTimer(){
        const $timer = $('.timer');
        const interval = setInterval(()=>{
            this.time++
            $timer.text(`Time: ${this.time}`);
            if(this.time === 10){
                this.gameEnded = true;
                clearInterval(interval);
                $('.cards').removeClass('active');
                $('.cards').removeClass('flipped');
                alert('Game Over')
            }
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
    resetGame(){

        //if the timer hits 30 and not all the cards are flipped, reset cards
        //deactivate/reactivate
        //if game over is true, then reset flip cards
        
       
           
    },
    shuffleCards(){

        //when new game is initiated, shuffle the cards

    }

}

bindClickToCards()




// $('.cards').on('click', () => {
//     if(!game.gameInProgress) {
//         game.setGameTimer()
//         game.gameInProgress = true
//     }
// })


