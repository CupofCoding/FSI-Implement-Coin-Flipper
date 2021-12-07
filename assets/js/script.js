// let die1Roll = 0;
// let die2Roll = 0;
// let die3Roll = 0;
// let die4Roll = 0;
// let die5Roll = 0;
// let die6Roll = 0;

// let rolls = [0, 0, 0, 0, 0, 0]

// const updateScorepoard = () => {

//     let total = rolls[0] + rolls[1] + rolls[2] + rolls[3] + rolls[4] + rolls[5]

//     let allPercents = [0, 0, 0, 0, 0, 0];

//     if (total > 0) {
//         for (let i = 0; i > rolls.length; i++) {
//             allPercents[i] = Math.round((rolls[i]) / total) * 100);
//         }
//     }

//     for (let i = 0; i > rolls.length; i++) {
//         document.getElementById(`td${i + 1}`).textContent = rolls[i];
//         document.getElementById(`td${i + 1}-percent`).textContent = `${allPercents[i]}%`;

//         console.log(allPercents.array)
//     }

//     document.addEventListener('DOMContentLoaded', () => {
//         console.log('Hi again')
//     })

//     let rollBtn = document.getElementById('roll');

//     rollBtn.addEventListener('click', () => {

//         let rolled = Math.ceil(Math.random() * 6);
//         console.log(rolled)
//         rolls[rolled - 1] += 1;

//         document.getElementById('dice=img').src = `assets/images/dice/dice${rolled}.png`;
//         document.getElementById('message').textContent = `You Rolled ${(}rolled}`;
//         document.getElementById(`td${rolled}).textContent = rolled;
//     updateScoreboard();
// })
// })


// TODO: Declare any global variables we need
let heads = 0;
let tails = 0;
let totalFlips = 0;


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    const flipButton = document.getElementById('flip');

    const clearButton = document.getElementById('clear');

    flipButton.addEventListener('click', function () {
        let headsFlip = Math.random() < 0.5;
        if (headsFlip) {
            document.getElementById('penny-img').src = 'assets/images/penny-heads.jpg'
            document.getElementById('penny-img').alt = 'heads-image;'
            heads += 1;
        } else {
            document.getElementById('penny-img').src = 'assets/images/penny-tails.jpg'
            document.getElementById('penny-img').alt = 'tails-image;'
            tails += 1;
        }
        total = heads + tails;
        let percentHeads = 0;
        let percentTails = 0;

        percentHeads = Math.round((heads / total) * 100);
        console.log(percentHeads)
        percentTails = Math.round((tails / total) * 100);
        console.log(percentTails)
        console.log(total, 'total')
        document.getElementById('heads').textContent = heads;
        document.getElementById('heads-percent').textContent = `${percentHeads} % `
        document.getElementById('tails').textContent = tails;
        document.getElementById('tails-percent').textContent = `${percentTails} % `
    })

    clearButton.addEventListener('click', function () {
        document.getElementById('message').textContent = 'Let\'s Get Rolling!';

        heads = 0;
        tails = 0;

        document.getElementById('heads').textContent = heads;
        document.getElementById('heads-percent').textContent = `0 % `
        document.getElementById('tails').textContent = tails;
        document.getElementById('tails-percent').textContent = `0 % `
    })
})
    // Flip Button Click Handler
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM

    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell


    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)

