console.log('page running')

// const game = {
//     board =[
//         [],
//         [],
//         []
//     ]

// }
//cards: [resources/cards/barb.png, resources/cards/beetlejuice.png, resources/cards/lydia.png, resources/cards/missargentina.png, resources/cards/sandsnake.png, resources/cards/guide.png],

$('#start').on('click', ()=>{
    console.log('button works')

    game.setGameTimer()
})
$('.cards').on('click', ()=>{
    console.log('card clicked')

})

const game = {
    cards: [],
    time: 0,
    isCardFlipped: false,
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


    },
    checkForMatch(){

    },
    resetGame(){
        
    }

}









