
$('#start').on('click', ()=>{
    console.log('button works')

    game.setGameTimer()
})

$('.cards').on('click', (e)=>{
    // console.log('card clicked')
    console.log(e.target.name)
    if(!game.firstCardFlipped) {
        game.firstCardFlipped = e.target.name
    } else {
        game.secondCardFlipped = e.target.name
        game.checkForMatch(game.firstCardFlipped, game.secondCardFlipped)
        if(game.firstCardFlipped === game.secondCardFlipped){
            console.log('Cards are a MATCH!')
            game.firstCardFlipped='';
            game.secondCardFlipped='';
        } 
        else {
            game.firstCardFlipped != game.secondCardFlipped
            console.log('NOT a match')
            game.firstCardFlipped='';
            game.secondCardFlipped='';
        }
    }
    
})




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
    flipCard(){
        
        //if the first card is clicked, flip card, and keep the card from flipping
        //if the second card is clicked, flip card, and keep the card from flipping back

        

    },
    checkForMatch(card1, card2){
        //compare two flipped cards
        //if first card flipped image === second card flipped image, keep cards frontside
        //esle reset to backside
        // console.log(card1, card2, 'THESE ARE YO CARDS!!!!')

        
        

    },
    resetGame(){
        //if the timer hits 30 and not all the cards are flipped, reset cards
        
    },
    shuffleCards(){

    }

}









