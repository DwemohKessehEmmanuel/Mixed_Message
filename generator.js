let factos = ['Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball',
'It takes Earth 23.934 hours to complete a rotation on its axis and 365.26 days to complete an orbit around the sun',
'Our planet is a bit closer to the sun in early January and farther away in July',
"Recent evidence suggests that Earth's crust and oceans may have formed within about 200 million years after the planet took shape.",
]

const randFacts = () =>{
    let randomNum = Math.floor(Math.random()*factos.length)
    return factos[randomNum]
}
randFacts()

let button = document.getElementById('button1');
let factMessage = document.getElementById('fact');

function showFact(){
    button.innerHTML = "Click for More"
    factMessage.innerHTML = randFacts()
    

}

button.addEventListener('click', showFact )
