input.onButtonPressed(Button.A, function () {
    jugadorArriba.change(LedSpriteProperty.Y, -1)
    jugadorAbajo.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    jugadorArriba.change(LedSpriteProperty.Y, 1)
    jugadorAbajo.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    jugadorArriba.change(LedSpriteProperty.X, -1)
    jugadorArriba.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    jugadorArriba.change(LedSpriteProperty.X, 1)
    jugadorArriba.change(LedSpriteProperty.Y, -1)
})
let jugadorAbajo: game.LedSprite = null
let jugadorArriba: game.LedSprite = null
jugadorArriba = game.createSprite(1, 3)
jugadorAbajo = game.createSprite(1, 4)
let objeto = game.createSprite(4, 4)
basic.forever(function () {
    objeto.change(LedSpriteProperty.X, 1)
    basic.pause(1000)
})
