function getDiceArray(count) {
    return new Array(count).fill(0).map(dice=> {
        return Math.floor(Math.random() *6 +1)
    })
}

function getPlaceholderHTML(count) {
    return getDiceArray(count).map(die=> `<div class="h-8 sm:h-10 w-8 sm:w-10 border border-slate-300 rounded"></div>`).join('')
} 

export {getDiceArray, getPlaceholderHTML}