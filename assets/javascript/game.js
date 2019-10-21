class Character {
    constructor(name, image, hp, att, conatt, myClass) {
        this.name = name;
        this.image = image;
        this.hp = hp;
        this.att = att;
        this.conatt = conatt;
        this.myClass = myClass;
    }
}

const characters = []
characters[0] = new Character("Jar Jar Binks", "Jar-Jar-Binks.jpg", 100, 1, 1, "jar-jar")
characters[1] = new Character("Anakin Skywalker", "Anakin.jpg", 100, 1, 1, "anakin")
characters[2] = new Character("Obi-Wan Kenobi", "Obi-Wan.jpg", 100, 1, 1, "obi-wan")
characters[3] = new Character("Qui-Gon Jinn", "Qui-Gon-Jinn.jpg", 100, 1, 1, "qui-gon")

function makeCard(obj) {
    const newChar = $("<div>");
    newChar.addClass("col char " + obj.myClass)
    const stats = $("<div>");
    stats.addClass("container")
    newChar.append('<img src="assets/images/' + obj.image + '" alt="Jar-Jar">')
    newChar.append('<div>' + obj.name + '</div>')
    stats.append('<div>HP: ' + obj.hp + '</div>')
    stats.append('<div>Attack: ' + obj.att + '</div>')
    stats.append('<div>Counter Attack: ' + obj.conatt + '</div>')
    newChar.append(stats)
    return newChar
}

var protagonist
var opponents = {}
var currentOp

for (let i = 0; i < characters.length; i++) {

    $("#characters").append(makeCard(characters[i]))
}

$(document).ready(function () {

    //$(".characters").html



    $(".char").on("click", function () {
        // var clicked = $("<div>")
        console.log(this)
        console.log($("<div>"))
    })





})