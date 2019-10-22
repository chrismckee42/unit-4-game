class Character {
    constructor(name, image, hp, att, conatt, myClass) {
        this.name = name;
        this.image = image;
        this.hp = hp;
        this.att = att;
        this.baseAtt = att;
        this.conatt = conatt;
        this.myClass = myClass;
    }
}

const characters = []
characters[0] = new Character("Jar Jar Binks", "Jar-Jar-Binks.jpg", 1000, 2, 4, "jar-jar")
characters[1] = new Character("Anakin Skywalker", "Anakin.jpg", 100, 3, 4, "anakin")
characters[2] = new Character("Obi-Wan Kenobi", "Obi-Wan.jpg", 300, 4, 6, "obi-wan")
characters[3] = new Character("Qui-Gon Jinn", "Qui-Gon-Jinn.jpg", 200, 5, 8, "qui-gon")

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
var dead = []
var currentOp = -1
var gameOver = false

$("#instructions").html("<h3>Choose Character:</h3>")

for (let i = 0; i < characters.length; i++) {
    const newChar = makeCard(characters[i], "c")
    newChar.attr("char-id", i)
    $("#characters").append(newChar)
}


function intitialize() {

    $(".char").on("click", function () {
        //console.log("check q")
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

        } else if (currentOp === -1 &
            protagonist !== parseInt($(this).attr("char-id")) &
            dead.indexOf(parseInt($(this).attr("char-id"))) === -1) {
            console.log("check 1")
            currentOp = parseInt($(this).attr("char-id"))
            $("#instructions").empty()
            $("#instructions").html("<h3>Defeat your Opponent!</h3>")
            $("#characters").empty()
            $("#defender").empty()
            $("#defender").append(makeCard(characters[currentOp], "o"))
            for (let i = 0; i < characters.length; i++) {
                if (i !== protagonist & i !== currentOp & dead.indexOf(i) === -1) {
                    const newChar = makeCard(characters[i], "o")
                    newChar.attr("char-id", i)
                    $("#characters").append(newChar)

                }
            }
        } else {
            console.log("check 2")
        }

        intitialize()
    })
}

$(document).ready(function () {
    intitialize()

    $("#attack").on("click", function () {
        if (currentOp !== -1) {
            console.log(characters[protagonist].att)
            characters[currentOp].hp -= characters[protagonist].att
            characters[protagonist].att += characters[protagonist].baseAtt
            if (characters[currentOp].hp <= 0) {
                // pick new opponent
                characters[currentOp].hp = 0
                $("#defender").empty()
                $("#defender").append(makeCard(characters[currentOp], "o"))
                dead.push(currentOp)
                currentOp = -1
                $("#instructions").empty()
                if (dead.length === 3) {
                    $("#instructions").html("<h3>You Win!</h3>")
                } else {
                    $("#instructions").html("<h3>Select New Opponent!</h3>")
                }
            } else {
                characters[protagonist].hp -= characters[currentOp].conatt
                if (characters[protagonist].hp <= 0) {
                    // you died
                    characters[protagonist].hp = 0
                    $("#instructions").empty()
                    $("#instructions").html("<h3>You Died! Game Over!</h3>")
                } else {

                }
                $("#defender").empty()
                $("#defender").append(makeCard(characters[currentOp], "o"))
            }
            $("#protagonist").empty()
            $("#protagonist").append(makeCard(characters[protagonist], "p"))
        }
        //console.log("attack")
        //intitialize()
    })
})