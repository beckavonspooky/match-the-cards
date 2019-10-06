console.log('page running')

// const game = {
//     board =[
//         [],
//         [],
//         []
//     ]

// }


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
        }, 1000)
        if(this.time === 30){
            clearInterval(interval);
        }
    },
    flipCard(){


    }
}









