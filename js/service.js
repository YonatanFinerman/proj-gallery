'use strict '

var gPortfolio



_AddPortfolio()

function getProtfolio() {
    return gPortfolio
}
console.log(gPortfolio)
function _AddPortfolio() {
    gPortfolio = [
        _AddProject('mine-sweeper', 'https://yonatanfinerman.github.io/Mine-Sweeper/', 1669569128000, "first-proj", "img/portfolio/mine-sweeper.png"),
        _AddProject('book-shop', 'https://yonatanfinerman.github.io/book-store/', 1669914728000, 'CRUDL', "img/portfolio/book-shop.png"),
        _AddProject('todos', 'https://yonatanfinerman.github.io/todos/', 1669828328000, 'MVC',"img/portfolio/todos.png"),
        _AddProject('pacman', 'https://yonatanfinerman.github.io/pacman/', 1669050728000, 'board games', "img/portfolio/pacman.png"),
        _AddProject('ball-game', 'https://yonatanfinerman.github.io/ball-game/', 1668964328000, 'on even click', "img/portfolio/ball-game.png"),
        _AddProject('touch-the-nums', 'https://yonatanfinerman.github.io/touch-the-nums/', 1668705128000, 'matrixes', "img/portfolio/touch-the-nums.png")
    ]
}


function _AddProject(name, url, time, lables, img) {

    return {
        id: name,
        name: name,
        desc: makeLorem(50),
        url: url,
        publishedAt: time,
        lables: lables,
        img: img
    }
}



function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}