const name = "Samiya";
document.getElementById("name").innerText = name;

const quotes = [
    "You know you are a unkonwn Star from my Galaxy",
    "Keep shine like a diamond sky✨",
    "May you Fullfil your all Dreams💖",
    "You seem to be passing through a tough time for your Final Exam. Just believe in yourself and say 'All Izz Well'. Seriously it really works. Not Joking!",
    "Really! You'll never find a Rainbow if you remain looking down.",
    "But You're something brighter than Rainbow.",
    "Very Lastly, Don't know if I make your day happy or if I felt embarrassed you, just do this crazy things since last 3 days when i am able to know that 14 Aug is your very special Day..",
    "Signing Out - Samir"
];

let speed=[5.6,6.8,6,7,7.6,6,5,6.6,8,5]
let rain='';
let number=5;

for(let i=0; i<10; i++) {
    let randomSec=Math.random();
    let duration=speed[i]

    let delay=(Math.floor(randomSec*1)+1)+(Math.floor(randomSec*5));

    console.log(duration)
    rain+=`

    <div class="raindrop"  style="
    left:${number}%;
    animation-duration:${duration}s;
    animation-delay: 0.${delay};
    ">&#128151</div>`
    number+=10;
}

document.querySelector('.rain-container').innerHTML=rain;

function showSurprise(){
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.style.display = 'block';

    document.querySelector('.rain-container').classList.add('displayRain')
}

function showQuote(){
    const quoteBox = document.getElementById('quote-box');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.innerHTML = randomQuote;
    quoteBox.style.display = 'block';
}