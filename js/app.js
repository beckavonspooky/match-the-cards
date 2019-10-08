
$('#start').on('click', ()=>{
    console.log('button works')

    game.setGameTimer()
})


function bindClickToCards () {
    $('.cards').on('click', flipCard)

}

function flipCard (e) {
   
    $(e.target).parent().toggleClass('active')

    //checking for matches
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

// .cards:active{
//     transform: rotateY(180deg);
//     apply class element to e.target
//     addclass or toggle class $('.cards:active').toggle();


const game = {
    cards: [],
    time: 0,
    firstCardFlipped: '',
    secondCardFlipped: '',
    flippedCard: false,
    setGameTimer(){
        const $timer = $('.timer');
        const interval = setInterval(()=>{
            this.time++
            $timer.text(`Time: ${this.time}`);
            if(this.time === 30){
                clearInterval(interval);
            }
        }, 1000) 
    },

    resetCards() {
        this.firstCardFlipped='';
        this.secondCardFlipped='';
        $('.cards').removeClass('active')
        bindClickToCards()
    },

    flipCard(){
        
        //if the first card is clicked, flip card, and keep the card from flipping
        //if the second card is clicked, flip card, and keep the card from flipping back

    },
    checkForMatch(card1, card2){
        //compare two flipped cards
        //if first card flipped image === second card flipped image, keep cards frontside
        //esle reset to backside
        console.log(card1, card2, 'THESE ARE YO CARDS!!!!')

    },
    resetGame(){
        //if the timer hits 30 and not all the cards are flipped, reset cards
        
    },
    shuffleCards(){

    }

}

bindClickToCards()







