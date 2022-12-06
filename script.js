'use strick'

const prsonalHelp(str) {
    if (typeof str === 'string') {
        return str
    }
    return `${str} - не строка`
}
console.log()