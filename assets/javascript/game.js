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

function makeCard(obj, id) {
    const newChar = $("<div>");
    newChar.addClass("col char " + obj.myClass)
    const stats = $("<div>");
    stats.addClass("container")
    newChar.append('<img src="assets/images/' + obj.image + '" alt="Jar-Jar">')
    newChar.append('<div>' + obj.name + '</div>')
    stats.append('<div>HP: ' + obj.hp + '</div>')
    if (id === "c" || id === "p") {
        stats.append('<div>Attack: ' + obj.att + '</div>')
    }
    if (id === "c" || id === "o") {
        stats.append('<div>Counter Attack: ' + obj.conatt + '</div>')
    }

    newChar.append(stats)
    return newChar
}

var protagonist = -1
var opponents = []
var currentOp = -1

$("#instructions").html("<h3>Choose Character:</h3>")

for (let i = 0; i < characters.length; i++) {
    const newChar = makeCard(characters[i], "c")
    newChar.attr("char-id", i)
    $("#characters").append(newChar)
}

$(document).ready(function () {


    $(".char").on("click", function () {
        console.log("check q")
        if (protagonist === -1) {

            protagonist = parseInt($(this).attr("char-id"))

            $("#instructions").empty()
            $("#instructions").html("<h3>Pick an opponent:</h3>")
            $("#characters").empty()

            for (let i = 0; i < characters.length; i++) {
                if (i !== protagonist) {
                    const newChar = makeCard(characters[i], "o")
                    newChar.attr("char-id", i)
                    $("#characters").append(newChar)

                }
            }
            $("#protagonist").append(makeCard(characters[protagonist], "p"))
            return
        } else if (currentOp === -1 & protagonist !== parseInt($(this).attr("char-id"))) {
            console.log("check 1")
            currentOp = parseInt($(this).attr("char-id"))
            $("#instructions").empty()
            $("#instructions").html("<h3>Defeat your Opponent!</h3>")
            $("#defender").append(makeCard(characters[currentOp], "o"))

        } else {
            console.log("check 2")
        }

    })



})