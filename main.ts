namespace SpriteKind {
    export const Button = SpriteKind.create()
}
function redPress () {
    red.setImage(assets.image`redButtonPush`)
    red.startEffect(effects.fountain, 500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pause(500)
    red.setImage(assets.image`redButton`)
    pause(500)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 0) {
            currentGuess += 1
            redPress()
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 0
        userTurn = false
        addLight()
        lightUp()
        info.changeScoreBy(1)
    }
})
function bluePress () {
    blue.setImage(assets.image`yellowButtonPush`)
    blue.startEffect(effects.fountain, 500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pause(500)
    blue.setImage(assets.image`blueButton`)
    pause(500)
}
function setButton () {
    red = sprites.create(assets.image`redButton`, SpriteKind.Player)
    red.setPosition(80, 40)
    green = sprites.create(assets.image`greenButton`, SpriteKind.Player)
    green.setPosition(80, 80)
    blue = sprites.create(assets.image`blueButton`, SpriteKind.Player)
    blue.setPosition(60, 60)
    yellow = sprites.create(assets.image`yellowButton`, SpriteKind.Player)
    yellow.setPosition(100, 60)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 2) {
            currentGuess += 1
            bluePress()
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 2
        userTurn = false
        addLight()
        lightUp()
        info.changeScoreBy(1)
    }
})
function lightUp () {
    for (let value of lights) {
        if (value == 0) {
            redPress()
        } else if (value == 1) {
            greenPress()
        } else if (value == 2) {
            bluePress()
        } else {
            yellowPress()
        }
    }
    userTurn = true
    currentGuess = 0
}
function yellowPress () {
    yellow.setImage(assets.image`greenButtonPush`)
    yellow.startEffect(effects.fountain, 500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pause(500)
    yellow.setImage(assets.image`yellowButton`)
    pause(500)
}
function addLight () {
    randLight = randint(0, 3)
    lights.push(randLight)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 3) {
            currentGuess += 1
            yellowPress()
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 3
        userTurn = false
        addLight()
        lightUp()
        info.changeScoreBy(1)
    }
})
function wrongGuess () {
    game.over(false, effects.melt)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (userTurn) {
        if (lights[currentGuess] == 1) {
            currentGuess += 1
            greenPress()
        } else {
            wrongGuess()
        }
    }
    if (currentGuess == lights.length) {
        currentGuess = 1
        userTurn = false
        addLight()
        lightUp()
        info.changeScoreBy(1)
    }
})
function greenPress () {
    green.setImage(assets.image`blueButtonPush`)
    green.startEffect(effects.fountain, 500)
    music.playTone(262, music.beat(BeatFraction.Whole))
    pause(500)
    green.setImage(assets.image`greenButton`)
    pause(500)
}
let randLight = 0
let yellow: Sprite = null
let green: Sprite = null
let blue: Sprite = null
let currentGuess = 0
let red: Sprite = null
let userTurn = false
let lights: number[] = []
scene.setBackgroundColor(1)
setButton()
lights = []
userTurn = false
addLight()
lightUp()
info.setScore(0)
