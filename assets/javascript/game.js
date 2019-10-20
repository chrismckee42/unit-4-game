class Character {
    constructor(name, image, hp, att, conatt) {
        this.name = name;
        this.image = image;
        this.hp = hp;
        this.att = att;
        this.conatt = conatt;
    }
}

const characters = []
characters[0] = new Character("Jar Jar Binks", "Jar-Jar-Binks.jpg", 100, 1, 1)
characters[1] = new Character("Anakin Skywalker", "Anakin.jpg", 100, 1, 1)
characters[2] = new Character("Obi-Wan Kenobi", "Obi-Wan.jpg", 100, 1, 1)
characters[3] = new Character("Qui-Gon Jinn", "Qui-Gon-Jinn.jpg", 100, 1, 1)

for (let i = 0; i < characters.length; i++) {
    const newChar = $("<span>");
    newChar.addClass("char")
    newChar.append('<img src="assets/images/Jar-Jar-Binks.jpg" alt="Jar-Jar">')
    newChar.append('<div>Jar-Jar</div>')
    newChar.append('<span>HP: 100</span>')
    newChar.append('<span>Attack: 1</span>')
    newChar.append('<span>Counter Attack: 1</span>')
    $(".characters").append(newChar)
}

$(document).ready(function () {

    $(".characters").html



    $(".char").on("click", function () {
        // var clicked = $("<div>")
        $(this).attr("border-color", "green")
        $(this).attr("border-width", "5px")
        console.log(this)
        console.log($("<div>"))
    })





})