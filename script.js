
'use strict'

const userHelp = function (str) {
    if (typeof str === 'string') {
        str = str.trim()
        if (str.length > 30) return `${str.substr(0, 30)}...`
        return str
    }
    return `${str} - не строка`
}


console.log(userHelp(32324))
console.log(userHelp(' 43434 '))
console.log(userHelp("23333333333333333333333333333333333333333333333"))