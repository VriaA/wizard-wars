import { characters } from "./data.js"
import { Character } from "./character.js" 

const monstersArray = ["orc", "demon", "goblin"]

const wizard = new Character(characters.hero)
let monster = getNewMonster()
let isWaiting = ''

function renderCards() {
    document.getElementById('hero').innerHTML = wizard.getCards()
    document.getElementById('monster').innerHTML = monster.getCards()
}

renderCards()

function getNewMonster() {
    const newMonsterData = characters[monstersArray.shift()]
    return newMonsterData ? new Character(newMonsterData) : {}
}

document.getElementById('attack-btn').addEventListener('click', attack)

function attack() {
    if(!isWaiting) {
        wizard.setDiceHTML()
        monster.setDiceHTML()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        renderCards()
    
        if(wizard.dead) {
            endgame()
        }else {
            if(monster.dead) {
                if(monstersArray.length > 0) {
                    isWaiting = true
                        setTimeout(_=>{
                            monster = getNewMonster()
                            isWaiting = false
                            renderCards()
                        }, 1000)
                } else {
                    endgame()
                }
            } else {
                renderCards()
            }
        }
    }
}

function endgame() {
    setTimeout(_=> {
        const gameOverMessageCntr = document.getElementById('game-over')
    
        gameOverMessageCntr.style.display = 'block'
    
        const endMessage = !wizard.dead ? `The wizard is victorious` : wizard.dead && !monster.dead ? `The ${monster.name} is victorious.` : `There are no victors.`
        const endEmoji = !wizard.dead ? '🔮' : `💀`
        
        gameOverMessageCntr.innerHTML = `<span id="close-message" class="fixed top-0 left-0 sm:m-8 text-2xl sm:text-4xl 
                                                                            hover:cursor-pointer hover:text-red-700 
                                                                            rounded-full m-6 font-bold text-cyan-200"> 
                                        &#10005;</span>
                                        <h2 class="font-wetPaint text-red-700 text-6xl sm:text-8xl mt-8">Game over</h2>
                                        <p class="font-odibeeSans text-4xl sm:text-6xl mt-20" style="text-shadow: 0 0 1px #000000;">${endMessage}</p>
                                        <div class="text-9xl mt-[6rem]">${endEmoji}</div>`
        document.getElementById('close-message').addEventListener('click', _=>{
            gameOverMessageCntr.style.display = 'none'
            window.location.replace('index.html')
        })
    }, 1000)

}