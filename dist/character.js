import {getDiceArray, getPlaceholderHTML } from "./utils.js"

export class Character {
    constructor(data) {
        Object.assign(this, data)
        this.diceHTML = getPlaceholderHTML(this.diceCount)
        this.maxhealth = this.health
    }

    getHealthPercentage() {
        return (this.health / this.maxhealth) * 100
    }


    setDiceHTML() {
        this.currentDiceScore = getDiceArray(this.diceCount)
        return this.diceHTML = this.currentDiceScore.map(die=> `<div class="px-3 py-1 text-2xl sm:py-2 sm:px-4 bg-white rounded">${die}</div>`).join('')
    }

    takeDamage(totalAttackScrore) {
        this.totalDiceScore = totalAttackScrore.reduce((remainingScores, currentScore)=> remainingScores + currentScore)
        this.health -= this.totalDiceScore
        if(this.health <= 0) {
            this.health = 0
            this.dead = true
        }
    }
    
    getCards() {
        const {name, health} = this
        const healthPercent = this.getHealthPercentage()
        let progressBarColor = ''
        if(healthPercent <= 25 ) {
            progressBarColor = 'bg-red-500'
        }else {
            progressBarColor = 'bg-cyan-200'
        }
        
        return `<h2 class="text-3xl font-bold mt-2 capitalize">${name}</h2>
                    <img class="bg-avatar w-24 sm:w-36 mx-auto my-3 rounded-md border-2
                    border-card-border hover:shadow-2xl hover:shadow-blue-900" src="${this.avatar}"
                     alt="${this.alt}"></img>
                    <p class="text-md text-left mx-6 font-light">health: <span class="font-bold">${health}</span></p>
                    <div class="w-full mt-4 px-6 h-1 rounded-full overflow-hidden">
                        <div class="w-full h-full bg-zinc-900">
                            <div class="h-full ${progressBarColor} rounded-full" style="width:${healthPercent}%;"></div>
                        </div>
                    </div>
                    <div class="flex justify-center mt-8 sm:mt-12 py-2 sm:py-8 gap-2 bg-card-border text-black">
                        ${this.diceHTML}
                    </div>`
    }
} 